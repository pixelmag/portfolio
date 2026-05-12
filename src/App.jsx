import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import CasePage from './pages/CasePage/CasePage'
import ContactPage from './pages/ContactPage/ContactPage'
import useClickSound from './hooks/useClickSound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function SoundProvider({ children }) {
  useClickSound()
  return children
}

export default function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <SoundProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cases/:slug" element={<CasePage />} />
        </Routes>
      </SoundProvider>
    </BrowserRouter>
  )
}
