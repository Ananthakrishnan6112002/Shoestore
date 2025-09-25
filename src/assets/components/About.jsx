import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { FaPlay } from "react-icons/fa";
const About = () => {
  return (
    <div>
        <Navbar />
        <section className="w-full bg-white pr-4  md:px-12 lg:px-24 py-12">
      {/* Top Image with Play Button */}
      <div className="relative w-full max-w-5xl mx-auto  h-[450px]">
        <video autoPlay loop muted playsInline className='absolute top-8 left-2 w-full h-full object-cover'><source src="images/3205624-hd_1920_1080_25fps.mp4" type="video/mp4"/></video>
       
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto mt-10 text-center">
        <h2 className="font-DMSerif text-2xl md:text-3xl font-bold text-gray-900">
          Why another shoe company?start 
        </h2>
        <p className="text-gray-900 mt-3">
          We are committed to making our shoes more sustainable.
        </p>

        <p className="text-gray-900 max-w-2xl mx-auto  mt-6 text-base md:text-lg leading-relaxed">
          Our pursuit of crafting the perfect shoe gave birth to Atoms, and along
          with it, a vibrant community of individuals who share our passion. Our
          relentless commitment to improving our footwear and prioritizing our
          customers’ satisfaction has led us to incorporate only the finest
          materials and fabrics, disregarding their cost. At Atoms, our sole
          focus is to create a shoe that you’ll be proud to wear every day.
          Although we’re uncertain about the path that lies ahead, we invite you
          to accompany us on this exhilarating journey.”
        </p>

        {/* Link */}
        <a
          href="#"
          className="inline-flex items-center text-blue-600 mt-6 text-sm md:text-base font-medium hover:underline"
        >
          Read our story featured in Humans of New York →
        </a>

        {/* Signature */}
        <div className="mt-8 flex flex-col items-center">
          <img
            src="/images/signbw.jpg" // replace with your signature image
            alt="Signature"
            className="h-12 md:h-20"
          />
          <p className="mt-2 text-gray-800 font-medium text-sm md:text-base">
            SOPA CO-FOUNDERS
          </p>
        </div>
      </div>
    </section>
        <Footer />
    </div>
  )
}

export default About