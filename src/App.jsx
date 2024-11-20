
import React, {useState} from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import { Landing, OurCoffees, CoffeeClass } from './pages';
import './index.css'

function App() {
  

  return (
    <main className="w-screen h-screen">
    <Router>

     <Navbar />

      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route  path="/ourcoffees" element={<OurCoffees/>}/>
        <Route  path="/coffeeclass" element={<CoffeeClass/>}/>
        

  </Routes>
  </Router>
  </main>
  )
}

export default App
