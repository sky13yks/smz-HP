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
            <h2 className="text-3xl font-medium mb-4 text-foreground">
              エラーが発生しました
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              ページの表示中に問題が発生しました。<br />
              再読み込みするか、ホームに戻ってください。
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={this.handleRetry}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium text-sm tracking-wider transition-colors hover:bg-primary/90"
              >
                再読み込み
              </button>
              <Link
                to="/"
                className="px-6 py-3 border border-border rounded-md font-medium text-sm tracking-wider text-foreground hover:border-foreground/30 transition-colors"
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
