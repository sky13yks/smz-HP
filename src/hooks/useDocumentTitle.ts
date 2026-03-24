import { useEffect } from 'react'

const SITE_NAME = '株式会社清水商會'

export function useDocumentTitle(title: string) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE_NAME}` : SITE_NAME
  }, [title])
}
