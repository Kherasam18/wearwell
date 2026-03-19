import { motion } from 'framer-motion'
import { Crown } from 'lucide-react'
import { Link } from 'react-router-dom'

const occasions = [
  { title: 'Wedding', imageSrc: '/images/sherwani.png' },
  { title: 'Party', imageSrc: '/images/tuxedo.png' },
  { title: 'Sangeet', imageSrc: '/images/indowestern.png' },
  { title: 'Regular', imageSrc: '/images/pathani.png' },
]

export default function ShopByOccasion() {
  const MotionLink = motion.create(Link)

  return (
    <section className="bg-[var(--color-cream)]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex items-center justify-center"
          >
            <Crown className="h-5 w-5 text-[var(--color-gold)]" aria-hidden="true" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
            className="mt-4 mx-auto max-w-2xl font-[var(--font-serif)] text-2xl font-semibold uppercase tracking-[0.22em] text-[var(--color-espresso)] sm:text-3xl"
          >
            CREATE A LOOK FOR THE OCCASION
          </motion.h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
          {occasions.map((o, idx) => (
            <MotionLink
              key={o.title}
              to="/collections"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: idx * 0.04 }}
              className="group block"
            >
              <div className="border border-[#C9A84C] bg-[var(--color-cream)] p-2 rounded-t-[10rem] rounded-b-sm">
                <div className="relative overflow-hidden rounded-t-[10rem] rounded-b-sm">
                  <div className="aspect-[3/4]">
                    <img
                      src={o.imageSrc}
                      alt={o.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                      loading="lazy"
                    />
                  </div>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                    <div className="bg-[var(--color-maroon)] px-6 py-2 text-center text-sm font-semibold uppercase tracking-[0.18em] text-white">
                      {o.title}
                    </div>
                  </div>
                </div>
              </div>
            </MotionLink>
          ))}
        </div>
      </div>
    </section>
  )
}
