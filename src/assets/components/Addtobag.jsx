import React from 'react'
import Navbar from './Navbar'
import { FaStar } from "react-icons/fa";
import { useState } from 'react'
import { useNavigate,useNavigation,useParams } from "react-router-dom";
import Slideshow from './Slideshow';
import Rating from './Rating';
import viteLogo from '/vite.svg'
import Footer from './Footer';
import Cart from './Cart';




const Addtobag = ({products,cart,setcart}) => {
    const navigate=useNavigate();
      const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
    const [count, setCount] = useState(0)
        const [gender, setGender] = useState("Men");
  const [size, setSize] = useState("US 9");
  
  const onbag=(product)=>{
    setcart([...cart,product])
    navigate("/cart");
  }


  const colors = ["black", "blue", "purple", "green"];
  return (
    <><Navbar /><div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20">
          {/* Left side - Images */}
          <div className="grid grid-cols-2 gap-4">
              {product.images.map((img, i) => (
                  <img
                      key={i}
                      src={img}
                      alt={product.model}
                      className="rounded-lg object-cover w-full h-full" />
              ))}
          </div>

          {/* Right side - Details */}
          <div>
              <h2 className="text-lg font-semibold">Model {product.model}</h2>

              {/* Rating */}
              <div className="flex items-center space-x-2 mt-1">
                  <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                          <FaStar key={i} />
                      ))}
                  </div>
                  <span className="text-gray-600 text-sm">(4.7/3205)</span>
              </div>

              {/* Price */}
              <p className="text-2xl font-bold mt-3">${product.price}</p>

              {/* Colors */}
              <div className="mt-4">
                  <p className="font-medium">Color: Black and White</p>
                  <div className="flex space-x-3 mt-2">
                      {colors.map((c, i) => (
                          <button
                              key={i}
                              className={`w-6 h-6 rounded-full border-2 ${c === "black" ? "bg-black border-black" :""} ${c === "blue" ? "bg-blue-500 border-blue-500" : ""} ${c === "purple" ? "bg-purple-500 border-purple-500" : ""} ${c === "green" ? "bg-green-500 border-green-500" : ""}`}
                          ></button>
                      ))}
                  </div>
              </div>

              {/* Gender & Size */}
              <div className="mt-6">
                  <div className="flex space-x-2">
                      <button
                          className={`px-4 py-2 border rounded-lg ${gender === "Women"
                                  ? "bg-black text-white"
                                  : "bg-white text-black"}`}
                          onClick={() => setGender("Women")}
                      >
                          Women
                      </button>
                      <button
                          className={`px-4 py-2 border rounded-lg ${gender === "Men" ? "bg-black text-white" : "bg-white text-black"}`}
                          onClick={() => setGender("Men")}
                      >
                          Men
                      </button>
                  </div>

                  <select
                      className="mt-4 w-full border px-4 py-2 rounded-lg"
                      value={size}
                      onChange={(e) => setSize(e.target.value)}
                  >
                      <option>US 7</option>
                      <option>US 8</option>
                      <option>US 9</option>
                      <option>US 10</option>
                  </select>
              </div>

              {/* Add to Bag */}
              <button onClick={()=>onbag(product)} className="mt-6 w-full bg-black text-white py-3 rounded-lg text-lg font-medium">
                  Add to bag ${product.price}
              </button>

              <p className="text-sm text-gray-500 mt-2">
                  4 payments of $36.25 using Shop Pay or afterpay
              </p>
              <p className="text-sm text-gray-600 mt-2">
                  Free shipping on orders over $30 & free returns in the US
              </p>

              {/* Description */}
              <p className="mt-6 text-gray-700 text-sm leading-relaxed">
                  Step into a world of unparalleled comfort with Atoms' Model 000 - a
                  timeless design that will change the way you think about footwear.
                  From the moment you slip them on, you’ll understand why this shoe has
                  quickly become a customer favorite, with over 100 thousand pairs sold
                  since its debut in 2019. Experience the ultimate in everyday footwear
                  with Atoms’ Model 000.
              </p>

              {/* Accordion sections */}
              <div className="mt-6 border-t divide-y">
                  {[
                      "Key features and benefits",
                      "Comfort and fit",
                      "Materials and card",
                      "Free shipping & returns",
                  ].map((item, i) => (
                      <button
                          key={i}
                          className="w-full flex justify-between items-center py-4 text-left font-medium text-gray-700"
                      >
                          {item}
                          <span className="text-xl">+</span>
                      </button>
                  ))}
              </div>
          </div>
          </div>
           <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Top Left */}
      {
        product.soles.map((sole,index)=>(
<div key="index">
    <div className="flex flex-col justify-center items-center text-center md:text-left ">
            <img
              src={sole.img}
              alt="Shoe sole"
              className="w-[60rem] rounded-lg object-cover"
            />
            <p className="mt-2 text-sm md:text-base">
             {sole.text}
            </p>
          </div>
      

</div>

        ))
      }
      </div>
      <div className='max-w-7xl mx-auto'>
          {
            product.sole2.map((sole,index)=>(
          <div key="index">
              <div className="flex flex-col justify-center items-center text-center md:text-left ">
                <img
                  src={sole.img2}
                  alt="Shoe sole"
                  className="w-full rounded-lg object-fit h-[10rem]"
                />
                <p className="mt-2 text-sm md:text-base">
                 {sole.text2}
                </p>
              </div>
          
          
          </div>
            ))
          }
          <div className="bg-yellow-50 rounded-2xl mt-12 md:mt-20 p-6 md:p-10 text-center">
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
        <Slideshow />
      </div>
      <Rating />
      
<Footer />
      {/* Top Right */}
     

      {/* Bottom Full Width */}
      
    
      </>
  )
}

export default Addtobag