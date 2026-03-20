import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'

export default function Heritage() {
  return (
    <section id="heritage" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading id="heritage-heading" title="140 Years of Sartorial Excellence" motifColor="text-[var(--color-maroon)]" />

      <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="text-base leading-relaxed text-[var(--color-espresso)]/75 sm:text-lg">
            New Wear Well carries the legacy of a tailoring lineage that began with the great-great-grandfather of Mr. Jagat Verma.
            From a traditional local shop to a premium bespoke brand with global reach, every garment is built on discipline,
            detail, and a deep respect for craft.
          </p>

          <p className="mt-5 text-base leading-relaxed text-[var(--color-espresso)]/75 sm:text-lg">
            Today, our atelier in Punjab blends time-honored handwork with modern precision—serving clients who value an
            unmistakable silhouette, refined finishing, and a fit that feels personal.
          </p>

          <div className="mt-7 rounded-2xl border border-[var(--color-gold)]/25 bg-[var(--color-cream-2)] p-5 shadow-sm">
            <p className="text-sm font-semibold tracking-wide text-[var(--color-espresso)]">Legacy Highlight</p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-espresso)]/75">
              In 1999, our readymade inauguration was graced by WWE Champion The Great Khali and 1983 World Cup cricketer
              Balwinder Singh Sandhu.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative"
        >
          <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-[var(--color-gold)]/25 bg-[linear-gradient(135deg,rgba(122,23,23,0.08),rgba(201,168,76,0.10))] shadow-sm">
            <img
              src="/images/heritage.png"
              alt="New Wear Well heritage and workshop"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          {/* <div className="absolute -bottom-10 -left-4 lg:-left-4 rounded-3xl border border-[var(--color-gold)]/30 bg-maroon text-cream px-3 py-4 shadow-xl">
              <p className="font-playfair text-1xl font-bold">5</p>
              <p className="text-sm font-semibold uppercase tracking-wider">Generations</p>
            </div>     */}

          {/* <div className="pointer-events-none absolute -bottom-6 -left-6 hidden h-20 w-20 rounded-3xl border border-[var(--color-gold)]/30 bg-[var(--color-cream)] shadow-sm lg:block">
            <p className="font-playfair text-1xl font-bold">5</p>
            <p className="text-sm font-semibold uppercase tracking-wider">Generations</p>
          </div> */}

          <div className="absolute -bottom-1 -left-10 lg:-left-3 w-24 h-24 rounded-full bg-[#8E2121] text-[#FAF8F4] shadow-2xl p-2">
  <div className="w-full h-full rounded-full border border-dashed border-[#FFDF00]/70 flex flex-col items-center justify-center">
    <p className="font-playfair text-2xl font-bold">5</p>
    <p className="text-[9px] font-light uppercase tracking-widest mt-1">Generations</p>
  </div>
</div>
        </motion.div>
      </div>
    </section>
  )
}
