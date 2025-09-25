import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { LuUser,LuShoppingCart } from "react-icons/lu";

import Cart from "./Cart";
import {Link, useNavigate } from "react-router-dom";
import Men from "./Men";
import Women from "./Women";
import Accessories from "./Accessories";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [showmen, setShowmen] = useState(false);
  const[showcart,setshowcart]=useState(false);
    const [showwomen, setShowwomen] = useState(false);
    const [showacc,setshowacc]=useState(false);

  return (
    <>
      <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-60 px-8 lg:px-38 py-4 flex justify-between  items-center">
        {/* Logo */}
        <div
          className="flex items-center space-x-2 hover:cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src="/images/logo.png" alt="SOPA Logo" className="h-8" />
          <span className="font-DMSerif text-lg xl:text-3xl tracking-widest">SOPA</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
          
            <div className="flex items-center  md:text-sm space-x-4 lg:space-x-4 lg:text-lg">
              <button onClick={() => {setShowmen(prev=>!prev);
               setshowcart(false);
              setShowwomen(false);
                setshowacc(false);}}className="cursor-pointer hover:text-lime-400">Men</button>
              <button onClick={() => {
                setShowwomen(prev => !prev);
                 setshowcart(false);
                setShowmen(false);
                setshowacc(false);
              }} className="cursor-pointer hover:text-lime-400">Women</button>
              <button onClick={()=>{setshowacc(prev=>!prev);setShowmen(false); setshowcart(false);
                setShowwomen(false);}} className="cursor-pointer hover:text-lime-400">Accessories</button>
               <Link to="/about" className="cursor-pointer hover:text-lime-400">About</Link>
              <Link to="/Quizhome" className="text-lime-400 border  hover:bg-lime-400 hover:text-white border-lime-400 rounded-2xl px-3 py-1 text-sm"> Shoe Finder Quiz</Link>
            </div></div>
          
          <div className="flex items-center text-sm lg:text-lg space-x-4 lg:space-x-6 ">
            <Link to="/allproducts" className="cursor-pointer hidden md:block  hover:text-lime-400">Products</Link>
             <Link to="/support" className="cursor-pointer hidden md:block hover:text-lime-400">Support</Link>
            <Link to="/login" className="cursor-pointer hidden md:block hover:text-lime-400"><LuUser/></Link>
             
              <button className="cursor-pointer hidden md:block hover:text-lime-400" onClick={()=>{setshowcart(prev=>!prev);setShowmen(false);
              setshowacc(false);
            setShowwomen(false)}}><LuShoppingCart/></button>
        </div>

        {/* Hamburger Button (Mobile only) */}
        <button
          className="text-3xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Slide-in Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-2/3 bg-white text-black z-50 p-6 transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <button
            className="absolute top-6 right-6 text-2xl"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes />
          </button>

          <div className="flex flex-col space-y-6 mt-12 text-lg">
            
          <button onClick={() => {setShowmen(prev=>!prev);
          setshowcart(false);
          setShowwomen(false);
            setshowacc(false);setIsOpen(false);}}className="cursor-pointer hover:text-lime-400">Men</button>
          <button onClick={() => {
            setShowwomen(prev => !prev);
             setshowcart(false);
            setShowmen(false);
            setshowacc(false);setIsOpen(false);
          }} className="cursor-pointer hover:text-lime-400">Women</button>
          <button onClick={()=>
          {setshowacc(prev=>!prev);
             setshowcart(false);
            setShowmen(false);
            setShowwomen(false);setIsOpen(false);}} className="cursor-pointer hover:text-lime-400">Accessories</button>
          <Link className="md:ml-0 ml-22" to="/about" >About</Link>
            <Link to="/allproducts" className="cursor-pointer justify-center flex  hover:text-lime-400">Products</Link>
             <Link to="/support" className="cursor-pointer  flex justify-center  hover:text-lime-400">Support</Link>
          
          <Link to="/Quizhome" className="text-lime-400 border hover:bg-lime-400 hover:text-white border-lime-400 rounded-2xl px-3 py-1 text-sm md:pl-0 pl-15"> Shoe Finder Quiz</Link>
               <Link to="/login" className="cursor-pointer flex justify-center   hover:text-lime-400"><LuUser/></Link>
              <Link to="/cart" className="cursor-pointer  hover:text-lime-400"></Link>
              <button onClick={()=>
          {setshowcart(prev=>!prev);
            setshowacc(false);
            setShowmen(false);
            setShowwomen(false);setIsOpen(false);}} className="cursor-pointer flex justify-center hover:text-lime-400"><LuShoppingCart/></button>
          </div>
        </div>
      </nav>

      {/* Men Overlay */}
    <Men isOpen={showmen} onClose={() => setShowmen(false)} />
      <Women isOpen={showwomen} onClose={()=>setShowwomen(false)}/>
 <Accessories isOpen={showacc} onClose={()=>setshowacc(false)}/>
  <Cart isOpen={showcart} onClose={()=>setshowcart(false)}/>

  
  
  

       

    </>
  );
};

export default Navbar;
