import { motion } from 'framer-motion'
import { Fingerprint, Gem, Wrench } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'

const points = [
  {
    icon: Fingerprint,
    title: 'Zero Templates',
    body: 'Every suit is an impeccable, hand-crafted piece—built from measurements, posture, and preference.',
  },
  {
    icon: Gem,
    title: 'Generational Skill',
    body: 'Knowledge accumulated over hundreds of years, not just a few years of training.',
  },
  {
    icon: Wrench,
    title: 'World-Class Workshop',
    body: 'State-of-the-art equipment meeting traditional handcrafting for durability and detail.',
  },
]

export default function BespokeProcess() {
  return (
    <section id="bespoke-process" className="bg-[var(--color-cream-2)]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading id="bespoke-heading" title="The Bespoke Craftsmanship Process" motifColor="text-[var(--color-maroon)]" />

        <div className="mt-5 mx-auto max-w-3xl text-center">
          <p className="text-base leading-relaxed text-[var(--color-espresso)]/75 sm:text-lg">
            Bespoke is not a product—it is a philosophy. From cloth selection to the final press, our process honors heritage
            while meeting modern standards of comfort and precision.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {points.map((p, idx) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: idx * 0.05 }}
                className="rounded-3xl border border-[var(--color-gold)]/20 bg-[var(--color-cream)] p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl border border-[var(--color-gold)]/25 bg-[var(--color-cream-2)] p-3">
                    <Icon className="h-5 w-5 text-[var(--color-maroon)]" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--color-espresso)]">{p.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[var(--color-espresso)]/75">{p.body}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
