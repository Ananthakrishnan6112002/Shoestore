import React from "react";

const Men = ({isOpen, onClose }) => {
  return (
   <div
  className={`bg-gray-50 py-12 px-6 fixed top-16 left-0 w-full z-50 overflow-y-auto bg-opacity-95 transform transition-transform duration-500 ease-in-out
    ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
>

      
      {/* Close button */}
      <button
        className="absolute top-4 right-6 text-2xl font-bold"
        onClick={onClose}
      >
        ×
      </button>

      <div className="max-w-md  mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 text-center">
        {/* Model 000 */}
        <div className="flex flex-col items-center">
          <div className="w-full max-w-xs">
            <img
              src="/images/men2.jpg"
              alt="Model 000"
              className="rounded-lg ml-2  object-cover h-60 w-50"
            />
          </div>
          <button className="mt-4 px-6 py-2 border border-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition">
            Model 000
          </button>
          <p className="mt-2 text-gray-800 font-medium">Cushiony Comfort</p>
        </div>

        {/* Model 001 */}
        <div className="flex flex-col items-center">
          <div className="w-full max-w-xs">
            <img
              src="/images/men1.jpg"
              alt="Model 001"
              className="rounded-lg ml-2 w-50 object-cover h-60"
            />
          </div>
          <button className="mt-4 px-6 py-2 border border-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition">
            Model 001
          </button>
          <p className="mt-2 text-gray-800 font-medium">Supportive & Durable</p>
        </div>
      </div>

      {/* Footer link */}
      <div className="text-center mt-10">
        <p className="text-gray-600 text-sm">Not sure?</p>
        <a
          href="#"
          className="text-blue-600 text-sm font-medium hover:underline inline-flex items-center gap-1"
        >
          Take the Shoe Finder Quiz →
        </a>
      </div>
    </div>
  );
};

export default Men;
