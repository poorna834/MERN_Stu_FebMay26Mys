import { useState } from 'react'
import './App.css'
import { FunctionName } from "./components/FunctionalCompOne.jsx"
import { FunctionalComponentBasics } from "./components/FunctionalComponentsBasics.jsx"
import { ClassComponentsBasics } from './components/ClassComponentsBasics.jsx'
import { FunctionComp } from './components/FunctionalComponentsAdv.jsx'

function App() {
  return (
    <>
      {/* <FunctionName /> */}
      {/* <FunctionalComponentBasics /> */}
      {/* <ClassComponentsBasics /> */}
      <FunctionComp />
    </>
  )
}

export default App;