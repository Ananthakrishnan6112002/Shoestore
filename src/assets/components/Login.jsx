import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import Signup from './Signup.jsx'

const Login = () => {

  return (
   <div>
<Navbar/>
<div className='h-auto flex min-h-screen  justify-center items-center'>
    <div className='flex flex-col gap-6'>
        <span  className='md:text-5xl text-4xl tracking-wider font-DMSerif font-semibold text-black  mb-3 '>Sign in.</span>
        
            <input type="text"  placeholder='Email address' className='border-2  pl-6 placeholder-gray-400 border-gray-300 py-3  rounded-2xl md:w-md'/>
        <button className='md:px-10 px-4 bg-black text-gray-100 py-4 rounded-4xl'>Email me a login link</button>
        <div className='flex'><span>New to sopa? </span><Link to='/signup' className='underline ml-4 hover:cursor-pointer'>Create an account</Link></div>


    </div>
</div>

   </div>
  )
}

export default Login