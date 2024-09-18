import { useState } from 'react'

import './App.css'
import TopBar from '../src/components/headerSection/TopBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopBar />
    </>
  )
}

export default App
