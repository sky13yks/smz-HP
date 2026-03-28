import type { VercelRequest, VercelResponse } from '@vercel/node';

interface NotionProperty {
  type: string;
  title?: Array<{ plain_text: string }>;
  select?: { name: string } | null;
  multi_select?: Array<{ name: string }>;
  date?: { start: string | null } | null;
  rich_text?: Array<{ plain_text: string }>;
  number?: number | null;
}

interface NotionPage {
  id: string;
  properties: Record<string, NotionProperty>;
}

interface NotionQueryResponse {
  results: NotionPage[];
  has_more: boolean;
  next_cursor: string | null;
}

interface Article {
  id: string;
  title: string;
  category: string;
  topics: string[];
  publishedAt: string | null;
  articleNumber: string;
}

function extractText(prop: NotionProperty | undefined): string {
  if (!prop) return '';
  if (prop.type === 'title' && prop.title) {
    return prop.title.map(t => t.plain_text).join('');
  }
  if (prop.type === 'rich_text' && prop.rich_text) {
    return prop.rich_text.map(t => t.plain_text).join('');
  }
  return '';
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const notionKey = process.env.NOTION_API_KEY;
  const databaseId = process.env.NOTION_ARTICLES_DB_ID;

  if (!notionKey || !databaseId) {
    return res.status(500).json({ error: 'Missing Notion configuration' });
  }

  try {
    const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${notionKey}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        filter: {
          property: 'ステータス',
          select: { equals: '配信済み' },
        },
        sorts: [
          { property: '公開日', direction: 'descending' },
        ],
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error('Notion API error:', response.status, errorBody);
      return res.status(502).json({ error: 'Failed to fetch from Notion' });
    }

    const data: NotionQueryResponse = await response.json();

    const articles: Article[] = data.results.map((page) => {
      const props = page.properties;
      return {
        id: page.id,
        title: extractText(props['タイトル']),
        category: props['種別']?.select?.name ?? '',
        topics: props['トピック']?.multi_select?.map(t => t.name) ?? [],
        publishedAt: props['公開日']?.date?.start ?? null,
        articleNumber: extractText(props['記事番号']),
      };
    });

    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');
    return res.status(200).json({ articles });
  } catch (error) {
    console.error('API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
