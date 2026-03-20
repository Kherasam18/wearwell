import { motion } from 'framer-motion'
import { ArrowRight, Globe, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

const WHATSAPP_URL = 'https://wa.me/916284194620'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="h-full w-full bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(201,168,76,0.22),transparent_55%),radial-gradient(900px_circle_at_80%_30%,rgba(122,23,23,0.16),transparent_60%),linear-gradient(135deg,rgba(58,43,36,0.10),rgba(58,43,36,0.02))]" />
        <div className="absolute inset-0 bg-[url('/images/hero.png')] bg-cover bg-center opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-cream)]/0 [var(--color-cream)]/0 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-cream)]/0 [var(--color-cream)]/0 to-transparent" />
      </div>

      <div className="relative mx-auto grid min-h-[92svh] max-w-6xl items-center px-4 pb-12 pt-0 sm:px-6 md:pb-16">
        <div className="mt-75 md:mt-0 max-w-3xl flex flex-col gap-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-fit inline-flex items-center gap-2 rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-cream)]/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-espresso)]/80"
          >
            <ShieldCheck className="h-4 w-4 text-[var(--color-gold)]" aria-hidden="true" />
            Perfect-Fit Guarantee
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.05 }}
            className="mt-6 text-4xl font-semibold leading-tight text-[var(--color-cream)]/100 sm:text-5xl"
          >
            Generational Craftsmanship. Impeccable Fit.
          </motion.h1>

          {/* <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.12 }}
            className="mt-5 text-base leading-relaxed text-[var(--color-espresso)]/75 sm:text-lg"
          >
            Bespoke menswear tailored to perfection since 1885. From premium suits to traditional ethnic wear, crafted in Punjab, shipped globally.
          </motion.p> */}

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              to="/collections"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-maroon)] px-6 py-3 text-sm font-semibold text-[var(--color-cream)] shadow-sm transition hover:brightness-110"
            >
              Explore Collections
            </Link>
            {/* <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center justify-center rounded-full border border-[var(--color-maroon)]/30 bg-[var(--color-cream)] px-6 py-3 text-sm font-semibold text-[var(--color-espresso)] shadow-sm transition hover:border-[var(--color-maroon)]/50 hover:shadow"
            >
              WhatsApp +91 6284194620
            </a> */}
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.28 }}
            className="mt-8 hidden w-fit md:inline-flex items-center gap-3 rounded-2xl border border-[var(--color-gold)]/20 bg-[var(--color-cream)]/70 px-4 py-3 text-sm text-[var(--color-espresso)]/80"
          >
            <Globe className="h-4 w-4 text-[var(--color-gold)]" aria-hidden="true" />
            Global Shipping Available
          </motion.div> */}
        </div>

        <div className="hidden relative z-10 mt-8 w-full flex-col gap-4 sm:w-[320px] md:flex md:absolute md:bottom-16 md:right-16 md:mt-0 md:w-[320px] lg:bottom-30 lg:right-16">
          {['Shop as Groom', 'Shop as Attendee'].map((label) => (
            <Link
              key={label}
              to="/collections"
              className="group flex items-center justify-between rounded-full border border-[var(--color-maroon)]/30 bg-[#FDFBF7]/70 px-6 py-2 font-[var(--font-sans)] text-base font-semibold text-black shadow-sm transition hover:bg-[#8E2121] hover:text-white hover:shadow-lg hover:shadow-black/20"
            >
              <span>{label}</span>
              <ArrowRight className="h-5 w-5 text-current transition group-hover:text-white" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
