import { useState } from 'react'
import './App.css'
import { FunctionName } from "./components/FunctionalCompOne.jsx"
import { FunctionalComponentBasics } from "./components/FunctionalComponentsBasics.jsx"
import { ClassComponentsBasics } from './components/ClassComponentsBasics.jsx'
import { FunctionComp } from './components/FunctionalComponentsAdv.jsx'
import { ClassComponentState } from './components/ClassComponentState.jsx'

function App() {
  return (
    <>
      {/* <FunctionName /> */}
      {/* <FunctionalComponentBasics /> */}
      {/* <ClassComponentsBasics /> */}
      {/* <FunctionComp /> */}
      <ClassComponentState/>
    </>
  )
}

export default App;