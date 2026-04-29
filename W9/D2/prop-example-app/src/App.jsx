import { useState } from 'react'
import { PropBasics } from './components/P1'
import { PropDestructuring } from './components/P2'
import { PropsChildren } from './components/P3'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <PropBasics/> */}
      {/* <PropDestructuring/> */}
      <PropsChildren/>
    </>
  )
}

export default App;
