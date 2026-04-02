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
    isInternal: boolean;
  }>;
  imageUrl?: string;
  caption?: string;
}

function convertNotionLink(href: string | null): { href: string | null; isInternal: boolean } {
  if (!href) return { href: null, isInternal: false };

  // Match Notion page URLs: https://www.notion.so/xxx or https://notion.so/xxx
  const notionMatch = href.match(/^https?:\/\/(?:www\.)?notion\.so\/(?:[^/]+\/)?([a-f0-9]{32})(?:[?#].*)?$/);
  if (notionMatch) {
    const pageId = notionMatch[1];
    // Format as UUID
    const uuid = `${pageId.slice(0, 8)}-${pageId.slice(8, 12)}-${pageId.slice(12, 16)}-${pageId.slice(16, 20)}-${pageId.slice(20)}`;
    return { href: `/tech/articles/${uuid}`, isInternal: true };
  }

  // Also match Notion URLs with dashes already in the ID
  const notionDashMatch = href.match(/^https?:\/\/(?:www\.)?notion\.so\/(?:[^/]+\/)?([a-f0-9-]{36})(?:[?#].*)?$/);
  if (notionDashMatch) {
    return { href: `/tech/articles/${notionDashMatch[1]}`, isInternal: true };
  }

  // Match /<page-id> style Notion links (relative)
  const relativeMatch = href.match(/^\/([a-f0-9]{32})$/);
  if (relativeMatch) {
    const pageId = relativeMatch[1];
    const uuid = `${pageId.slice(0, 8)}-${pageId.slice(8, 12)}-${pageId.slice(12, 16)}-${pageId.slice(16, 20)}-${pageId.slice(20)}`;
    return { href: `/tech/articles/${uuid}`, isInternal: true };
  }

  // 外部URLはhttp/httpsのみ許可（javascript:, data: 等を排除）
  if (!/^https?:\/\//.test(href)) {
    return { href: null, isInternal: false };
  }

  return { href, isInternal: false };
}

function extractRichText(richTexts: NotionRichText[]) {
  return richTexts.map(rt => {
    const { href, isInternal } = convertNotionLink(rt.href);
    return {
      text: rt.plain_text,
      bold: rt.annotations.bold,
      italic: rt.annotations.italic,
      code: rt.annotations.code,
      strikethrough: rt.annotations.strikethrough,
      underline: rt.annotations.underline,
      href,
      isInternal,
    };
  });
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
    case 'image': {
      const imgData = data as Record<string, unknown>;
      let imageUrl = '';
      const imgType = imgData.type as string;
      if (imgType === 'external') {
        imageUrl = (imgData.external as { url: string })?.url ?? '';
      } else if (imgType === 'file') {
        imageUrl = (imgData.file as { url: string })?.url ?? '';
      }
      const captionTexts = (imgData.caption as NotionRichText[]) || [];
      return {
        id: block.id,
        type: 'image',
        text: '',
        imageUrl,
        caption: plainText(captionTexts),
      };
    }
    case 'video': {
      const vidData = data as Record<string, unknown>;
      let videoUrl = '';
      const vidType = vidData.type as string;
      if (vidType === 'external') {
        videoUrl = (vidData.external as { url: string })?.url ?? '';
      }
      // YouTube/Vimeo のみ許可（iframe埋め込みのセキュリティ対策）
      const ALLOWED_VIDEO_DOMAINS = /^https:\/\/(www\.)?(youtube\.com|youtu\.be|vimeo\.com)\//;
      if (videoUrl && ALLOWED_VIDEO_DOMAINS.test(videoUrl)) {
        return { id: block.id, type: 'video', text: videoUrl };
      }
      return null;
    }
    default:
      if (richTexts.length > 0) {
        return { id: block.id, type: 'paragraph', text: plainText(richTexts), richText: extractRichText(richTexts) };
      }
      return null;
  }
}

const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const MAX_BLOCK_PAGES = 10; // 最大1000ブロック

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const notionKey = process.env.NOTION_API_KEY;
  const { id } = req.query;

  if (!notionKey || !id || typeof id !== 'string') {
    return res.status(400).json({ error: 'Invalid request' });
  }

  // C-1: UUIDフォーマット検証（パストラバーサル防止）
  if (!UUID_REGEX.test(id)) {
    return res.status(400).json({ error: 'Invalid article ID format' });
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

    // C-2: 未公開記事へのアクセスを拒否
    const status = props['ステータス']?.select?.name;
    if (status !== '配信済み') {
      return res.status(404).json({ error: 'Article not found' });
    }

    const titleProp = props['タイトル'];
    const title = titleProp?.title?.map((t: NotionRichText) => t.plain_text).join('') ?? '';
    const category = props['種別']?.select?.name ?? '';
    const topics = props['トピック']?.multi_select?.map((t: { name: string }) => t.name) ?? [];
    const publishedAt = props['公開日']?.date?.start ?? null;

    // Fetch blocks (content)
    let allBlocks: NotionBlock[] = [];
    let cursor: string | undefined;
    let pageCount = 0;

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

      if (!blocksRes.ok) {
        console.error('Block fetch failed:', blocksRes.status);
        break;
      }

      const data = await blocksRes.json();
      allBlocks = allBlocks.concat(data.results);
      cursor = data.has_more ? data.next_cursor : undefined;
      pageCount++;
    } while (cursor && pageCount < MAX_BLOCK_PAGES);

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
