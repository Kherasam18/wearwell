import { useEffect, useMemo, useState } from 'react'
import { Filter, Heart } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const occasions = [
  { label: 'All', imageSrc: '/images/logo.png' },
  { label: 'Wedding', imageSrc: 'https://manyavar.scene7.com/is/image/manyavar/SHOS454_376-Natural_101.8769_26-02-2026-15-56:650x900?&dpr=on,2' },
  { label: 'Haldi', imageSrc: 'https://i.pinimg.com/1200x/59/af/32/59af328e444197968994c7b240b5b389.jpg' },
  { label: 'Sangeet', imageSrc: 'https://i.pinimg.com/736x/b5/c2/d4/b5c2d408fd4d6412a51aef583fb5d9a4.jpg' },
  { label: 'Mehndi', imageSrc: 'https://i.pinimg.com/736x/03/3e/d2/033ed2761429933c9ebd7ef5a2de984c.jpg' },
  { label: 'Cocktail', imageSrc: 'https://i.pinimg.com/originals/09/7c/a0/097ca0b6a83d21d788c0e505bee631d3.jpg' },
  { label: 'Reception', imageSrc: 'https://i.pinimg.com/1200x/6b/bc/85/6bbc8553bf0a4c9fbc819fb30acd1474.jpg' },
  { label: 'Party', imageSrc: 'https://i.pinimg.com/736x/8f/8f/ac/8f8fac157d53e50120e4cf25af16187b.jpg' },
  { label: 'Kurtas', imageSrc: 'https://i.pinimg.com/736x/3a/93/d2/3a93d2b9dba3596d943d8fcca02579f9.jpg' },
]

const types = [
  'All',
  'Tuxedo',
  '2 pc Formal Suits',
  '3pc formal suits',
  'Jodhpuri',
  'Sherwani',
  'Short kurta',
  'Indo western',
  'Ethnic',
  'Shirts',
  'Stylish kurta',
]

const products = [
  {
    id: 'p1',
    title: 'Cream Self Design Indo Western',
    tag: 'WEDDING WEAR',
    imageSrc: 'https://i.pinimg.com/736x/41/63/6c/41636c796897bc1e7d5247c870f9aa76.jpg',
    occasion: 'Wedding',
    type: 'Indo western',
  },
  {
    id: 'p2',
    title: 'Maroon Classic Sherwani Set',
    tag: 'WEDDING WEAR',
    imageSrc: 'https://manyavar.scene7.com/is/image/manyavar/SHOS454_376-Natural_101.8769_26-02-2026-15-56:650x900?&dpr=on,2',
    occasion: 'Wedding',
    type: 'Sherwani',
  },
  {
    id: 'p9',
    title: 'Ivory Embroidered Sherwani',
    tag: 'WEDDING WEAR',
    imageSrc: '/images/sherwani2.jpg',
    occasion: 'Wedding',
    type: 'Sherwani',
  },
  {
    id: 'p10',
    title: 'Gold Heritage Sherwani',
    tag: 'WEDDING WEAR',
    imageSrc: '/images/sherwani3.jpg',
    occasion: 'Wedding',
    type: 'Sherwani',
  },
  {
    id: 'p11',
    title: 'Classic Cream Sherwani',
    tag: 'WEDDING WEAR',
    imageSrc: '/images/sherwani4.jpg',
    occasion: 'Wedding',
    type: 'Sherwani',
  },
  {
    id: 'p12',
    title: 'Rosewood Sherwani Ensemble',
    tag: 'WEDDING WEAR',
    imageSrc: '/images/sherwani5.jpg',
    occasion: 'Wedding',
    type: 'Sherwani',
  },
  {
    id: 'p13',
    title: 'Regal Sherwani with Detail Work',
    tag: 'WEDDING WEAR',
    imageSrc: '/images/sherwani6.jpeg',
    occasion: 'Wedding',
    type: 'Sherwani',
  },
  {
    id: 'p14',
    title: 'Deep Maroon Sherwani Set',
    tag: 'WEDDING WEAR',
    imageSrc: '/images/sherwani7.jpg',
    occasion: 'Wedding',
    type: 'Sherwani',
  },
  {
    id: 'p15',
    title: 'Contemporary Sherwani in Cream',
    tag: 'WEDDING WEAR',
    imageSrc: '/images/sherwani8.jpg',
    occasion: 'Wedding',
    type: 'Sherwani',
  },
  {
    id: 'p3',
    title: 'Black Tuxedo with Satin Lapel',
    tag: 'PARTY EDIT',
    imageSrc: '/images/tuxedo.png',
    occasion: 'Cocktail',
    type: 'Tuxedo',
  },
  {
    id: 'p4',
    title: 'Regal Jodhpuri Suit in Cream',
    tag: 'CEREMONY',
    imageSrc: '/images/jodhpuri.png',
    occasion: 'Reception',
    type: 'Jodhpuri',
  },
  {
    id: 'p5',
    title: 'Midnight Formal Blazer',
    tag: 'FORMALS',
    imageSrc: '/images/blazer.png',
    occasion: 'Party',
    type: '2 pc Formal Suits',
  },
  {
    id: 'p6',
    title: 'Classic Pathani Kurta Set',
    tag: 'ETHNIC',
    imageSrc: '/images/pathani.png',
    occasion: 'Kurtas',
    type: 'Stylish kurta',
  },
  {
    id: 'p7',
    title: 'Indo-Western Bandhgala Jacket',
    tag: 'SANGEET',
    imageSrc: '/images/indowestern.png',
    occasion: 'Sangeet',
    type: 'Indo western',
  },
  {
    id: 'p8',
    title: 'Textured Short Kurta for Mehndi',
    tag: 'MEHNDI',
    imageSrc: '/images/pathani.png',
    occasion: 'Mehndi',
    type: 'Short kurta',
  },
]

