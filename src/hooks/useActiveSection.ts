import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const SECTION_IDS = ['who-we-are', 'services', 'team', 'careers', 'contact'] as const
type SectionId = (typeof SECTION_IDS)[number]

export type ActiveItem = SectionId | 'events' | 'register' | null

const HEADER_OFFSET = 120

export function useActiveSection(): ActiveItem {
  const { pathname, hash } = useLocation()
  const [activeSection, setActiveSection] = useState<ActiveItem>(null)

  useEffect(() => {
    if (pathname === '/events') {
      setActiveSection('events')
      return
    }
    if (pathname === '/register') {
      setActiveSection('register')
      return
    }

    if (pathname !== '/') {
      setActiveSection(null)
      return
    }

    const updateActiveSection = () => {
      const elements = SECTION_IDS.map((id) => ({
        id,
        el: document.getElementById(id),
      })).filter((item): item is { id: SectionId; el: HTMLElement } => !!item.el)

      if (elements.length === 0) return

      const scrollY = window.scrollY
      const triggerPoint = scrollY + HEADER_OFFSET

      if (scrollY < 100) {
        setActiveSection(elements[0].id)
        return
      }

      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (scrollY >= docHeight - 150) {
        setActiveSection('contact')
        return
      }

      let current: SectionId | null = null

      for (const { id, el } of elements) {
        const rect = el.getBoundingClientRect()
        const offsetTop = rect.top + scrollY
        if (offsetTop <= triggerPoint) {
          current = id
        }
      }

      setActiveSection(current ?? elements[0].id)
    }

    if (hash) {
      const id = hash.replace('#', '') as SectionId
      if (SECTION_IDS.includes(id)) {
        setActiveSection(id)
      }
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    return () => window.removeEventListener('scroll', updateActiveSection)
  }, [pathname, hash])

  return activeSection
}
