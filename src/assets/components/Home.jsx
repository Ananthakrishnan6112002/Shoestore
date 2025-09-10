import React, { useState, useEffect } from 'react';

const Home = () => {
  const slides = [
    {
      image: "/images/slide1.jpg",
      text: "Step Inside, for Comfort and magic await you.",
      buttonText: "Shop Now",
    },
    {
      image: "/images/slide2.jpg",
      text: "Find the best shoes for every occasion.",
      buttonText: "Explore",
    },
    {
      image: "/images/slide3.jpg",
      text: "Walk with comfort, walk with style.",
      buttonText: "Discover",
    },
    {
      image: "/images/slide4.jpg",
      text: "New arrivals are waiting for you.",
      buttonText: "Shop Collection",
    },
  ];

  const products = [
    { id: 1, name: "Model 000", color: "Black", price: "$145", img: "/images/s1.jpg" },
    { id: 2, name: "Model 000", color: "Black", price: "$145", img: "/images/s3.jpg" },
    { id: 3, name: "Model 000", color: "Navy", price: "$145", img: "/images/s5.jpg" },
    { id: 4, name: "Model 000", color: "Gray", price: "$145", img: "/images/s6.jpg" },
    { id: 5, name: "Model 000", color: "Neon", price: "$145", img: "/images/s7.jpg" },
    { id: 6, name: "Model 000", color: "Black and white", price: "$145", img: "/images/s8.jpg" },
  ];

  // ✅ State to track current slide
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div>
      {/* Top black bar */}
      <div className="bg-black h-10 w-full">
        <p className="text-gray-200 text-center font-normal pt-2 text-sm md:text-base">
          Free US shipping on order $80+
        </p>
      </div>

      <div className="px-4 md:px-10 lg:px-40">
        {/* Navbar */}
        <div className="pt-4 flex items-center justify-between flex-wrap gap-4">
          <span className="font-DMSerif text-2xl tracking-widest">SOPA</span>
          <div className="flex space-x-4 text-sm md:space-x-6">
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Accessories</a>
            <a href="#">About</a>
            <button className="text-lime-400 border border-lime-400 rounded-2xl px-3 py-1 text-sm">
              Shoe Finder Quiz
            </button>
          </div>
          <div className="flex space-x-3">
            <span className="hidden sm:block">Support</span>
            {/* user icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 
                20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 
                12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            {/* bag icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
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
        <div className="relative overflow-hidden h-[400px] md:h-[600px] rounded-2xl mt-8 md:mt-12">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="min-w-full h-[400px] md:h-[600px] bg-cover bg-center relative"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <span className="font-DMSerif left-5 md:left-10 top-40 md:top-56 text-white text-2xl md:text-6xl max-w-xs md:max-w-md absolute">
                  {slide.text}
                </span>
                <button className="bg-lime-300 px-6 md:px-10 py-2 md:py-3 rounded-3xl left-5 md:left-10 bottom-10 md:bottom-20 absolute">
                  {slide.buttonText}
                </button>
              </div>
            ))}
          </div>

          {/* Slider dots */}
          <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-2">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`h-2 w-2 md:h-3 md:w-3 rounded-full cursor-pointer transition-colors duration-300 ${
                  currentIndex === index ? "bg-lime-400" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <div className="bg-gray-100 rounded-2xl mt-12 md:mt-16 p-6 md:p-10 text-center">
          <div className="text-xl md:text-4xl font-DMSerif max-w-3xl mx-auto mb-6">
            "These are the most thoughtfully designed sneakers on the market."
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-20">
            <span className="font-DMSerif text-3xl md:text-5xl">VOGUE</span>
            <span className="font-DMSerif text-gray-500 text-3xl md:text-5xl">esquire</span>
            <span className="font-medium text-sm md:text-md text-gray-400 leading-4">
              HUMANS OF NEWYORK
            </span>
          </div>
        </div>

        {/* Products Section */}
        <div className="px-2 py-10 md:px-20 lg:px-0">
          {/* Header */}
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <h2 className="text-lg md:text-xl font-bold">Explore Model 000</h2>
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:underline"
            >
              Shop Now
            </a>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-sm p-4 flex flex-col hover:scale-110 transform transition-transform duration-150 items-center hover:shadow-lg "
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full object-contain "
                />
                <div className="mt-4 w-full">
                  <p className="text-sm font-medium">{product.name}</p>
                  <p className="text-sm text-gray-500">{product.color}</p>
                  <p className="text-sm font-medium mt-1">{product.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Button */}
          <div className="flex justify-center mt-10">
            <button className="bg-lime-300 text-black px-6 py-2 rounded-full font-medium hover:bg-lime-200 transition-colors duration-300">
              Shop Now
            </button>
          </div>
        </div>
        <div className='flex gap-8' >
          <div className='h-auto text-center w-[60rem] rounded-2xl bg-gray-100 relative'>
          <span className='text-5xl   font-DMSerif'>The Hype is real...</span>
          <div className="flex">
            <img src="./images/bag.jpg" className='rounded-2xl w-[32rem] h-[29rem] mt-8 object-contain' alt=""/>
            <div className='flex-col pr-6 pt-22 pl-4'>
              <div className="flex ">
                <div className='text-sm mr-2 pl-8'>borkat u.</div><svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
              </div>
               <div className='text-3xl mt-4 max-w-200 font-DMSerif leading-8'>These stylishly simple and incredibly comfortable shoes have become such a staoke ub ky dailly wardrobe that Im already buying a second pair.</div>
            </div>
           
          </div>

          </div>
          <div className='h-[34rem] w-[30rem] bg-gray-100'>
<img src="./images/leg.jpg" alt="" className='transform transition-transform duration-200 hover:scale-110 h-[27rem] w-[30rem]' />
<div className=' p-4 flex space-x-28 items-center justify-center'>
<div className=''>
  <div className='font-semibold mb-1'>Model 2001</div>
  <div className='text-xs text-gray-500'>Navy</div></div>
  <button className='bg-lime-300 px-6 py-3 rounded-3xl mt-2 hover:cursor-pointer'>Shop Now</button>
</div>

          </div>
          </div>  
      </div>
      <div className="bg-[#03031a] min-h-screen text-white font-sans mt-14">
      {/* Navbar */}
      <div className="flex justify-center py-4">
        <button className="bg-white text-black px-4 py-1 rounded-full text-sm">
          New
        </button>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
        Introducing Model 001
      </h1>

      {/* Hero Image */}
      <div className="flex justify-center mb-10">
        <img
          src="/images/ad.jpg"
          alt="Hero Shoe"
          className="w-full max-w-3xl rounded-lg"
        />
      </div>

      {/* Explore Section */}
      <div className="px-4 md:px-14">
        <h2 className="text-xl font-semibold mb-6">Explore Model 001</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 lg:auto-rows-auto gap-8">
          {/* Card 1 */}
          <div className="bg-white  transition-transform duration-200 hover:scale-105 text-black rounded-xl p-4 shadow-md col-span-3 overflow-hidden h-[30rem] flex flex-col"  >
              <div className="flex-1 overflow-hidden">
    <img
      src="/images/sh3.jpg"
      alt="White Shoe"
      className="w-full h-full object-cover rounded-md"
    />
  </div>
            <div className="flex justify-between items-center">
                 <div>
                <div className='font-semibold mb-1'>Model 2001</div>
                <div className='text-xs text-gray-500'>Navy</div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white  transition-transform duration-200 hover:scale-105 text-black rounded-xl p-4 shadow-md col-span-4 row-span-2 flex flex-col h-[62rem]">
            <div className='flex-1 overflow-hidden'>
              <img
                src="/images/sh1.jpg"
                alt="Black Shoe"
                className=" rounded-md mb-4 object-cover h-[60rem] w-[80rem]"
              />
            </div>
            <div className="flex justify-between items-center">
             <div>
                <div className='font-semibold mb-1'>Model 2001</div>
                <div className='text-xs text-gray-500'>Navy</div>
              </div>
              
               <button className='bg-lime-300 px-6 py-3 rounded-3xl mt-2 hover:cursor-pointer'>Shop Now</button>
            </div>
          </div>

          {/* Big Card */}
          <div className="bg-white  transition-transform duration-200 hover:scale-105 text-black rounded-xl p-6 shadow-md flex flex-col justify-between col-span-3 h-[30rem]">
            <div className='flex-1 overflow-hidden'>
              <img
                src="/images/sh2.jpg"
                alt="Navy Shoe"
                className="w-full h-full rounded-md mb-4 object-cover"
              />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className='font-semibold mb-1'>Model 2001</div>
                <div className='text-xs text-gray-500'>Navy</div>
              </div>
              <span className="font-semibold">$145</span>
             
            </div>
          </div>
        </div>
      </div>

      {/* Explore Section */}
      <div className="px-4 md:px-14 lg:py-10">
        <h2 className="text-xl font-semibold mb-6">Accessories</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 lg:auto-rows-auto gap-8">
          {/* Card 1 */}
           <div className="bg-white text-black rounded-xl p-4 shadow-md col-span-4 row-span-2 flex flex-col h-[62rem]  transition-transform duration-200 hover:scale-105">
            <div className='flex-1 overflow-hidden'>
              <img
                src="/images/sh8.jpg"
                alt="Black Shoe"
                className=" rounded-md mb-4 object-cover h-[60rem] w-[80rem]"
              />
            </div>
            <div className="flex justify-between items-center">
             <div>
                <div className='font-semibold mb-1'>Model 2001</div>
                <div className='text-xs text-gray-500'>Navy</div>
              </div>
              
               <button className='bg-lime-300 px-6 py-3 rounded-3xl mt-2 hover:cursor-pointer'>Shop Now</button>
            </div>
          </div>
          <div className="bg-white  transition-transform duration-200 hover:scale-105 text-black rounded-xl p-4 shadow-md col-span-3 overflow-hidden h-[30rem] flex flex-col"  >
              <div className="flex-1 overflow-hidden">
    <img
      src="/images/sh7.jpg"
      alt="White Shoe"
      className="w-full h-full  rounded-md"
    />
  </div>
            <div className="flex justify-between items-center">
                 <div>
                <div className='font-semibold mb-1'>Model 2001</div>
                <div className='text-xs text-gray-500'>Navy</div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
         

          {/* Big Card */}
          <div className="bg-white text-black rounded-xl p-6 shadow-md flex flex-col justify-between col-span-3 h-[30rem] transition-transform duration-200 hover:scale-105">
            <div className='flex-1 overflow-hidden'>
              <img
                src="/images/sh6.jpg"
                alt="Navy Shoe"
                className="w-full h-full rounded-md mb-4 object-cover"
              />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className='font-semibold mb-1'>Model 2001</div>
                <div className='text-xs text-gray-500'>Navy</div>
              </div>
              <span className="font-semibold">$145</span>
             
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className="px-4 md:px-10 lg:px-40">
<div className="bg-gray-50 min-h-screen px-6 md:px-16 py-12 space-y-12">
      {/* Card 1 - SOPA */}
      <div className="bg-white rounded-xl shadow-md grid grid-cols-1 md:grid-cols-3 overflow-hidden hover:shadow-lg  hover:scale-105 transition-transform duration-200">
        {/* Left Image */}
        <div className="flex items-center justify-center bg-white">
          <img
            src="/images/sopa.jpg"
            alt="Sopa Shoe"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Middle Section */}
        <div className="bg-[#03031a] text-white flex flex-col items-center justify-center p-6 text-center">
          <button className="bg-white text-black px-4 py-1 rounded-full text-sm mb-4">
            Our Story
          </button>
          <h2 className="text-2xl md:text-3xl font-bold font-DMSerif">SOPA</h2>
        </div>

        {/* Right Text */}
        <div className="flex flex-col justify-center items-center md:items-start p-6 text-center md:text-left">
          <p className="text-sm md:text-base mb-4">
            <span className=" text-xl mt-4 max-w-200 font-DMSerif leading-6">SOPA</span><span className='text-xl mt-4 max-w-200 font-DMSerif leading-8'>
               was born out of a simple yet
              powerful concept - creating a shoe that you would choose to wear every
              single day, and they've brought this idea to life in the bustling city
              of New York.
            </span>
          </p>
          <button className="bg-[#03031a] text-white px-5 py-2 rounded-full text-sm hover:bg-lime-200 hover:text-black transition-colors duration-200  hover:cursor-pointer">
            Learn More
          </button>
        </div>
      </div>

      {/* Card 2 - Humans of New Youk */}
      <div className="bg-white rounded-xl shadow-md grid grid-cols-1 md:grid-cols-3 overflow-hidden  hover:shadow-lg  hover:scale-105 transition-transform duration-200">
        {/* Left Image */}
        <div className="flex items-center justify-center bg-white">
          <img
            src="/images/sopa1.jpg"
            alt="Humans of New Youk"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Middle Section */}
        <div className="bg-[#03031a] text-white flex flex-col items-center justify-center p-6 text-center">
          <button className="bg-white text-black px-4 py-1 rounded-full text-sm mb-4">
            Featured
          </button>
          <h2 className="text-2xl md:text-3xl font-bold font-DMSerif">HUMANS OF NEW YOUK</h2>
        </div>

        {/* Right Text */}
        <div className="flex flex-col justify-center items-center md:items-start p-6 text-center md:text-left">
          <p className=" md:text-base lg:text-xl mt-4 max-w-200 font-DMSerif leading-8">
            Read our co-founder Sidra’s story about struggle, chasing dreams, and
            making shoes.
          </p>
          <button className="bg-[#03031a] text-white px-5 py-2 rounded-full text-sm transition-transform duration-200 hover:translate-5 hover:cursor-pointer mt-4">
            Learn More
          </button>
        </div>
      </div>
    </div>

      </div>
    </div>
  );
};

export default Home;