export default function CollectionPage() {
  const location = useLocation()

  const [activeOccasion, setActiveOccasion] = useState(location.state?.activeOccasion || 'All')
  const [activeType, setActiveType] = useState(location.state?.activeType || 'All')

  useEffect(() => {
    if (!location.state) return
    if (location.state.activeOccasion) setActiveOccasion(location.state.activeOccasion)
    if (location.state.activeType) setActiveType(location.state.activeType)
  }, [location.state])

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const occasionOk = activeOccasion === 'All' || p.occasion === activeOccasion
      const typeOk = activeType === 'All' || p.type === activeType
      return occasionOk && typeOk
    })
  }, [activeOccasion, activeType])

  return (
    <div className="min-h-screen bg-[#FAF8F4] text-[var(--color-espresso)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-10 pb-16">
        <div
          className="mx-auto flex max-w-5xl items-start justify-center gap-6 overflow-x-auto px-1 pb-3"
          style={{ scrollbarWidth: 'none' }}
        >
          <style>{`[data-hide-scrollbar]::-webkit-scrollbar{display:none}`}</style>
          <div
            data-hide-scrollbar
            className="flex items-start justify-center gap-6 overflow-x-auto"
            style={{ scrollbarWidth: 'none' }}
          >
            {occasions.map((o) => {
              const isActive = o.label === activeOccasion
              return (
                <button
                  key={o.label}
                  type="button"
                  onClick={() => setActiveOccasion(o.label)}
                  className="flex flex-col items-center gap-2 whitespace-nowrap"
                >
                  <div
                    className={
                      isActive
                        ? 'rounded-full border border-[#8E2121] p-1'
                        : 'rounded-full border border-transparent p-1'
                    }
                  >
                    <img
                      src={o.imageSrc}
                      alt={o.label}
                      className="h-20 w-20 rounded-full object-cover md:h-24 md:w-24"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-xs font-medium tracking-wide text-[var(--color-espresso)]/80">
                    {o.label}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="mt-8 border-t border-black/10" />

        <div className="mt-5 flex items-center justify-between gap-4">
          <button
            type="button"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-espresso)]/80"
          >
            <Filter className="h-4 w-4" aria-hidden="true" />
            Filter
          </button>

          <div className="text-center">
            <p className="font-[var(--font-serif)] text-2xl font-semibold tracking-tight text-[var(--color-espresso)]">
              {activeOccasion}
            </p>
          </div>

          <p className="text-sm font-medium text-[var(--color-espresso)]/70">473 Results</p>
        </div>

        <div
          data-hide-scrollbar
          className="mt-6 flex items-center justify-center gap-3 overflow-x-auto pb-2"
          style={{ scrollbarWidth: 'none' }}
        >
          {types.map((t) => {
            const isActive = t === activeType
            return (
              <button
                key={t}
                type="button"
                onClick={() => setActiveType(t)}
                className={
                  isActive
                    ? 'whitespace-nowrap rounded-full bg-[#8E2121] px-4 py-2 text-xs font-semibold text-white'
                    : 'whitespace-nowrap rounded-full border border-black/10 bg-[#FDFBF7] px-4 py-2 text-xs font-semibold text-[var(--color-espresso)]'
                }
              >
                {t}
              </button>
            )
          })}
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-px bg-[#FAF8F4] sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="block">
                <article className="group bg-[#FAF8F4] transition-all duration-300 ease-in-out">
                  <div className="aspect-[3/4] w-full overflow-hidden bg-[#FDFBF7]">
                    <img
                      src={p.imageSrc}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="bg-white/80 p-4 transition-colors duration-300 ease-in-out group-hover:bg-[#F9F6F0]">
                    <div className="flex items-start justify-between gap-3">
                      <span className="inline-flex bg-[#d95321] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                        {p.tag}
                      </span>
                      <button
                        type="button"
                        className="mt-0.5 inline-flex h-8 w-8 items-center justify-center"
                        aria-label="Add to wishlist"
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                        }}
                      >
                        <Heart className="h-5 w-5 text-[var(--color-espresso)]/70" />
                      </button>
                    </div>

                    <p className="mt-3 text-sm font-semibold leading-snug text-[var(--color-espresso)]">
                      {p.title}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {filteredProducts.length === 0 ? (
            <p className="mt-10 text-center text-sm text-[var(--color-espresso)]/70">
              No products found for this selection.
            </p>
          ) : null}
        </div>
      </div>
    </div>
  )
}
