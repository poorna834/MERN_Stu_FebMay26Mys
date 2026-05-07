import { useState } from 'react'
import { EventBasics } from './components/P1'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <EventBasics/>
    </>
  )
}

export default App
