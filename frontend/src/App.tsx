import React from 'react'
import MiniNav from './components/MiniNav'
import Header from './components/Header'
import Navbar from './components/Navbar'
import NavSec from './components/NavSec'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'

const App:React.FC = () => {
  return (
    <div>
      <MiniNav />
      <Header />
      <Navbar />
      <NavSec />
      <HeroSection />
      <Footer />
      
    </div>
  )
}

export default App