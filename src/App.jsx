import React, { useEffect } from 'react'
import Home from './Home/Home'
import { Route, Routes } from "react-router-dom"
import Courses from './courses/Courses'
import Signup from './components/Signup'
import Contact from './Contact/Contact'


function App() { 
  useEffect(() => {
    window.document.body.classList.remove()
    window.document.body.classList.add(localStorage.getItem("theme"))
  }) 
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course' element={<Courses/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/contact' element={<Contact/>}/>
        
      </Routes>
    </>
    
  )
}

export default App
