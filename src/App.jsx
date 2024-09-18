import { useState } from 'react'

import './App.css'
import TopBar from '../src/components/headerSection/TopBar'
import Navbar from './components/headerSection/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopBar />
      <Navbar />
    </>
  )
}

export default App
