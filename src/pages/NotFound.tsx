import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <p className="text-[120px] md:text-[180px] font-black leading-none text-white/10 select-none">
          404
        </p>
        <h1 className="text-3xl md:text-4xl font-black mb-4 -mt-8 text-white">
          ページが見つかりません
        </h1>
        <p className="text-white/60 mb-10 leading-relaxed">
          お探しのページは存在しないか、移動した可能性があります。
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-4 bg-blue-600 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-blue-500 transition-colors"
        >
          ホームに戻る
        </Link>
      </div>
    </div>
  )
}
