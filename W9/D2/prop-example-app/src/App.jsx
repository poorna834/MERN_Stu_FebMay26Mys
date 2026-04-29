import { useState } from 'react'
import { PropBasics } from './components/P1'
import { PropDestructuring } from './components/P2'
import { PropsChildren } from './components/P3'
import { PropDrillingDemo } from './components/P4'
import { SharedStateParent } from './components/P5'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <PropBasics/> */}
      {/* <PropDestructuring/> */}
      {/* <PropsChildren/> */}
      {/* <PropDrillingDemo/> */}
      <SharedStateParent/>
    </>
  )
}

export default App;
