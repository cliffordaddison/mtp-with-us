import { useEffect, useState } from 'react'
import { Logo } from './Logo'

export function LogoSplash() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    // Hide splash after smooth animation completes
    const timer = setTimeout(() => {
      setShow(false)
    }, 2000) // 2 seconds for smooth zoom and fade

    return () => clearTimeout(timer)
  }, [])

  if (!show) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-[var(--base-bg)] flex items-center justify-center">
      <Logo className="w-64 h-64 logo-zoom-animation" />
    </div>
  )
}
