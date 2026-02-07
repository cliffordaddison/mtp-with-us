import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const HEADER_OFFSET = 80

export function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const scrollToEl = () => {
        const el = document.getElementById(id)
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
          window.scrollTo({ top, behavior: 'smooth' })
        }
      }
      requestAnimationFrame(() => {
        scrollToEl()
        setTimeout(scrollToEl, 100)
      })
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }, [pathname, hash])

  return null
}
