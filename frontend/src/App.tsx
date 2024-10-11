import React from 'react'
import MiniNav from './components/MiniNav'
import Header from './components/Header'
import Navbar from './components/Navbar'
import NavSec from './components/NavSec'
import HeroSection from './components/HeroSection'
import Secondary from './components/Secondary'

const App:React.FC = () => {
  return (
    <div>
      <MiniNav />
      <Header />
      <Navbar />
      <NavSec />
      <HeroSection />
      <Secondary />
    </div>
  )
}

export default App