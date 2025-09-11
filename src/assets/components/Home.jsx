import React, { useState, useEffect } from 'react';
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import Navbar from './Navbar';
import Addtobag from './Addtobag';
import { useNavigate } from "react-router-dom";
const Home = () => {
  const[Isoopen,setopen]=useState(false);
   const navigate = useNavigate();

    
  const slides = [
    {
      image: "/images/slide1.jpg",
      text: "Step Inside, for Comfort and magic await you.",
      buttonText: "Shop Now",
    },
    {id:4,
      image: "/images/slide2.jpg",
      text: "Find the best shoes for every occasion.",
      buttonText: "Explore",
    },
    { 
      image: "/images/slide3.jpg",
      text: "Walk with comfort, walk with style.",
      buttonText: "Discover",
    },
    { id:3,
      image: "/images/slide4.jpg",
      text: "New arrivals are waiting for you.",
      buttonText: "Shop Collection",
    },
  ];
const pictures=[
  {id:1,image:"/images/m1.jpg"},
  {id:2,image:"/images/m2.jpg"},
  {id:3,image:"images/m3.jpg"},
  {id:4,image:"images/m5.jpg"}
]
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
        
         <Navbar />

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
                <button onClick={()=> navigate(`/add-to-bag/${slide.id}`)} className="bg-lime-300 px-6 md:px-10 py-2 md:py-3 rounded-3xl left-5 md:left-10 bottom-10 md:bottom-20 absolute hover:cursor-pointer">
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
     <div className="flex flex-wrap sm:flex-nowrap flex-col lg:flex-row gap-8">
  {/* Left Card */}
  <div className="w-full lg:w-2/3 bg-gray-100 rounded-2xl sm:p-6 md:pl-0 text-center">
    <span className="block text-2xl sm:text-4xl lg:text-5xl font-DMSerif">
      The Hype is real...
    </span>

    <div className="flex flex-col md:flex-row mt-6">
      {/* Image */}
      <img
        src="./images/bag.jpg"
        alt="Bag"
        className="rounded-2xl w-2/3 ml-14 md:ml-0 md:w-1/2 h-64 md:h-[29rem] object-fill"
      />

      {/* Text + Stars */}
      <div className="flex flex-col px-4 mt-4 md:mt-0 md:pl-8 ">
        <div className="flex items-center space-x-1">
          <span className="text-sm">borkat u.</span>
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.5a.56.56 0 0 1 1.04 0l2.12 5.11a.56.56 0 0 0 .47.35l5.52.44c.5.04.7.66.32.99l-4.2 3.6a.56.56 0 0 0-.18.56l1.28 5.39a.56.56 0 0 1-.84.61l-4.73-2.88a.56.56 0 0 0-.59 0l-4.72 2.88a.56.56 0 0 1-.84-.61l1.28-5.39a.56.56 0 0 0-.18-.56l-4.2-3.6a.56.56 0 0 1 .32-.99l5.52-.44a.56.56 0 0 0 .47-.35l2.12-5.11Z"
              />
            </svg>
          ))}
        </div>

        <p className="text-lg sm:text-xl lg:text-2xl font-DMSerif leading-relaxed mt-4">
          These stylishly simple and incredibly comfortable shoes have become
          such a staple in my daily wardrobe that I’m already buying a second
          pair.
        </p>
      </div>
    </div>
  </div>

  {/* Right Card */}
  <div className="w-full lg:w-1/3 bg-gray-100 rounded-2xl sm:p-4 md:p-0 flex flex-col items-center">
    <img
      src="./images/leg.jpg"
      alt="Leg"
      className="rounded-2xl h-64 sm:h-80 md:h-[27rem] w-full object-cover transform transition-transform duration-200 "
    />
    <div className="mt-4 flex justify-between items-center w-full px-2 sm:px-6">
      <div>
        <div className="font-semibold">Model 2001</div>
        <div className="text-xs text-gray-500">Navy</div>
      </div>
      <button className="bg-lime-300 px-4 sm:px-6 py-2 sm:py-3 rounded-3xl font-medium hover:cursor-pointer">
        Shop Now
      </button>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 lg:auto-rows-auto sm:gap-8">
          {/* Card 1 */}
          <div onClick={() => navigate(`/add-to-bag/2`)} className="bg-white  transition-transform duration-200 hover:scale-105 text-black rounded-xl p-4 mb-3 shadow-md col-span-3 overflow-hidden h-[30rem] flex flex-col"  >
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
          <div className="bg-white mb-3  transition-transform duration-200 hover:scale-105 text-black rounded-xl p-4 shadow-md col-span-4 row-span-2 flex flex-col h-[62rem]">
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
              
               <button className='bg-lime-300 px-6 py-3 rounded-3xl mt-2 hover:cursor-pointer' onClick={() => navigate(`/add-to-bag/1`)}>Shop Now</button>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 lg:auto-rows-auto sm:gap-8">
          {/* Card 1 */}
           <div className="bg-white text-black rounded-xl p-4 shadow-md col-span-4 row-span-2 flex flex-col h-[62rem] mb-3 transition-transform duration-200 hover:scale-105">
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
          <div className="bg-white  transition-transform mb-3 duration-200 hover:scale-105 text-black rounded-xl p-4 shadow-md col-span-3 overflow-hidden h-[30rem] flex flex-col"  >
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
          <div className="bg-white mb-3 text-black rounded-xl p-6 shadow-md flex flex-col justify-between col-span-3 h-[30rem] transition-transform duration-200 hover:scale-105">
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
<div className="bg-gray-50 min-h-screen  py-12 space-y-12">
      {/* Card 1 - SOPA */}
      <div className="bg-white rounded-xl shadow-md grid grid-cols-1 md:grid-cols-3 overflow-hidden hover:shadow-lg  transition-transform duration-200">
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
      <div className="bg-white rounded-xl shadow-md grid grid-cols-1 md:grid-cols-3 overflow-hidden  hover:shadow-lg   transition-transform duration-200">
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
<div className='mt-10'>
  <div className='text-center'>
    <span className='font-DMSerif text-4xl font-semibold tracking-widest '> SOPA in Everyday </span>
    <div className='text-sm mt-3 '>@sopa</div>
  </div>
  
