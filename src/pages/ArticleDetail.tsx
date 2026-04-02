import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { TOPIC_LABELS } from '@/constants/topics';
import { formatDate } from '@/utils/formatDate';

interface RichTextSegment {
    text: string;
    bold: boolean;
    italic: boolean;
    code: boolean;
    strikethrough: boolean;
    underline: boolean;
    href: string | null;
    isInternal?: boolean;
}

interface ArticleBlock {
    id: string;
    type: string;
    text: string;
    richText?: RichTextSegment[];
    imageUrl?: string;
    caption?: string;
}

interface ArticleData {
    title: string;
    category: string;
    topics: string[];
    publishedAt: string | null;
    blocks: ArticleBlock[];
}

function RichText({ segments }: { segments?: RichTextSegment[] }) {
    if (!segments || segments.length === 0) return null;

    return (
        <>
            {segments.map((seg, i) => {
                let el: React.ReactNode = seg.text;

                if (seg.code) {
                    el = <code className="px-1.5 py-0.5 bg-secondary rounded text-sm font-mono">{el}</code>;
                }
                if (seg.bold) {
                    el = <strong className="font-semibold text-foreground">{el}</strong>;
                }
                if (seg.italic) {
                    el = <em>{el}</em>;
                }
                if (seg.strikethrough) {
                    el = <s>{el}</s>;
                }
                if (seg.underline) {
                    el = <u>{el}</u>;
                }
                if (seg.href) {
                    if (seg.isInternal) {
                        el = (
                            <Link
                                to={seg.href}
                                className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
                            >
                                {el}
                            </Link>
                        );
                    } else {
                        el = (
                            <a
                                href={seg.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
                            >
                                {el}
                            </a>
                        );
                    }
                }

                return <React.Fragment key={i}>{el}</React.Fragment>;
            })}
        </>
    );
}

function SingleBlock({ block }: { block: ArticleBlock }) {
    switch (block.type) {
        case 'h1':
            return (
                <h2 className="text-2xl md:text-3xl font-medium mt-12 mb-4 text-foreground">
                    <RichText segments={block.richText} />
                </h2>
            );
        case 'h2':
            return (
                <h3 className="text-xl md:text-2xl font-medium mt-10 mb-3 text-foreground">
                    <RichText segments={block.richText} />
                </h3>
            );
        case 'h3':
            return (
                <h4 className="text-lg font-medium mt-8 mb-2 text-foreground">
                    <RichText segments={block.richText} />
                </h4>
            );
        case 'paragraph':
            if (!block.text) return <div className="h-4" />;
            return (
                <p className="text-base text-foreground/80 leading-[1.9] mb-4">
                    <RichText segments={block.richText} />
                </p>
            );
        case 'quote':
            return (
                <blockquote className="border-l-4 border-primary/30 pl-6 py-2 my-6 text-foreground/70 italic">
                    <RichText segments={block.richText} />
                </blockquote>
            );
        case 'callout':
            return (
                <div className="bg-secondary border border-border rounded-lg p-5 my-6 text-sm text-foreground/80 leading-relaxed">
                    <RichText segments={block.richText} />
                </div>
            );
        case 'divider':
            return <hr className="border-border my-8" />;
        case 'code':
            return (
                <pre className="bg-foreground text-background rounded-lg p-5 my-6 overflow-x-auto text-sm font-mono leading-relaxed">
                    {block.text}
                </pre>
            );
        case 'image':
            if (!block.imageUrl) return null;
            return (
                <figure className="my-8">
                    <img
                        src={block.imageUrl}
                        alt={block.caption || '記事画像'}
                        className="w-full rounded-lg border border-border"
                        loading="lazy"
                    />
                    {block.caption && (
                        <figcaption className="text-xs text-muted-foreground text-center mt-3">
                            {block.caption}
                        </figcaption>
                    )}
                </figure>
            );
        case 'video':
            if (!block.text) return null;
            return (
                <div className="my-8 aspect-video rounded-lg overflow-hidden border border-border">
                    <iframe
                        src={block.text.replace('watch?v=', 'embed/')}
                        className="w-full h-full"
                        allowFullScreen
                        loading="lazy"
                        title="埋め込み動画"
                    />
                </div>
            );
        default:
            return null;
    }
}

// H-6: 連続するリスト要素を <ul>/<ol> でラップ
function BlockList({ blocks }: { blocks: ArticleBlock[] }) {
    const elements: React.ReactNode[] = [];
    let i = 0;

    while (i < blocks.length) {
        const block = blocks[i];

        if (block.type === 'bullet') {
            const items: ArticleBlock[] = [];
            while (i < blocks.length && blocks[i].type === 'bullet') {
                items.push(blocks[i]);
                i++;
            }
            elements.push(
                <ul key={items[0].id} className="my-4 space-y-1">
                    {items.map(item => (
                        <li key={item.id} className="text-base text-foreground/80 leading-[1.9] ml-6 list-disc">
                            <RichText segments={item.richText} />
                        </li>
                    ))}
                </ul>
            );
        } else if (block.type === 'numbered') {
            const items: ArticleBlock[] = [];
            while (i < blocks.length && blocks[i].type === 'numbered') {
                items.push(blocks[i]);
                i++;
            }
            elements.push(
                <ol key={items[0].id} className="my-4 space-y-1">
                    {items.map(item => (
                        <li key={item.id} className="text-base text-foreground/80 leading-[1.9] ml-6 list-decimal">
                            <RichText segments={item.richText} />
                        </li>
                    ))}
                </ol>
            );
        } else {
            elements.push(<SingleBlock key={block.id} block={block} />);
            i++;
        }
    }

    return <>{elements}</>;
}

export const ArticleDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [article, setArticle] = useState<ArticleData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useDocumentTitle(article?.title ?? '記事読み込み中...');

    useEffect(() => {
        if (!id) return;

        let cancelled = false;
        setLoading(true);
        setError(null);

        fetch(`/api/articles/${id}`)
            .then(res => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.json();
            })
            .then(data => {
                if (!cancelled) setArticle(data);
            })
            .catch(err => {
                console.error('Article fetch error:', err);
                if (!cancelled) setError('記事の取得に失敗しました');
            })
            .finally(() => {
                if (!cancelled) setLoading(false);
            });

        return () => { cancelled = true; };
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
                <span className="ml-3 text-sm text-muted-foreground">記事を読み込み中...</span>
            </div>
        );
    }

    if (error || !article) {
        return (
            <div className="min-h-screen bg-background pt-32">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-muted-foreground mb-6">{error ?? '記事が見つかりませんでした'}</p>
                    <Link to="/tech?tab=docs" className="text-primary text-sm hover:underline">
                        ← 記事一覧に戻る
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            <section className="pt-32 pb-12">
                <div className="container mx-auto px-6 max-w-3xl">
                    <Link
                        to="/tech?tab=docs"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        記事一覧に戻る
                    </Link>

                    <div className="flex items-center gap-3 mb-6 flex-wrap">
                        {article.category && (
                            <span className="px-3 py-1 bg-primary text-primary-foreground text-xs tracking-wider rounded">
                                {article.category}
                            </span>
                        )}
                        {article.publishedAt && (
                            <span className="text-xs text-muted-foreground">
                                {formatDate(article.publishedAt)}
                            </span>
                        )}
                    </div>

                    <h1 className="text-3xl md:text-4xl font-medium leading-tight mb-6">
                        {article.title}
                    </h1>

                    {article.topics.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {article.topics.map(topic => (
                                <span key={topic} className="px-2.5 py-1 bg-secondary text-muted-foreground text-xs rounded">
                                    {TOPIC_LABELS[topic] ?? topic}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <section className="pb-32">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="border-t border-border pt-10">
                        <BlockList blocks={article.blocks} />
                    </div>

                    <div className="mt-16 pt-8 border-t border-border">
                        <Link
                            to="/tech?tab=docs"
                            className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            記事一覧に戻る
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
