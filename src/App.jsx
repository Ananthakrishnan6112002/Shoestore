import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import React, { useState } from "react";

import Addtobag from './assets/components/Addtobag'
import Home from './assets/components/Home'
import products from './assets/components/Products'
import Home2 from './assets/components/Home2'


function App() {
  

  return (
    <>
      
      
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/add-to-bag/:id" element={<Addtobag products={products} />} />
        
      </Routes>
    </Router>
    </>
  )
}

export default App
