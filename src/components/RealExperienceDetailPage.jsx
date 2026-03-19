import { useEffect, useMemo, useState } from 'react'
import { ArrowRight, Clock, Scissors, Sparkles } from 'lucide-react'
import BookingDrawer from './BookingDrawer.jsx'

export default function RealExperienceDetailPage() {
  const [activeImage, setActiveImage] = useState(0)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [imageOpacity, setImageOpacity] = useState(1)

  const portfolio = useMemo(
    () => ({
      id: 're-mock',
      clientName: 'The Sharma Wedding',
      garmentName: 'Bespoke Ivory Silk Sherwani',
      story:
        'Designed for a sunlit Anand Karaj ceremony, this sherwani balances heritage elegance with modern structure. We refined the silhouette to photograph cleanly from every angle, tuned the embroidery density for warmth and movement, and finished the collar line to frame the face with quiet confidence.',
      images: [
        'https://manyavar.scene7.com/is/image/manyavar/SHOS454_376-Natural_101.8769_26-02-2026-15-56:650x900?&dpr=on,2',
        'https://i.pinimg.com/1200x/95/46/0f/95460f8e61f9cbfa98a018fabc03e154.jpg',
        'https://i.pinimg.com/736x/6c/ce/12/6cce1235000a290565220cdbd151b0e0.jpg',
        'https://i.pinimg.com/736x/d2/e9/c1/d2e9c1d3197179317cb3ecebf2da566f.jpg',
      ],
      details: {
        fabric: 'Ivory silk blend with soft sheen',
        embroidery: 'Hand-finished zari motifs with tonal threadwork',
        craftingTime: '45 Hours',
      },
    }),
    []
  )

  useEffect(() => {
    setImageOpacity(0)
    const t = window.setTimeout(() => setImageOpacity(1), 60)
    return () => window.clearTimeout(t)
  }, [activeImage])

  return (
    <div className="bg-[#FAF8F4]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="flex gap-6">
              <div className="flex w-20 flex-col gap-4">
                {portfolio.images.map((src, idx) => {
                  const isActive = idx === activeImage
                  return (
                    <button
                      key={src}
                      type="button"
                      onClick={() => setActiveImage(idx)}
                      className={
                        'overflow-hidden bg-[#FAF8F4] transition ' +
                        (isActive
                          ? 'border-2 border-[#C9A84C]'
                          : 'border-2 border-transparent opacity-70 hover:opacity-100')
                      }
                      aria-label={`View image ${idx + 1}`}
                    >
                      <img
                        src={src}
                        alt=""
                        className="h-20 w-20 rounded-sm object-cover"
                        loading="lazy"
                      />
                    </button>
                  )
                })}
              </div>

              <div className="flex-1">
                <div className="w-full flex justify-center items-center bg-[#FAF8F4] rounded-sm">
                  <img
                    key={portfolio.images[activeImage]}
                    src={portfolio.images[activeImage]}
                    alt={portfolio.garmentName}
                    className="w-full h-auto max-h-[85vh] object-contain transition-opacity duration-300"
                    style={{ opacity: imageOpacity }}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1 className="font-[var(--font-serif)] text-4xl md:text-5xl mb-2 text-[#3A2B24]">{portfolio.clientName}</h1>
            <p className="font-[var(--font-sans)] text-xl mb-4 text-[#3A2B24]/75">{portfolio.garmentName}</p>
            <div className="w-16 h-[1px] bg-[#C9A84C] mb-6" />

            <p className="mb-8 font-[var(--font-sans)] text-sm leading-relaxed text-[#3A2B24]/75">{portfolio.story}</p>

            <div className="bg-[#FAF8F4] border border-[#E5E0D8] p-6 mb-8 rounded-sm">
              <div className="flex items-center justify-between gap-4">
                <div className="inline-flex items-center gap-2 text-sm text-[#3A2B24]/75">
                  <Scissors className="h-4 w-4 text-[#8E2121]" aria-hidden="true" />
                  <span>Fabric</span>
                </div>
                <span className="text-sm font-semibold text-[#3A2B24]">{portfolio.details.fabric}</span>
              </div>

              <div className="mt-4 flex items-center justify-between gap-4 border-t border-[#E5E0D8] pt-4">
                <div className="inline-flex items-center gap-2 text-sm text-[#3A2B24]/75">
                  <Sparkles className="h-4 w-4 text-[#C9A84C]" aria-hidden="true" />
                  <span>Embroidery</span>
                </div>
                <span className="text-sm font-semibold text-[#3A2B24]">{portfolio.details.embroidery}</span>
              </div>

              <div className="mt-4 flex items-center justify-between gap-4 border-t border-[#E5E0D8] pt-4">
                <div className="inline-flex items-center gap-2 text-sm text-[#3A2B24]/75">
                  <Clock className="h-4 w-4 text-[#8E2121]" aria-hidden="true" />
                  <span>Crafting Time</span>
                </div>
                <span className="text-sm font-semibold text-[#3A2B24]">{portfolio.details.craftingTime}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsDrawerOpen(true)}
              className="w-full bg-[#8E2121] text-white py-4 uppercase tracking-widest hover:bg-[#7a1c1c] transition-colors flex justify-center items-center gap-2"
            >
              Consult on this Style
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <BookingDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  )
}
