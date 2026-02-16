import { useEffect, useState } from 'react'

export function LogoBackground() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div 
      className={`logo-background ${isScrolled ? 'scrolled' : ''}`}
    />
  )
}
