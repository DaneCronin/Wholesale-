
import React from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home, OurCoffees, CoffeeClass } from './pages';
import './index.css'

function App() {
  

  return (
    <main className="h-full">
    <Router>
      
     <Navbar />

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route  path="/ourcoffees" element={<OurCoffees/>}/>
        <Route  path="/coffeeclass" element={<CoffeeClass/>}/>
        

  </Routes>
  </Router>
  </main>
  )
}

export default App
