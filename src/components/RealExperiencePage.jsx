import { ArrowRight, Crown, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

const entries = [
  {
    id: 're1',
    client: 'The Singh Wedding',
    location: 'Abohar',
    garment: 'Bespoke Ivory Sherwani',
    imageUrl:
      'https://i.pinimg.com/1200x/95/46/0f/95460f8e61f9cbfa98a018fabc03e154.jpg',
  },
  {
    id: 're2',
    client: 'Mehta Sangeet Night',
    location: 'Chandigarh',
    garment: 'Velvet Bandhgala Jacket',
    imageUrl:
      'https://i.pinimg.com/736x/f3/e9/b5/f3e9b50347a3a62d4e0919cb272814e9.jpg',
  },
  {
    id: 're3',
    client: 'Kapoor Reception',
    location: 'Ludhiana',
    garment: 'Midnight Tuxedo Set',
    imageUrl:
      'https://i.pinimg.com/736x/8b/fc/2e/8bfc2e7d30d64744e09517e52113232f.jpg',
  },
  {
    id: 're4',
    client: 'Ahuja Cocktail',
    location: 'New Delhi',
    garment: 'Black Satin-Lapel Tuxedo',
    imageUrl:
      'https://i.pinimg.com/736x/6c/ce/12/6cce1235000a290565220cdbd151b0e0.jpg',
  },
  {
    id: 're5',
    client: 'Gill Family Engagement',
    location: 'Amritsar',
    garment: 'Embroidered Jodhpuri Suit',
    imageUrl:
      'https://i.pinimg.com/736x/27/96/7e/27967e196e59b25e77e556a36c49fe5b.jpg',
  },
  {
    id: 're6',
    client: 'Bains Mehndi',
    location: 'Jalandhar',
    garment: 'Modern Indo-Western Set',
    imageUrl:
      'https://i.pinimg.com/736x/c2/f1/3e/c2f13e81ae22898f7adc8963d87b9519.jpg',
  },
  {
    id: 're7',
    client: 'Sharma Haldi',
    location: 'Patiala',
    garment: 'Lightweight Kurta Jacket',
    imageUrl:
      'https://i.pinimg.com/736x/95/65/84/9565847c9c305cea5a0c6f65917ae73d.jpg',
  },
  {
    id: 're8',
    client: 'Arora Wedding',
    location: 'Jaipur',
    garment: 'Heritage Maroon Sherwani',
    imageUrl:
      'https://i.pinimg.com/1200x/a5/14/32/a514325d81288217162054eaa06ad29c.jpg',
  },
  {
    id: 're9',
    client: 'Kohli Anniversary',
    location: 'Mumbai',
    garment: 'Cream Bandhgala with Pin Detail',
    imageUrl:
      'https://i.pinimg.com/736x/d2/e9/c1/d2e9c1d3197179317cb3ecebf2da566f.jpg',
  },
  {
    id: 're10',
    client: 'Sharma Haldi',
    location: 'Patiala',
    garment: 'Lightweight Kurta Jacket',
    imageUrl:
      'https://i.pinimg.com/736x/6e/3d/c0/6e3dc08e0ae02beb7319b558f43cf4a3.jpg',
  },
]

function LookbookCard({ entry }) {
  return (
    <Link to={`/real-experience/${entry.id}`} className="block">
      <article className="relative group overflow-hidden break-inside-avoid mb-6 bg-[#FDFBF7]">
        <img
          src={entry.imageUrl}
          alt={`${entry.client} - ${entry.garment}`}
          className="w-full h-auto object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-[#3A2B24]/90 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
          <div className="flex h-full w-full flex-col items-center justify-center text-center p-6">
            <Sparkles className="h-5 w-5 text-[#C9A84C]" aria-hidden="true" />

            <p className="mt-4 font-[var(--font-serif)] text-xl leading-tight text-[#FDFBF7]">
              {entry.client}
            </p>
            <p className="mt-1 text-sm text-[#FDFBF7]/80">{entry.location}</p>

            <p className="mt-4 text-sm font-semibold tracking-wide text-[#FDFBF7]">
              {entry.garment}
            </p>

            <div className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#FDFBF7]">
              <span className="border-b border-transparent transition-colors duration-300 group-hover:border-[#C9A84C]">
                View Story
              </span>
              <ArrowRight className="h-4 w-4 text-[#C9A84C]" aria-hidden="true" />
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default function RealExperiencePage() {
  return (
    <div className="min-h-screen bg-[#FAF8F4] text-[#3A2B24]">
      <header className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 md:px-8 text-center">
          <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#C9A84C]/30 bg-[#FDFBF7]">
            <Crown className="h-5 w-5 text-[#C9A84C]" aria-hidden="true" />
          </div>

          <h1 className="mt-6 font-[var(--font-serif)] text-4xl md:text-5xl uppercase tracking-[0.26em]">
            REAL EXPERIENCE
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#3A2B24]/75">
            A tapestry of moments, fit, and generational craft. Real people, real style, curated by New Wear Well.
          </p>
        </div>
      </header>

      <main className="pb-20">
        <section className="columns-1 sm:columns-2 lg:columns-3 gap-6 max-w-7xl mx-auto px-4 md:px-8">
          {entries.map((e) => (
            <LookbookCard key={e.id} entry={e} />
          ))}
        </section>
      </main>
    </div>
  )
}
