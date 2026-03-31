import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

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
}

interface ArticleData {
    title: string;
    category: string;
    topics: string[];
    publishedAt: string | null;
    blocks: ArticleBlock[];
}

const TOPIC_LABELS: Record<string, string> = {
    'supply-chain': 'サプライチェーン',
    'ai-news': 'AIニュース',
    'it-basics': 'IT基礎',
    'cybersecurity': 'サイバーセキュリティ',
    'erp': 'ERP',
    'iot': 'IoT',
    'rpa': 'RPA',
    'ai-regulation': 'AI規制',
    'digital-twin': 'デジタルツイン',
    'quality-control': '品質管理',
    'skill-transfer': '技能伝承',
    'cross-industry': '異業種',
    'generative-ai': '生成AI',
};

function RichText({ segments }: { segments?: RichTextSegment[] }) {
    if (!segments || segments.length === 0) return null;

    return (
        <>
            {segments.map((seg, i) => {
                let el: React.ReactNode = seg.text;

                if (seg.code) {
                    el = <code key={i} className="px-1.5 py-0.5 bg-secondary rounded text-sm font-mono">{el}</code>;
                }
                if (seg.bold) {
                    el = <strong key={`b-${i}`} className="font-semibold text-foreground">{el}</strong>;
                }
                if (seg.italic) {
                    el = <em key={`i-${i}`}>{el}</em>;
                }
                if (seg.strikethrough) {
                    el = <s key={`s-${i}`}>{el}</s>;
                }
                if (seg.underline) {
                    el = <u key={`u-${i}`}>{el}</u>;
                }
                if (seg.href) {
                    if (seg.isInternal) {
                        el = (
                            <Link
                                key={`a-${i}`}
                                to={seg.href}
                                className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
                            >
                                {el}
                            </Link>
                        );
                    } else {
                        el = (
                            <a
                                key={`a-${i}`}
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

function BlockRenderer({ block }: { block: ArticleBlock }) {
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
        case 'bullet':
            return (
                <li className="text-base text-foreground/80 leading-[1.9] ml-6 list-disc">
                    <RichText segments={block.richText} />
                </li>
            );
        case 'numbered':
            return (
                <li className="text-base text-foreground/80 leading-[1.9] ml-6 list-decimal">
                    <RichText segments={block.richText} />
                </li>
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
        default:
            return null;
    }
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
            {/* Header */}
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
                                {article.publishedAt}
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

            {/* Content */}
            <section className="pb-32">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="border-t border-border pt-10">
                        {article.blocks.map(block => (
                            <BlockRenderer key={block.id} block={block} />
                        ))}
                    </div>

                    {/* Footer */}
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
