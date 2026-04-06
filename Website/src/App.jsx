import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import BeforeAfter from './components/BeforeAfter'
import Footer from './components/Footer'

// pages
import ServicesPage from './pages/ServicesPage'
import ServiceDetail from './pages/ServiceDetail'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />

      <Routes>
        {/* STARTSIDA */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <BeforeAfter />
              <About />
              <Contact />
            </>
          }
        />

        {/* TJÄNSTER */}
        <Route path="/tjanster" element={<ServicesPage />} />

        {/* SPECIFIK TJÄNST */}
        <Route path="/tjanster/:serviceName" element={<ServiceDetail />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App