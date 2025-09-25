import React from 'react'
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
     <footer className="bg-[#0b0b22]  text-white py-12 px-10 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">

        {/* Left Section - Logo & Newsletter */}
        <div>
          <h2 className="text-3xl font-bold flex items-center gap-2 font-DMSerif tracking-widest">
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
              className="w-40 md:w-30 xl:w-60 px-6 py-2 bg-transparent border text-white placeholder:text-white border-gray-100 rounded-4xl text-sm focus:outline-none focus:border-white"
            />
          </div>
        </div>

        {/* Products */}
        <div className=''>
          <h3 className="font-semibold mb-4 text-lg">Products</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
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
          <h3 className="font-semibold text-lg mb-4">Support</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
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
          <h3 className="font-semibold mb-4 text-lg">Everything Else</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li>Community</li>
            <li>Why Sopa</li>
            <li>About</li>
            <li>Discount Program</li>
            <li>Sopa Blog</li>
            <li>Sopa Ambassadors</li>
          </ul>
          </div>

          {/* Social Icons */}
        <div className="mt-15 text-base flex flex-col gap-4 md:ml-0 ">
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
  )
}

export default Footer