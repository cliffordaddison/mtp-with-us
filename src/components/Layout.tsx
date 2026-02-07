import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { useActiveSection } from '../hooks/useActiveSection'

interface LayoutProps {
  readonly children: React.ReactNode
}

const navLinkClass = (isActive: boolean) =>
  `text-sm font-semibold transition-colors shrink-0 relative pb-0.5 ${
    isActive
      ? 'text-[var(--accent)] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[var(--accent)] after:rounded-full'
      : 'text-slate-600 hover:text-[var(--accent)]'
  }`

const mobileNavLinkClass = (isActive: boolean) =>
  `block py-3 px-4 font-semibold transition-colors border-b border-slate-100 last:border-0 ${
    isActive ? 'text-[var(--accent)] bg-[var(--accent)]/5' : 'text-slate-600 hover:text-[var(--accent)] hover:bg-slate-50'
  }`

export function Layout({ children }: LayoutProps) {
  const activeSection = useActiveSection()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 min-h-16 py-2 sm:py-0 flex items-center justify-between gap-3">
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group shrink-0 min-w-0" onClick={closeMobileMenu}>
            <Logo className="size-8 sm:size-9 transition-transform group-hover:scale-105 shrink-0" />
            <div className="flex flex-col min-w-0">
              <span className="font-display text-base sm:text-xl tracking-tight text-slate-900 leading-tight">MTPWITHUS</span>
              <span className="font-display text-[10px] sm:text-xs tracking-wide text-[var(--accent)] uppercase leading-tight">Maximize the Potential (MTP)</span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8 shrink-0">
            <Link to="/#who-we-are" className={navLinkClass(activeSection === 'who-we-are')}>About</Link>
            <Link to="/#services" className={navLinkClass(activeSection === 'services')}>Services</Link>
            <Link to="/#team" className={navLinkClass(activeSection === 'team')}>Squad</Link>
            <Link to="/#careers" className={navLinkClass(activeSection === 'careers')}>Careers</Link>
            <Link to="/events" className={navLinkClass(activeSection === 'events')}>Events</Link>
            <Link to="/#contact" className={navLinkClass(activeSection === 'contact')}>Contact</Link>
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
            <Link
              to="/register"
              className={`flex items-center justify-center rounded-lg h-9 sm:h-10 px-3 sm:px-5 text-xs sm:text-sm font-bold transition-all shrink-0 ${
                activeSection === 'register'
                  ? 'bg-[var(--accent)] text-white ring-2 ring-[var(--accent)] ring-offset-2'
                  : 'bg-[var(--primary)] text-white hover:bg-slate-800'
              }`}
            >
              Get Started
            </Link>
          </div>
        </div>
        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-slate-200 bg-white shadow-lg">
            <Link to="/#who-we-are" className={mobileNavLinkClass(activeSection === 'who-we-are')} onClick={closeMobileMenu}>About</Link>
            <Link to="/#services" className={mobileNavLinkClass(activeSection === 'services')} onClick={closeMobileMenu}>Services</Link>
            <Link to="/#team" className={mobileNavLinkClass(activeSection === 'team')} onClick={closeMobileMenu}>Squad</Link>
            <Link to="/#careers" className={mobileNavLinkClass(activeSection === 'careers')} onClick={closeMobileMenu}>Careers</Link>
            <Link to="/events" className={mobileNavLinkClass(activeSection === 'events')} onClick={closeMobileMenu}>Events</Link>
            <Link to="/#contact" className={mobileNavLinkClass(activeSection === 'contact')} onClick={closeMobileMenu}>Contact</Link>
          </nav>
        )}
      </header>
      {children}
    </div>
  )
}

function FooterContent() {
  return (
    <footer id="contact" className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
          <div className="space-y-5">
            <Link to="/" className="flex items-center gap-2">
              <Logo className="size-10 brightness-0 invert" />
              <div className="flex flex-col">
                <span className="font-display text-xl tracking-tight leading-tight">MTPWITHUS</span>
                <span className="font-display text-xs tracking-wide text-slate-400 uppercase">Maximize the Potential</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              MTP Talent Group is a culture connecting talent boutique delivering positive provoking content, curated events, and brand exclusive moments.
            </p>
            <div className="space-y-1 text-sm">
              <p className="font-semibold text-white">Owner, Maximize the Potential</p>
              <a href="mailto:mtpwithus@gmail.com" className="block text-slate-400 hover:text-white transition-colors">mtpwithus@gmail.com</a>
              <a href="tel:+16472619687" className="block text-slate-400 hover:text-white transition-colors">1(647)261-9687</a>
            </div>
            <div className="flex gap-3">
              <a href="https://instagram.com/mtpwithus" target="_blank" rel="noopener noreferrer" className="size-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--accent)] transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/></svg>
              </a>
              <a href="https://twitter.com/mtpwithus" target="_blank" rel="noopener noreferrer" className="size-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--accent)] transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
            <p className="text-xs text-slate-500">Instagram @mtpwithus · Twitter @mtpwithus</p>
          </div>
          <div>
            <h5 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Quick Links</h5>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link to="/#services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/events" className="hover:text-white transition-colors">Events</Link></li>
              <li><Link to="/register" className="hover:text-white transition-colors">Register</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Contact</h5>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="mailto:mtpwithus@gmail.com" className="hover:text-white transition-colors">mtpwithus@gmail.com</a></li>
              <li><a href="tel:+16472619687" className="hover:text-white transition-colors">1(647)261-9687</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Newsletter</h5>
            <p className="text-sm text-slate-400 mb-4">Latest insights and athlete updates.</p>
            <form className="flex flex-col gap-2">
              <input type="email" placeholder="Your email" className="bg-white/5 border border-white/10 rounded-lg h-10 px-3 text-sm text-white placeholder:text-slate-500 focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none" />
              <button type="submit" className="bg-[var(--accent)] hover:bg-[var(--accent-hover)] rounded-lg h-10 text-sm font-bold uppercase tracking-wider transition-colors">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
          <p>© 2026 Maximize the Potential. All rights reserved.</p>
          <p className="font-display text-slate-400">OUTWORK YOUR GREATEST COMPETITION...YOU!</p>
        </div>
      </div>
    </footer>
  )
}

export { FooterContent }
