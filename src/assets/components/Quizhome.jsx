import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
const Quizhome = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className='flex justify-center items-center h-screen mt-16'>
        <div className='w-[45rem] h-[25rem] rounded-4xl border-2  bg-gray-100 '>
          <div className='font-DMSerif text-2xl p-12 mt-4 font-medium'>Shopa Shoe Selecter Quiz</div>
          <p className='max-w-xl text-xl ml-10 font-normal '>Discover your ideal everyday shoe by taking our interactive quiz and finding which sopas model perfectly atches your personal needs and lifestule in matter of minutes</p>
          <button className='bg-black text-white py-3 px-12 rounded-4xl mt-10 ml-10 hover:cursor-pointer hover:shadow-2xl' onClick={()=>navigate("/quiz")}>Start Quiz</button>
        </div>
      </div>
        
    </div>
    )
}

export default Quizhome