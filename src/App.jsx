import Navbar from './components/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import CollectionPage from './components/CollectionPage.jsx'
import RealExperiencePage from './components/RealExperiencePage.jsx'
import ProductDetailPage from './components/ProductDetailPage.jsx'
import RealExperienceDetailPage from './components/RealExperienceDetailPage.jsx'
import Footer from './components/Footer.jsx'
import { useState } from 'react'
import BookingDrawer from './components/BookingDrawer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      <ScrollToTop />
      <Navbar onBookClick={() => setIsBookingOpen(true)} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collections" element={<CollectionPage />} />
        <Route path="/real-experience" element={<RealExperiencePage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/real-experience/:id" element={<RealExperienceDetailPage />} />
      </Routes>
      <Footer />
      <BookingDrawer isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  )
}
