import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaSearch,FaFacebookMessenger } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import { useNavigate } from "react-router-dom";

const Support = () => {
    const navigate=useNavigate();
    const[firstname,setfirstname]=useState("")
    const[lastname,settlastname]=useState("")
    const[firsterr,fisrtnameseterr]=useState("");
    const[lasterr,lastnameseterr]=useState("");
    const[phno,setphno]=useState();
    const[pherr,setpherr]=useState("");
    const onhandle=(e,field)=>{
    const value=e.target.value;
    if(field==="firstname"){

    
    setfirstname(value);
    if(/^[A-Za-z]+$/.test(value)){
        
        fisrtnameseterr("");
    }
    else if(value===""){
        fisrtnameseterr("*required field")
    }
    else{
        fisrtnameseterr("Only Alphabets are allowed");
    }
    
}
if(field==="lastname"){
    settlastname(value);
    if(/^[A-Za-z]+$/.test(value)){
            
         lastnameseterr("")

    }
    else if(value===""){
        lastnameseterr("*required field")
    }
    else{
       lastnameseterr("Only Alphabets are allowed");
    }
}
if(field==="phone number"){
    setphno(value);
    if(/^[1-9]/ && value.length!=10){
        setpherr("Enter a valid phone no")
    }
    else{
        setpherr("");
    }
}

    }
  return (
<div>
    
        <Navbar />
        <div className=" flex flex-col justify-center items-center h-70 w-full bg-lime-300">
                <p className="pt-10 text-black font-DMSerif text-5xl">Contact Us</p>
                <div className="mt-4">Any questions? Just Write us a message!</div>
        </div>
        <div className="min-h-screen bg-white flex items-center justify-center mt-16 p-6">
          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
    
            {/* Left Form Section */}
            <div className="border border-gray-300 rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-medium mb-4">
                Send us a message, and we’ll be in touch as soon as possible.
              </h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1  gap-4">
                  <input onChange={(e)=>onhandle(e,"firstname")}
                  value={firstname}
                    type="text"
                    placeholder="First Name"
                    className="w-full text-black p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-200"
                  />
                 {firsterr&& <p  className="text-red-600">{firsterr}</p>}
                  <input
                  onChange={(e)=>onhandle(e,"lastname")}
                    type="text"
                    value={lastname}
                    placeholder="Last Name"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-200"
                  />
                </div>
                {
                    lasterr&&<p className="text-red-500">{lasterr}</p>
                }
                <input
                  type="text"
                  onChange={(e)=>onhandle(e,"phone number")}
                  value={phno}
                  placeholder="Phone Number"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-200"
                />
                {pherr && <p className="text-red-500">{pherr}</p>}
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-200"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-200"
                />
                <textarea
                  placeholder="How can we help?"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-200"
                />
    
                <div>
                  <p className="mb-2">How should we contact you?</p>
                  <div className="flex flex-col  gap-4">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4 border border-gray-300" />
                      Email
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4 border border-gray-300 " />
                      Phone
                    </label>
                  </div>
                </div>
    
                <button
                  type="submit"
                  className="w-full bg-gray-100 text-gray-600 p-3 rounded-full hover:bg-gray-200 transition"
                >
                  Submit
                </button>
              </form>
            </div>
    
            {/* Right Contact Info Section */}
            <div className=" border border-gray-300 rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-2">Get in touch</h2>
              <p className="text-gray-600 mb-6">
                We’d love to hear from you. our team is always ready to chat.
              </p>
    
              <div className="space-y-4 mb-6">
                <p className="flex items-center gap-2 text-gray-700">
                  <FaMapMarkerAlt className="text-gray-500" /> New York
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <FaPhoneAlt className="text-gray-500" /> +1 (917) 000-0000
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <FaSearch className="text-gray-500" /> info@sopa.com
                </p>
              </div>
    
              <button onClick={()=>navigate("/")} className="flex items-center gap-2  border border-gray-300 rounded-full px-4 py-2 text-gray-700 hover:bg-gray-100 transition">
                <FaFacebookMessenger/> Back to shop
              </button>
            </div>
          </div>
        </div>
        <Footer />
</div>
  );
};

export default Support;