</div>
<div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-4 mt-8  sm:ml-0'>
{
  pictures.map((pict)=>(
    <img key={pict.id} src={pict.image} alt="" className='h-85 md:w-80 w-full rounded-2xl mb-3 hover:scale-105 transition-transform duration-200' />
  ))
}

</div>


      </div>
       <footer className="bg-[#0b0b22] text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">

        {/* Left Section - Logo & Newsletter */}
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2 font-DMSerif tracking-widest">
            <span className="bg-white w-6 h-6 rounded-full inline-block font-DMSerif"></span>
            SOPA
          </h2>
          <p className="mt-4 text-sm text-gray-300">
            Stay informed about Sopa with our latest releases and founder news.
          </p>
          <div className="mt-4">
            <input
              type="email"
              placeholder="Enter email here for updates"
              className="w-full md:w-60 px-6 py-2 bg-transparent border text-white placeholder:text-white border-gray-100 rounded-4xl text-sm focus:outline-none focus:border-white"
            />
          </div>
        </div>

        {/* Products */}
        <div>
          <h3 className="font-semibold mb-4">Products</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Model 000</li>
            <li>Model 001</li>
            <li>Laces</li>
            <li>Masks</li>
            <li>No-show Socks</li>
            <li>Crew Socks</li>
            <li>Gift Cards</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Help Center</li>
            <li>FAQs</li>
            <li>Order</li>
            <li>Order Status</li>
            <li>Returns & Exchanges</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Everything Else */}
        <div>
          <h3 className="font-semibold mb-4">Everything Else</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Community</li>
            <li>Why Sopa</li>
            <li>About</li>
            <li>Discount Program</li>
            <li>Sopa Blog</li>
            <li>Sopa Ambassadors</li>
          </ul>
          </div>

          {/* Social Icons */}
        <div className="mt-6 text-xl flex flex-col gap-4">
  <a href="#" className="flex items-center gap-2 hover:text-gray-400">
    <FaTwitter /> Twitter
  </a>
  <a href="#" className="flex items-center gap-2 hover:text-gray-400">
    <FaInstagram /> Instagram
  </a>
  <a href="#" className="flex items-center gap-2 hover:text-gray-400">
    <FaFacebook /> Facebook
  </a>
</div>

      </div>
    </footer>
    </div>
  );
};

export default Home;
