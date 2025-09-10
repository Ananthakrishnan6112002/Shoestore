import React, { useState, useEffect } from 'react';

const Home = () => {
const slides=[
{
    image:"/images/slide1.jpg",
    Text:"sdghkshdfksjhfkj",
    buttonText:"dsfsf",
},
{
    image:"/images/slide2.jpg",
    Text:"dfsfsdf",
    buttonText:"sdgvsgs",
},


]

const [currentIndex,getindex]=useState(0);
useEffect(() => {
const interval=setInterval(() => {
    getindex((prev)=>
    prev===slides.length-1?0:prev+1);
}, 1000);

  return () => {
    clearInterval(interval)
  }
}, [slides.length])





 



  return (
    <div>
      {/* Top black bar */}
      <div className="bg-black h-10 w-full">
        <p className="text-gray-200 text-center font-normal pt-2">
          Free US shipping on order $80+
        </p>
      </div>

      <div className="pl-40 pr-40">
        {/* Navbar */}
        <div className="pt-4 flex items-center justify-between">
          <span className="font-DMSerif text-2xl tracking-widest">SOPA</span>
          <div className="flex space-x-6">
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Accessories</a>
            <a href="#">About</a>
            <button className="text-lime-400 border border-lime-400 rounded-2xl px-3 py-1 text-sm align-middle">
              Shoe Finder Quiz
            </button>
          </div>
          <div className="flex space-x-3">
            <span>Support</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 
                20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 
                12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 
                1.263 12c.07.665-.45 1.243-1.119 
                1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 
                1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 
                1.119 1.007ZM8.625 10.5a.375.375 0 1 
                1-.75 0 .375.375 0 0 1 .75 0Zm7.5 
                0a.375.375 0 1 1-.75 0 .375.375 0 0 
                1 .75 0Z"
              />
            </svg>
          </div>
        </div>

        {/* Slideshow */}
      <div className="relative overflow-hidden h-[600px] rounded-2xl mt-[3rem]">
  <div
    className="flex transition-transform duration-700 ease-in-out"
    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
  >
    {slides.map((slide, index) => (
      <div
        key={index}
        className="min-w-full h-[600px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${slide.image})` }}
      >
        <span className="font-DMSerif left-10 top-56 text-white text-6xl max-w-md absolute">
          {slide.Text}
        </span>
        {index === 0 || index===1 ? (
          <button className="bg-lime-300 px-10 py-3 rounded-3xl left-10 bottom-30 absolute">
            {slide.buttonText}
          </button>
        ) : (
          <button className="bg-lime-300 px-10 py-3 rounded-3xl left-10 top-106 absolute">
            {slide.buttonText}
          </button>
        )}
      </div>
    ))}
  </div>

  {/* Slider dots */}
  <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-2">
    {slides.map((_, index) => (
      <span
        key={index}
        className={`h-3 w-3 rounded-full cursor-pointer transition-colors duration-300 ${
          currentIndex === index ? "bg-lime-400" : "bg-gray-300"
        }`}
        onClick={() =>getindex(index)}
      ></span>
    ))}
  </div>
</div>


        <div className='h-56 bg-gray-100 rounded-2xl mt-16'>
<div className='text-4xl font-DMSerif max-w-3xl text-center p-10 ml-52'>"These are the most thoughtfully designed sneakers on the market."</div>
<div className='flex items-center justify-center space-x-30 '>
  <span className='font-DMSerif  text-5xl'>VOGUE</span>
<span className='font-DMSerif  text-gray-500 text-5xl'>esquire</span>
<span className='font-medium text-md text-gray-400 max-w-30 leading-4'>HUMANS OF NEWYORK</span>
</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
