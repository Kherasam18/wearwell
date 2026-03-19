import Hero from './Hero.jsx'
import Heritage from './Heritage.jsx'
import ShopByOccasion from './ShopByOccasion.jsx'
import Collections from './Collections.jsx'
import RealExperience from './RealExperience.jsx'
import Reviews from './Reviews.jsx'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function HomePage() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [hash])

  return (
    <main>
      <Hero />
      <Heritage />
      <ShopByOccasion />
      <Collections />
      <RealExperience />
      <Reviews />
    </main>
  )
}
