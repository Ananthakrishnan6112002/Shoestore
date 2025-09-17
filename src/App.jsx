import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import React, { useState } from "react";

import Addtobag from './assets/components/Addtobag'
import Home from './assets/components/Home'
import products from './assets/components/Products'
import Home2 from './assets/components/Home2'
import About from "./assets/components/About";
import Quizhome from "./assets/components/Quizhome"
import Quiz from "./assets/components/Quiz";
import Support from "./assets/components/Support"


function App() {
  

  return (
    <>
      
      
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/add-to-bag/:id" element={<Addtobag products={products} />} />
        <Route path="/about" element={<About />} />
        <Route path="/Quizhome" element={<Quizhome />} />
        <Route path="/quiz" element={<Quiz/>}/>
        <Route path="/support" element={<Support/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
