import { motion } from 'framer-motion'
import { CalendarDays, MessageCircle } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const WHATSAPP_URL = 'https://wa.me/916284194620'

const links = [
  // { label: 'Heritage', href: '/#heritage' },
  { label: 'Collections', to: '/collections' },
  // { label: 'The Bespoke Process', href: '/#bespoke-process' },
  { label: 'Real Experience', to: '/#real-experience' },
]

export default function Navbar({ onBookClick }) {
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-gold)]/20 bg-[var(--color-cream)]/95 backdrop-blur">
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
              <Link key={l.label} to={l.to} className="transition-colors hover:text-[var(--color-black)]">
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
        </div>
      </div>
    </header>
  )
}
