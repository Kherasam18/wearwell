import { useState } from 'react'
import { motion } from 'framer-motion'
import { CalendarDays, MessageCircle, Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const WHATSAPP_URL = 'https://wa.me/916284194620'

const links = [
  // { label: 'Heritage', href: '/#heritage' },
  { label: 'Collections', to: '/collections', state: { activeOccasion: 'All', activeType: 'All' } },
  // { label: 'The Bespoke Process', href: '/#bespoke-process' },
  { label: 'Real Experience', to: '/real-experience' },
]

export default function Navbar({ onBookClick }) {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-gold)]/20 bg-[var(--color-cream)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link
          to="/"
          className="flex cursor-pointer items-center"
          onClick={() => {
            if (location.pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
          }}
        >
          <img src="/images/logo.png" alt="New Wear Well" className="h-9 w-auto sm:h-10" />
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-[var(--color-black)] md:flex">
          {links.map((l) => (
            l.to ? (
              <Link
                key={l.label}
                to={l.to}
                state={l.state}
                className="transition-colors hover:text-[var(--color-black)]"
              >
                {l.label}
              </Link>
            ) : (
              <a key={l.href} href={l.href} className="transition-colors hover:text-[var(--color-black)]">
                {l.label}
              </a>
            )
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-cream-2)] px-4 py-2 text-sm font-medium text-[var(--color-espresso)] shadow-sm transition hover:border-[var(--color-maroon)]/40 hover:shadow md:inline-flex"
          >
            <MessageCircle className="h-4 w-4 text-[var(--color-maroon)]" aria-hidden="true" />
            WhatsApp Us
          </a>

          <motion.button
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            onClick={onBookClick}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-maroon)] px-4 py-2 text-sm font-semibold text-[var(--color-cream)] shadow-sm transition hover:brightness-110"
          >
            <CalendarDays className="h-4 w-4" aria-hidden="true" />
            Book Appointment
          </motion.button>

          <button
            type="button"
            className="block p-2 text-[var(--color-espresso)] md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute left-0 top-full z-50 flex w-full flex-col items-center gap-6 bg-[#FAF8F4] py-6 shadow-md md:hidden">
          {links.map((l) =>
            l.to ? (
              <Link
                key={l.label}
                to={l.to}
                state={l.state}
                className="text-base font-medium text-[var(--color-espresso)] transition-colors hover:text-[var(--color-maroon)]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="text-base font-medium text-[var(--color-espresso)] transition-colors hover:text-[var(--color-maroon)]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {l.label}
              </a>
            )
          )}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-cream-2)] px-6 py-3 text-sm font-medium text-[var(--color-espresso)] shadow-sm transition hover:border-[var(--color-maroon)]/40 hover:shadow"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <MessageCircle className="h-4 w-4 text-[var(--color-maroon)]" aria-hidden="true" />
            WhatsApp Us
          </a>
        </div>
      )}
    </header>
  )
}
