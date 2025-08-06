import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import HomePage from './Pages/HomePage'
import WhatDo from './Pages/WhatDo'
import Skills from './Pages/Skills'


function App() {
 

  return (
    <>
    <Navbar/>
    <HomePage/>
    <WhatDo/>
    <Skills/>
    </>
  )
}

export default App
