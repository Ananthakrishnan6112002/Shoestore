import React from "react";
import { FaStar, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";

const reviews = [
  {
    name: "Alicia",
    role: "Verified Reviewer",
    model: "Model 000: Gray",
    title: "Super Comfy And Holding Up Nicely",
    rating: 5,
    time: "3 months ago",
    text: "These shoes are my go-to for comfort and durability as a busy teacher and devoted mom of two young children. I wear them to work nearly every day and they still hold up incredibly well, earning a glowing 5-star review despite a stubborn coffee stain.",
    helpful: 3,
    notHelpful: 2,
  },
  {
    name: "Hardik",
    role: "Verified Reviewer",
    model: "Model 000: Gray",
    title: "Love From India",
    rating: 5,
    time: "4 months ago",
    text: "I opted for the Gray color and I am absolutely in love with it! This amazing brand and its supportive community have exceeded my expectations. It is no surprise that this review has been helpful to 3 people who voted 'yes' – I highly recommend giving this product a try!",
    helpful: 10,
    notHelpful: 2,
  },
  {
    name: "Hardik",
    role: "Verified Reviewer",
    model: "Model 000: Gray",
    title: "Love From India",
    rating: 5,
    time: "4 months ago",
    text: "I opted for the Gray color and I am absolutely in love with it! This amazing brand and its supportive community have exceeded my expectations. It is no surprise that this review has been helpful to 3 people who voted 'yes' – I highly recommend giving this product a try!",
    helpful: 10,
    notHelpful: 2,
  },
  {
    name: "Hardik",
    role: "Verified Reviewer",
    model: "Model 000: Gray",
    title: "Love From India",
    rating: 5,
    time: "4 months ago",
    text: "I opted for the Gray color and I am absolutely in love with it! This amazing brand and its supportive community have exceeded my expectations. It is no surprise that this review has been helpful to 3 people who voted 'yes' – I highly recommend giving this product a try!",
    helpful: 10,
    notHelpful: 2,
  },
];

const Rating = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 font-sans">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-4 font-DMSerif">Ratings and Reviews</h2>
      <p className="text-center text-gray-900 max-w-xl mx-auto mb-6">
        An overwhelming 94% of reviewers have endorsed this product, recommending it wholeheartedly to their friends and family.
      </p>

      {/* Rating Overview */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
        <div className="text-center">
          <p className="text-4xl font-bold">4.7</p>
          <div className="flex justify-center text-black gap-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <p className="text-sm text-gray-500">Based on 3,205 reviews</p>
        </div>

        {/* Fit Slider */}
        <div className="w-full md:w-1/2">
          <p className="text-sm font-medium text-gray-600">Fit</p>
          <div className="flex items-center gap-2">
            <span className="text-xs">Poor</span>
            <input type="range" min="0" max="10" defaultValue="9" className="   w-full appearance-none bg-black h-1 rounded-lg
      [&::-webkit-slider-thumb]:appearance-none 
      [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 
      [&::-webkit-slider-thumb]:rounded-full 
      [&::-webkit-slider-thumb]:bg-black
      [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 
      [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-black" />
            <span className="text-xs">Perfect</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-3">
        <button className="border px-4 py-2 rounded-lg text-sm">Filters</button>
        <div className="flex items-center gap-3">
          <button className="border px-4 py-2 rounded-lg text-sm">Write a Review</button>
          <select className="border px-3 py-2 rounded-lg text-sm">
            <option>Sort: Highest Rating</option>
            <option>Sort: Lowest Rating</option>
            <option>Sort: Most Recent</option>
          </select>
        </div>
      </div>

      {/* Reviews */}
      <p className="text-gray-600 text-sm mb-4">3,205 reviews</p>

      <div className="space-y-6">
        {reviews.map((review, i) => (
          <div key={i} className=" flex border border-l-0 border-r-0  p-4 shadow-sm bg-white ">
            <div className="flex justify-between items-start w-full bg-gray-200  p-3 mr-4">
              <div>
                <p className="flex font-semibold">{review.name} <div className="flex">
                    <span className="text-gray-400 text-xs mt-1 ml-3">{review.role}</span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
</p>
                <p className="text-sm text-gray-1000 font-semibold">Reviewing</p>
                <p className="text-sm text-gray-1000">{review.model}</p>
                <span className="text-xs  px-2 py-6 mt-1 gap-2 flex"><FaThumbsUp></FaThumbsUp>I recommend this product</span>
              </div>
              
            </div>

            {/* Rating */}
            <div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1 text-black mt-2">
                      {[...Array(review.rating)].map((_, idx) => (
                        <FaStar key={idx} />
                      ))}
                    </div>
                    <span className="text-gray-400 text-xs">{review.time}</span>
                </div>
                {/* Title */}
                <h3 className="font-semibold mt-2">{review.title}</h3>
                {/* Text */}
                <p className="text-gray-700 text-sm mt-1">{review.text}</p>
                {/* Helpful Section */}
                <div className="flex items-center gap-3 text-sm text-gray-500 mt-3">
                  <span>Was this helpful?</span>
                  <button className="flex items-center gap-1">
                    <FaThumbsUp /> {review.helpful}
                  </button>
                  <button className="flex items-center gap-1">
                    <FaThumbsDown /> {review.notHelpful}
                  </button>
                </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More */}
      <div className="flex justify-center mt-6">
        <button className="border bg-black text-white px-6 py-3 rounded-3xl text-sm">Show More</button>
      </div>
    </div>
  );
};

export default Rating;
