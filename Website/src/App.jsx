import './App.css'
import Header from './components/Header.jsx'

import Hero from './components/Hero'
import About from './components/About.jsx'
import Contact from './components/Contact'

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
    </>
  )
}

export default App