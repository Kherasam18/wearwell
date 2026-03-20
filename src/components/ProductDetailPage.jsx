import { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowRight, ChevronDown, Scissors } from 'lucide-react'
import BookingDrawer from './BookingDrawer.jsx'

export default function ProductDetailPage() {
  const [activeImage, setActiveImage] = useState(0)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [imageOpacity, setImageOpacity] = useState(1)
  const thumbnailRef = useRef(null)

  const scrollThumbnailsDown = () => {
    if (thumbnailRef.current) {
      thumbnailRef.current.scrollBy({ top: 192, behavior: 'smooth' })
    }
  }

  const product = useMemo(
    () => ({
      id: 'pdp-mock',
      title: 'Ivory Sherwani',
      fabricType: 'Ivory raw silk with hand-finished zari detailing',
      description:
        'A premium sherwani crafted for modern heritage ceremonies — structured for presence, softened for comfort, and finished with a quietly opulent sheen. Designed to photograph beautifully under warm event lighting and move effortlessly from rituals to reception.',
      images: [
        'https://manyavar.scene7.com/is/image/manyavar/CPSH418-303-Beige-401_01-12-2025-10-43:650x900',
        'https://manyavar.scene7.com/is/image/manyavar/CPSH418-303-Beige-404_01-12-2025-10-43:650x900?&dpr=on,2',
        'https://manyavar.scene7.com/is/image/manyavar/CPSH418-303-Beige-405_01-12-2025-16-13:650x900?&dpr=on,2',
        'https://manyavar.scene7.com/is/image/manyavar/CPSH418-303-Beige-403_01-12-2025-16-13:650x900',
      ],
      estimatedFabricCost: 18500,
      estimatedStitchingCost: 14500,
    }),
    []
  )

  const totalCost = useMemo(() => product.estimatedFabricCost + product.estimatedStitchingCost, [product])

  useEffect(() => {
    setImageOpacity(0)
    const t = window.setTimeout(() => setImageOpacity(1), 60)
    return () => window.clearTimeout(t)
  }, [activeImage])

  return (
    <div className="bg-[#FAF8F4]">
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="flex gap-6">
              <div>
                <div ref={thumbnailRef} className="flex flex-col gap-4 w-20 max-h-[340px] overflow-y-auto scroll-smooth [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#8E2121] [&::-webkit-scrollbar-thumb]:rounded-full [scrollbar-color:#8E2121_transparent] [scrollbar-width:thin]">
                  {product.images.map((src, idx) => {
                    const isActive = idx === activeImage
                    return (
                      <button
                        key={src}
                        type="button"
                        onClick={() => setActiveImage(idx)}
                        className={
                          'shrink-0 overflow-hidden bg-[#FAF8F4] transition ' +
                          (isActive
                            ? 'border-2 border-[#C9A84C]'
                            : 'border-2 border-transparent opacity-70 hover:opacity-100')
                        }
                        aria-label={`View image ${idx + 1}`}
                      >
                        <div className="aspect-[3/4]">
                          <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
                        </div>
                      </button>
                    )
                  })}
                </div>
                <button onClick={scrollThumbnailsDown} className="w-20 mt-2 py-2 flex justify-center items-center bg-transparent hover:bg-black/5 transition-colors cursor-pointer group">
                  <ChevronDown className="w-6 h-6 text-black group-hover:translate-y-1 transition-transform" strokeWidth={1.5} />
                </button>
              </div>

              <div className="flex-1">
                <div className="aspect-[3/4] overflow-hidden bg-[#FAF8F4]">
                  <img
                    key={product.images[activeImage]}
                    src={product.images[activeImage]}
                    alt={product.title}
                    className="h-full w-full object-cover transition-opacity duration-300"
                    style={{ opacity: imageOpacity }}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1 className="font-[var(--font-serif)] text-4xl md:text-5xl mb-4 text-[#3A2B24]">{product.title}</h1>
            <div className="w-16 h-[1px] bg-[#C9A84C] mb-6" />

            <p className="mb-8 font-[var(--font-sans)] text-sm leading-relaxed text-[#3A2B24]/75">
              {product.description}
            </p>

            <div className="bg-white/50 border border-gray-200 p-6 mb-8">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#C9A84C]/30 bg-[#FAF8F4]">
                  <Scissors className="h-4 w-4 text-[#8E2121]" aria-hidden="true" />
                </span>

                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[#3A2B24]/60">Fabric</p>
                  <p className="mt-2 text-sm font-semibold text-[#3A2B24]">{product.fabricType}</p>
                  <p className="mt-2 text-sm text-[#3A2B24]/70">
                    Crafted with attention to drape, breathability, and a long-wear finish.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#FAF8F4] border border-[#E5E0D8] p-6 mb-8 rounded-sm">
              <div className="flex items-center justify-between text-sm text-[#3A2B24]/80">
                <span>Estimated Fabric Cost</span>
                <span>₹{product.estimatedFabricCost.toLocaleString('en-IN')}</span>
              </div>

              <div className="mt-4 flex items-center justify-between border-b border-[#E5E0D8] pb-4 text-sm text-[#3A2B24]/80">
                <span>Master Stitching</span>
                <span>₹{product.estimatedStitchingCost.toLocaleString('en-IN')}</span>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-[#3A2B24]">Total Estimate</span>
                <span className="text-base font-semibold text-[#3A2B24]">₹{totalCost.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsDrawerOpen(true)}
              className="w-full bg-[#8E2121] text-white py-4 uppercase tracking-widest hover:bg-[#7a1c1c] transition-colors flex justify-center items-center gap-2"
            >
              Book Appointment
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <BookingDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  )
}
