import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Women = ({ isOpen, onClose }) => {
      const navigate=useNavigate();
  return (

    <div
      className={`fixed top-0 left-0 w-full max-w-5xl md:max-w-full h-full z-50 flex justify-center items-start  bg-opacity-50 transition-opacity duration-500
        ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <div
        className={`bg-gray-50 mt-16 py-12 w-full px-6 md:px-12 rounded-lg transform transition-transform duration-500
          ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        <button
          className="absolute top-4 right-6 text-2xl font-bold"
          onClick={onClose}
        >
          ×
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center mx-auto max-w-md">
          {/* Model 000 */}
          <div className="flex flex-col items-center">
            <img
              src="/images/women1.jpg"
              alt="Model 000"
              className="rounded-lg  object-cover  w-30 h-40 md:w-50 md:h-60"
            />
            <button onClick={()=>{navigate(`/add-to-bag/9`);onClose()}} className="mt-4 px-6 py-2 border border-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition">
              Model 000
            </button>
            <p className="mt-2 text-gray-800 font-medium">Cushiony Comfort</p>
          </div>

          {/* Model 001 */}
          <div className="flex flex-col items-center">
            <img
              src="/images/women2.jpg"
              alt="Model 001"
              className="rounded-lg  object-cover w-30 h-40 md:w-50 md:h-60"
            />
            <button onClick={()=>{navigate(`/add-to-bag/10`),onClose()}} className="mt-4 px-6 py-2 border border-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition">
              Model 001
            </button>
            <p className="mt-2 text-gray-800 font-medium">Supportive & Durable</p>
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-600 text-sm">Not sure?</p>
          <Link to="/quizhome"
            href="#"
            className="text-blue-600 text-sm font-medium hover:underline inline-flex items-center gap-1">
          
            Take the Shoe Finder Quiz →
         </Link>
        </div>
      </div>
    </div>
  );
};

export default Women;
