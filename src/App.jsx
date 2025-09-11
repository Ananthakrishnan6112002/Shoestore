import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

import Addtobag from './assets/components/Addtobag'
import Home from './assets/components/Home'
import products from './assets/components/Products'


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
