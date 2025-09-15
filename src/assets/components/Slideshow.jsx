import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // npm install lucide-react

const Slideshow = () => {
  const images = [
    "/images/l1.jpg",
    "/images/l2.jpg",
    "/images/l3.jpg",
    "/images/l4.jpg",
    "/images/l5.jpg",
    "/images/l1.jpg",
    "/images/l2.jpg",
    "/images/l3.jpg",
    "/images/l4.jpg",
    "/images/l5.jpg",
    "/images/l1.jpg",
    "/images/l2.jpg",
    "/images/l3.jpg",
    "/images/l4.jpg",
    "/images/l5.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Number of slides per view (depends on screen size)
  const slidesPerView = 5; // For desktop (you can make this responsive later)

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - slidesPerView : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= images.length - slidesPerView ? 0 : prev + 1
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      {/* Title */}
      <h2 className="text-xl md:text-2xl font-semibold text-center mb-6">
        Model 000 in Everyday
      </h2>

      {/* Carousel Wrapper */}
      <div className="relative">
        {/* Image Container */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`,
            }}
          >
            {images.map((src, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-2 flex-shrink-0"
              >
                <img
                  src={src}
                  alt={`look-${index}`}
                  className="w-full h-full object-cover rounded-lg shadow"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Slideshow;
