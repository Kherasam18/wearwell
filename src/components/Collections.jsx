import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import { useNavigate } from 'react-router-dom'

const items = [
  { title: 'Jodhpuri Suits', desc: 'Structured, regal silhouettes with modern finishing.', imageSrc: '/images/jodhpuri.png' },
  { title: 'Tuxedos', desc: 'Black-tie essentials tailored with precision.', imageSrc: '/images/tuxedo.png' },
  { title: 'Sherwanis', desc: 'Wedding heritage wear crafted with refined detail.', imageSrc: 'https://manyavar.scene7.com/is/image/manyavar/SHOS454_376-Natural_101.8769_26-02-2026-15-56:650x900?&dpr=on,2' },
  { title: 'Indo-Western', desc: 'Contemporary fusion with a bespoke fit.', imageSrc: '/images/indowestern.png' },
  { title: 'Formal Blazers', desc: 'Sharp layers for boardroom to soirée.', imageSrc: '/images/blazer.png' },
  { title: 'Pathani Suits', desc: 'Classic comfort elevated through craft.', imageSrc: '/images/pathani.png' },
]

function toActiveType(title) {
  switch (title) {
    case 'Jodhpuri Suits':
      return 'Jodhpuri'
    case 'Tuxedos':
      return 'Tuxedo'
    case 'Sherwanis':
      return 'Sherwani'
    case 'Indo-Western':
      return 'Indo western'
    case 'Formal Blazers':
      return '2 pc Formal Suits'
    case 'Pathani Suits':
      return 'Ethnic'
    default:
      return 'All'
  }
}

export default function Collections() {
  const navigate = useNavigate()

  return (
    <section id="collections" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading id="collections-heading" title="Collections" />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, idx) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: idx * 0.03 }}
            onClick={() =>
              navigate('/collections', {
                state: { activeType: toActiveType(item.title), activeOccasion: 'All' },
              })
            }
            role="link"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                navigate('/collections', {
                  state: { activeType: toActiveType(item.title), activeOccasion: 'All' },
                })
              }
            }}
            className="group relative cursor-pointer overflow-hidden rounded-3xl border border-[var(--color-gold)]/20 bg-[var(--color-cream-2)] p-6 shadow-sm transition hover:border-[var(--color-maroon)]/35 hover:shadow"
          >
            <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_20%_15%,rgba(201,168,76,0.14),transparent_55%)] opacity-0 transition group-hover:opacity-100" />

            <div className="relative">
              <div className="mb-5 overflow-hidden rounded-2xl border border-[var(--color-gold)]/20 bg-[var(--color-cream)]">
                <div className="aspect-[16/10]">
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-semibold text-[var(--color-espresso)]">{item.title}</h3>
                <ArrowUpRight className="h-5 w-5 text-[var(--color-gold)] transition group-hover:text-[var(--color-maroon)]" aria-hidden="true" />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-espresso)]/75">{item.desc}</p>

              <div className="mt-5 h-px w-full bg-[var(--color-gold)]/20" />

              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-espresso)]/60">Bespoke / Made-to-Measure</span>
                <span className="text-sm font-semibold text-[var(--color-maroon)] opacity-0 transition group-hover:opacity-100">
                  View
                </span>
              </div>
            </div>

            <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[var(--color-maroon)]/10 transition-transform duration-500 group-hover:scale-110" />
          </motion.article>
        ))}
      </div>
    </section>
  )
}
