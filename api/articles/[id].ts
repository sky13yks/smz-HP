import type { VercelRequest, VercelResponse } from '@vercel/node';

interface NotionRichText {
  plain_text: string;
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
  };
  href: string | null;
}

interface NotionBlock {
  id: string;
  type: string;
  [key: string]: unknown;
}

interface ArticleBlock {
  id: string;
  type: string;
  text: string;
  richText?: Array<{
    text: string;
    bold: boolean;
    italic: boolean;
    code: boolean;
    strikethrough: boolean;
    underline: boolean;
    href: string | null;
  }>;
  items?: string[];
}

function extractRichText(richTexts: NotionRichText[]) {
  return richTexts.map(rt => ({
    text: rt.plain_text,
    bold: rt.annotations.bold,
    italic: rt.annotations.italic,
    code: rt.annotations.code,
    strikethrough: rt.annotations.strikethrough,
    underline: rt.annotations.underline,
    href: rt.href,
  }));
}

function plainText(richTexts: NotionRichText[]): string {
  return richTexts.map(rt => rt.plain_text).join('');
}

function parseBlock(block: NotionBlock): ArticleBlock | null {
  const type = block.type;
  const data = block[type] as Record<string, unknown> | undefined;
  if (!data) return null;

  const richTexts = (data.rich_text as NotionRichText[]) || [];

  switch (type) {
    case 'paragraph':
      return { id: block.id, type: 'paragraph', text: plainText(richTexts), richText: extractRichText(richTexts) };
    case 'heading_1':
      return { id: block.id, type: 'h1', text: plainText(richTexts), richText: extractRichText(richTexts) };
    case 'heading_2':
      return { id: block.id, type: 'h2', text: plainText(richTexts), richText: extractRichText(richTexts) };
    case 'heading_3':
      return { id: block.id, type: 'h3', text: plainText(richTexts), richText: extractRichText(richTexts) };
    case 'bulleted_list_item':
      return { id: block.id, type: 'bullet', text: plainText(richTexts), richText: extractRichText(richTexts) };
    case 'numbered_list_item':
      return { id: block.id, type: 'numbered', text: plainText(richTexts), richText: extractRichText(richTexts) };
    case 'quote':
      return { id: block.id, type: 'quote', text: plainText(richTexts), richText: extractRichText(richTexts) };
    case 'callout':
      return { id: block.id, type: 'callout', text: plainText(richTexts), richText: extractRichText(richTexts) };
    case 'divider':
      return { id: block.id, type: 'divider', text: '' };
    case 'code':
      return { id: block.id, type: 'code', text: plainText(richTexts) };
    default:
      if (richTexts.length > 0) {
        return { id: block.id, type: 'paragraph', text: plainText(richTexts), richText: extractRichText(richTexts) };
      }
      return null;
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const notionKey = process.env.NOTION_API_KEY;
  const { id } = req.query;

  if (!notionKey || !id || typeof id !== 'string') {
    return res.status(400).json({ error: 'Invalid request' });
  }

  try {
    // Fetch page properties
    const pageRes = await fetch(`https://api.notion.com/v1/pages/${id}`, {
      headers: {
        'Authorization': `Bearer ${notionKey}`,
        'Notion-Version': '2022-06-28',
      },
    });

    if (!pageRes.ok) {
      return res.status(404).json({ error: 'Article not found' });
    }

    const page = await pageRes.json();
    const props = page.properties;

    const titleProp = props['タイトル'];
    const title = titleProp?.title?.map((t: NotionRichText) => t.plain_text).join('') ?? '';
    const category = props['種別']?.select?.name ?? '';
    const topics = props['トピック']?.multi_select?.map((t: { name: string }) => t.name) ?? [];
    const publishedAt = props['公開日']?.date?.start ?? null;

    // Fetch blocks (content)
    let allBlocks: NotionBlock[] = [];
    let cursor: string | undefined;

    do {
      const url = new URL(`https://api.notion.com/v1/blocks/${id}/children`);
      url.searchParams.set('page_size', '100');
      if (cursor) url.searchParams.set('start_cursor', cursor);

      const blocksRes = await fetch(url.toString(), {
        headers: {
          'Authorization': `Bearer ${notionKey}`,
          'Notion-Version': '2022-06-28',
        },
      });

      if (!blocksRes.ok) break;

      const data = await blocksRes.json();
      allBlocks = allBlocks.concat(data.results);
      cursor = data.has_more ? data.next_cursor : undefined;
    } while (cursor);

    const blocks = allBlocks.map(parseBlock).filter((b): b is ArticleBlock => b !== null);

    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');
    return res.status(200).json({
      title,
      category,
      topics,
      publishedAt,
      blocks,
    });
  } catch (error) {
    console.error('Article detail error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
