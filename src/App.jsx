import Navbar from './components/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import CollectionPage from './components/CollectionPage.jsx'
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
      </Routes>
      <Footer />
      <BookingDrawer isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  )
}
