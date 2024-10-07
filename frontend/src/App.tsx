import React from 'react'
import MiniNav from './components/MiniNav'
import Header from './components/Header'
import Navbar from './components/Navbar'

const App:React.FC = () => {
  return (
    <div>
      <MiniNav />
      <Header />
      <Navbar/>
    </div>
  )
}

export default App