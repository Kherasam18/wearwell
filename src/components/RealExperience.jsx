import { motion } from 'framer-motion'
import { ChevronRight, Diamond } from 'lucide-react'
import { Link } from 'react-router-dom'

const cards = [
  {
    title: 'Bespoke Sherwani for the Perfect Groom',
    imageSrc: 'https://manyavar.scene7.com/is/image/manyavar/SHOS454_376-Natural_101.8769_26-02-2026-15-56:650x900?&dpr=on,2',
  },
  {
    title: 'Classic Tuxedo for an Evening Reception',
    imageSrc: 'https://tse1.mm.bing.net/th/id/OIP.9eW5T_JM8KbfpJ0vpE9npQHaJS?rs=1&pid=ImgDetMain&o=7&rm=3',
  },
  {
    title: 'Kurta Pyjama Styling for Effortless Elegance',
    imageSrc: 'https://getethnic.com/wp-content/uploads/2023/05/Reception-Sherwani-24.jpg',
  },
]

export default function RealExperience() {
  return (
    <section id="real-experience" className="bg-[var(--color-cream)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 sm:py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex items-center justify-center"
          >
            <Diamond className="h-5 w-5 text-[var(--color-gold)]" aria-hidden="true" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
            className="mt-4 font-[var(--font-serif)] text-2xl font-semibold uppercase tracking-[0.22em] text-[var(--color-espresso)] sm:text-3xl"
          >
            REAL EXPERIENCE
          </motion.h2>

          <Link
            to="/collections"
            className="mt-3 inline-block font-[var(--font-sans)] text-sm font-medium text-[var(--color-espresso)] underline underline-offset-4"
          >
            View all
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {cards.map((c, idx) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: idx * 0.04 }}
              className="group"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-sm bg-[var(--color-cream-2)]">
                <img
                  src={c.imageSrc}
                  alt={c.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>

              <div className="pt-5 text-left">
                <h3 className="font-[var(--font-sans)] text-lg font-semibold leading-snug text-[var(--color-espresso)]">
                  {c.title}
                </h3>

                <Link
                  to="/collections"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-maroon)] underline underline-offset-4"
                >
                  See the look
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-[var(--color-maroon)]/40">
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
