import { motion } from 'framer-motion'
import { Instagram, Star } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'

export default function Reviews() {
  return (
    <section id="reviews" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading id="reviews-heading" title="Social Proof & Global Reach" motifColor="text-[var(--color-gold)]" />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="rounded-3xl border border-[var(--color-gold)]/20 bg-[var(--color-cream-2)] p-7 shadow-sm"
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-espresso)]/60">Customer Rating</p>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-3xl font-semibold text-[var(--color-espresso)]">4.1/5</span>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < 4 ? 'text-[var(--color-gold)]' : 'text-[var(--color-gold)]/30'}`}
                      fill={i < 4 ? 'currentColor' : 'none'}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
              <p className="mt-2 text-sm text-[var(--color-espresso)]/75">Over 1,900 happy customers.</p>
            </div>

            <div className="hidden rounded-3xl border border-[var(--color-gold)]/25 bg-[var(--color-cream)] px-5 py-4 text-center sm:block">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-espresso)]/60">Perfect-Fit</p>
              <p className="mt-1 font-[var(--font-serif)] text-lg font-semibold text-[var(--color-maroon)]">Guaranteed</p>
            </div>
          </div>

          <div className="mt-6 h-px w-full bg-[var(--color-gold)]/20" />

          <p className="mt-6 text-sm leading-relaxed text-[var(--color-espresso)]/75">
            Our garments travel across India and beyond—trusted by clients who return for the consistency of fit,
            finishing, and the confidence that comes from true bespoke.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="rounded-3xl border border-[var(--color-gold)]/20 bg-[var(--color-cream)] p-7 shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className="rounded-2xl border border-[var(--color-gold)]/25 bg-[var(--color-cream-2)] p-3">
              <Instagram className="h-5 w-5 text-[var(--color-maroon)]" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-espresso)]/60">Instagram</p>
              <p className="mt-1 font-semibold text-[var(--color-espresso)]">@wearwellabohar</p>
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-dashed border-[var(--color-gold)]/35 bg-[var(--color-cream-2)] p-8 text-center">
            <p className="font-[var(--font-serif)] text-xl font-semibold text-[var(--color-espresso)]">Instagram Feed Placeholder</p>
            <p className="mt-2 text-sm text-[var(--color-espresso)]/75">Join 41K+ Followers</p>
          </div>

          <p className="mt-6 text-sm leading-relaxed text-[var(--color-espresso)]/75">
            Follow our latest work: new silhouettes, wedding looks, fabric drops, and behind-the-scenes tailoring.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
