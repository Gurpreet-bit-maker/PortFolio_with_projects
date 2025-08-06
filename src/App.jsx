import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import HomePage from './Pages/HomePage'
import WhatDo from './Pages/WhatDo'
import Skills from './Pages/Skills'
import FormValidation from './Pages/FormValidation'


function App() {
 

  return (
    <>
    <Navbar/>
    <HomePage/>
    <WhatDo/>
    <Skills/>
    <FormValidation/>
    </>
  )
}

export default App
