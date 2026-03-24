import { Component, type ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  handleRetry = () => {
    this.setState({ hasError: false })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[60vh] flex items-center justify-center px-6">
          <div className="text-center max-w-md">
            <h2 className="text-3xl font-black mb-4 text-white">
              エラーが発生しました
            </h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              ページの表示中に問題が発生しました。<br />
              再読み込みするか、ホームに戻ってください。
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={this.handleRetry}
                className="px-6 py-3 bg-blue-600 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-blue-500 transition-colors"
              >
                再読み込み
              </button>
              <Link
                to="/"
                className="px-6 py-3 border border-white/20 rounded-full font-bold text-sm tracking-widest uppercase hover:border-white/40 transition-colors"
              >
                ホームに戻る
              </Link>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
