import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Schedule from './pages/Schedule'
import Roster from './pages/Roster'
import Content from './pages/Content'
import Articles from './pages/Articles'
import ArticleDetail from './pages/ArticleDetail'
import League from './pages/League'
import About from './pages/About'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-bg">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/roster" element={<Roster />} />
          <Route path="/content" element={<Content />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:slug" element={<ArticleDetail />} />
          <Route path="/league" element={<League />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 pt-24">
      <div className="font-bebas text-8xl tracking-widest text-[#1A2D5A] mb-2">404</div>
      <div className="font-bebas text-3xl tracking-widest text-white mb-3">Page Not Found</div>
      <p className="text-gray-500 text-sm mb-6">This page doesn't exist. Head back to the dugout.</p>
      <a href="/" className="btn-primary">Back to Home →</a>
    </div>
  )
}
