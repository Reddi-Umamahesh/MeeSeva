import React from 'react'
import MiniNav from './components/MiniNav'
import Header from './components/Header'
import Navbar from './components/Navbar'
import NavSec from './components/NavSec'

const App:React.FC = () => {
  return (
    <div>
      <MiniNav />
      <Header />
      <Navbar />
      <NavSec />
    </div>
  )
}

export default App