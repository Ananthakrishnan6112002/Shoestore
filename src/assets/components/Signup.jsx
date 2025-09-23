import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link, Navigate, useNavigate } from 'react-router-dom'


const Signup = () => {
    const navigate=useNavigate();
    const[username,setusername]=useState("");
    const [error,seterror]=useState("")
const [password,setpassword]=useState("");
    const arr=[{
username:"ananthakrishnan",password:"123"},{username:"guest",password:"123"},
{username:"alwin",password:"123"},{username:"mani",password:"123"} ]
const onhandle=(e)=>{
    e.preventDefault();
const founduser=arr.find((u)=>u.username===username && u.password===password);
if(founduser){
    navigate("/");
}
else{
seterror("Incorrect username and password");
}};
  return (
   <div>
<Navbar/>
<div className='h-auto flex min-h-screen  justify-center items-center'>
    <div className='flex flex-col gap-6'>
        <span  className='text-5xl tracking-wider font-DMSerif font-semibold text-black  mb-3 '>Create an Account</span>
        
            <fieldset className='border-2 rounded-xl px-3 text-sky-300 '><legend className='text-xs px-2'>Email address</legend><input type="text" onChange={(e)=>setusername(e.target.value)}  className=' placeholder-gray-400 py-3 focus:outline-none w-md'/></fieldset>
              <fieldset className='border-2 text-red-500 rounded-xl px-3 '><legend className='text-xs px-2'>Password</legend><input type="password" onChange={(e)=>setpassword(e.target.value)}  className=' placeholder-gray-400 py-3 focus:outline-none w-md'/></fieldset>
              {error && <p className='text-red-600'>{error}</p>}
        <button onClick={onhandle} className='px-10 bg-black text-gray-100 py-4 rounded-4xl hover:cursor-pointer hover:bg-green-300 hover:text-black'>Create Account</button>
        <div className='flex'><span>Already have account? </span><Link to="/login" className='underline ml-4 hover:cursor-pointer'>Sign in</Link></div>


    </div>
</div>
<Footer/>
   </div>
  )
}

export default Signup