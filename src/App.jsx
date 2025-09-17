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
import Cart from "./assets/components/Cart";


function App() {
  
  const [cart, setcart] = useState([]);
  return (
    <>
      
      
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/add-to-bag/:id" element={<Addtobag products={products}cart={cart} setcart={setcart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/Quizhome" element={<Quizhome />} />
        <Route path="/quiz" element={<Quiz/>}/>
        <Route path="/support" element={<Support/>}/>
        <Route path="/cart" element={<Cart cart={cart} />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
