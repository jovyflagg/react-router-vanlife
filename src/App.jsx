import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home } from './components/pages/Home'
import { About } from './components/pages/About'
import { Vans } from './components/pages/Vans'
import "./server"


function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/vans' element={<Vans />}/>
    </Routes>

    </>
  );
}

export default App;
