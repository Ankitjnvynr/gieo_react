import { useState } from 'react'

import './App.css'
import TopBar from '../src/components/headerSection/TopBar'
import Navbar from './components/headerSection/Navbar'
import Middle from './components/middleSection/Middle'
import About from './components/about/About'
import Flip from './components/Flip'
import HeroSection from './components/hero/HeroSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopBar />
      <Navbar />
      <HeroSection/>
      {/* <Middle /> */}
      <About/>
      <Flip/>
    </>
  )
}

export default App
