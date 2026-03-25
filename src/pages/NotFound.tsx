import { Link } from 'react-router-dom'
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export function NotFound() {
  useDocumentTitle('ページが見つかりません');
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <p className="text-[120px] md:text-[180px] font-light leading-none text-foreground/5 select-none">
          404
        </p>
        <h1 className="text-3xl md:text-4xl font-serif font-light mb-4 -mt-8 text-foreground">
          ページが見つかりません
        </h1>
        <p className="text-muted-foreground mb-10 leading-relaxed">
          お探しのページは存在しないか、移動した可能性があります。
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-md font-medium text-sm tracking-wider hover:bg-primary/90 transition-colors"
        >
          ホームに戻る
        </Link>
      </div>
    </div>
  )
}
