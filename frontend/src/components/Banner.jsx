import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import family from "../assets/banner_photos/family.jpeg"
import welcome from "../assets/banner_photos/welcome.jpeg"
import senior_citizen from "../assets/banner_photos/senior_citizen.jpeg"
import instruments from "../assets/banner_photos/instruments.jpeg"
import refer from "../assets/banner_photos/refer.jpeg"
import { useNavigate } from 'react-router-dom';


const banners = [
  {
    id: 1,
    title: 'Add a family member',
    highlight: 'GET 30% OFF',
    code: 'FAMILY',
    minOrder: '₹1000',
    bgColor: 'bg-gradient-to-r from-orange-400 to-amber-500',
    textColor: 'text-white',
    image: family,
    description: 'Connect with healthcare professionals easily.'
  },
  {
    id: 2,
    title: 'New User Special',
    highlight: 'FLAT 20% OFF',
    code: 'NEWUSER',
    minOrder: '₹500',
    bgColor: 'bg-gradient-to-r from-blue-400 to-cyan-500',
    textColor: 'text-white',
    image: welcome, 
    description: 'Your first step towards better health.'
  },
  {
    id: 3,
    title: 'Senior Citizen Discount',
    highlight: 'SAVE 15%',
    code: 'SENIOR',
    minOrder: '₹800',
    bgColor: 'bg-gradient-to-r from-purple-400 to-fuchsia-500',
    textColor: 'text-white',
    image: senior_citizen, 
    description: 'Special care for our elders.'
  },
  {
    id: 4,
    title: 'Health Checkup Package',
    highlight: 'BOOK NOW',
    code: 'HEALTHY',
    minOrder: '₹1200',
    bgColor: 'bg-gradient-to-r from-green-400 to-emerald-500',
    textColor: 'text-white',
    image: instruments,
    description: 'Comprehensive health assessments.'
  },
  {
    id: 5,
    title: 'Refer a Friend',
    highlight: 'GET ₹200 OFF',
    code: 'REFERRAL',
    minOrder: '₹300',
    bgColor: 'bg-gradient-to-r from-pink-400 to-rose-500',
    textColor: 'text-white',
    image: refer,
    description: 'Share the goodness, earn rewards.'
  },
];

const Banner = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const intervalRef = useRef(null); // Ref to store the interval ID
  const navigate = useNavigate();

  // Function to go to the next banner
  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  // Function to go to the previous banner
  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  // Effect for auto-scrolling
  useEffect(() => {
    // Start auto-scrolling
    intervalRef.current = setInterval(nextBanner, 5000); // Change banner every 5 seconds

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  // Function to reset the auto-scroll timer when user interacts
  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(nextBanner, 5000);
  };

  // Handle click on previous button
  const handlePrevClick = () => {
    prevBanner();
    resetInterval(); // Reset timer after manual interaction
  };

  // Handle click on next button
  const handleNextClick = () => {
    nextBanner();
    resetInterval(); // Reset timer after manual interaction
  };

  // Handle click on dot indicators
  const handleDotClick = (index) => {
    setCurrentBanner(index);
    resetInterval(); // Reset timer after manual interaction
  };

  return (
    <div className="relative w-full overflow-hidden py-8 font-inter">
      {/* Container for the banner cards */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentBanner * 100}%)` }}
      >
        {banners.map((banner) => (
          <div
            key={banner.id}
            className="w-full flex-shrink-0 px-4 md:px-8 lg:px-16" // Added horizontal padding for better spacing
          >
            <div
              className={`relative flex flex-col md:flex-row items-center justify-between p-4 md:p-6 lg:p-8 rounded-2xl shadow-xl ${banner.bgColor} ${banner.textColor} min-h-[180px] md:min-h-[200px]`}
            >
              {/* Left content area */}
              <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
                <p className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
                  {banner.title} <span className="font-extrabold text-orange-200">{banner.highlight}</span>
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 mb-3">
                  <span className="bg-white text-gray-800 px-4 py-2 rounded-lg font-bold text-sm md:text-base shadow-md">
                    Use Code: {banner.code}
                  </span>
                  <button
                    className="flex items-center gap-1 text-white text-sm md:text-base font-medium hover:underline focus:outline-none"
                    onClick={() => {navigate('/login'); scrollTo(0,0)}}
                  >
                    Book Now <ChevronRight size={16} />
                  </button>
                </div>
                <p className="text-xs md:text-sm text-opacity-80">
                  on min. order value of {banner.minOrder}
                </p>
              </div>

              {/* Right image area */}
              <div className="flex-shrink-0 w-32 h-24 md:w-48 md:h-36 lg:w-56 lg:h-44 overflow-hidden rounded-xl ml-0 md:ml-6">
                <img
                  src={banner.image}
                  alt={`Banner ${banner.id}`}
                  className="w-full h-full object-cover rounded-xl"
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/200x150/CCCCCC/333333?text=Image+Error'; }} // Fallback for image loading errors
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrevClick}
        className="absolute top-1/2 left-4 md:left-8 transform -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none transition-transform duration-300 hover:scale-110"
        aria-label="Previous banner"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={handleNextClick}
        className="absolute top-1/2 right-4 md:right-8 transform -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none transition-transform duration-300 hover:scale-110"
        aria-label="Next banner"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full ${
              currentBanner === index ? 'bg-gray-800' : 'bg-gray-400'
            } focus:outline-none transition-colors duration-300`}
            aria-label={`Go to banner ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Banner;