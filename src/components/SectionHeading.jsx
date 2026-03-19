import { motion } from 'framer-motion'
import { Crown } from 'lucide-react'

export default function SectionHeading({ id, title, motifColor = 'text-[var(--color-gold)]', className = '' }) {
  return (
    <div className={`mx-auto max-w-3xl text-center ${className}`.trim()}>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex items-center justify-center gap-3"
      >
        <span className="h-px w-10 bg-[var(--color-gold)]/60" />
        <Crown className={`${motifColor} h-4 w-4`} aria-hidden="true" />
        <span className="h-px w-10 bg-[var(--color-gold)]/60" />
      </motion.div>

      <motion.h2
        id={id}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
        className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-espresso)] sm:text-4xl"
      >
        {title}
      </motion.h2>
    </div>
  )
}
