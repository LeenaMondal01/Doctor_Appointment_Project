// import React from 'react'
// import { assets } from '../assets/assets'
// import { useNavigate } from 'react-router-dom'

// const Banner = () => {
//   const navigate = useNavigate();
//   return (
//     <div className='flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>
//       {/* -----------------------Left Side---------------------------- */}
//       <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
//         <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
//           <p>Book Appointment</p>
//           <p className='mt-4'>With 100+ Trusted Doctors</p>
//         </div>
//         <button onClick={()=>{navigate('/login'); scrollTo(0,0)}} className='bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all'>Create Account</button>
//       </div>
//       {/* -----------------------Right Side---------------------------- */}
//       <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
//         <img className='w-full absolute bottom-0 right-0 max-w-md' src={assets.appointment_img} alt="" />
//       </div>
//     </div>
//   )
// }

// export default Banner




// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ArrowLeft, ArrowRight } from 'lucide-react';

// const slides = [
//   {
//     title: 'Trust us with their care',
//     desc: 'Add your parents to unlock Senior Citizen checkup for just ₹1599',
//     oldPrice: '₹3999',
//     newPrice: '₹1599',
//     img: 'https://images.unsplash.com/photo-1617606002771-5f75b2b9a8f4',
//   },
//   {
//     title: 'Early Diagnosis Saves Lives',
//     desc: 'Get checked early with our comprehensive health packages starting ₹999',
//     oldPrice: '₹2499',
//     newPrice: '₹999',
//     img: 'https://images.unsplash.com/photo-1588776814546-ec7ee0fc0066',
//   },
//   {
//     title: 'Expert Pediatric Care',
//     desc: 'Trusted pediatricians available anytime for your little ones',
//     oldPrice: '₹699',
//     newPrice: '₹499',
//     img: 'https://images.unsplash.com/photo-1588776814466-ec7ee0fc0047',
//   },
//   {
//     title: 'Your Health, Our Priority',
//     desc: 'Book appointments with our top doctors in just 2 clicks',
//     oldPrice: '₹1199',
//     newPrice: '₹799',
//     img: 'https://images.unsplash.com/photo-1614695799931-896b63ffdf0b',
//   },
// ];

// const Banner = () => {
//   const [current, setCurrent] = useState(0);
//   const navigate = useNavigate();

//   const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);
//   const nextSlide = () => setCurrent((current + 1) % slides.length);

//   return (
//     <div className='relative w-full overflow-hidden my-20 px-4 sm:px-6 md:px-10'>
//       <div className='flex transition-transform duration-700 ease-in-out' style={{ transform: `translateX(-${current * 100}%)`, width: `${slides.length * 100}%` }}>
//         {slides.map((slide, index) => (
//           <div key={index} className='min-w-full flex flex-col md:flex-row items-center justify-between bg-gray-100 rounded-xl shadow-lg p-6 sm:p-10 gap-6'>
//             <div className='flex-1 text-left'>
//               <h2 className='text-2xl sm:text-3xl font-bold text-orange-500'>{slide.title}</h2>
//               <p className='mt-4 text-gray-700'>{slide.desc}</p>
//               <div className='mt-4 text-lg'>
//                 <span className='line-through text-gray-500 mr-2'>{slide.oldPrice}</span>
//                 <span className='font-semibold text-black'>{slide.newPrice}</span>
//               </div>
//               <button onClick={() => { navigate('/login'); scrollTo(0, 0); }} className='mt-6 bg-orange-500 text-white px-6 py-2 rounded-full hover:scale-105 transition-transform'>Book Now</button>
//             </div>
//             <div className='flex-1'>
//               <img src={slide.img} alt='offer' className='rounded-lg w-full h-auto object-cover' />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Arrows */}
//       <button onClick={prevSlide} className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-orange-100'><ArrowLeft size={20} /></button>
//       <button onClick={nextSlide} className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-orange-100'><ArrowRight size={20} /></button>

//       {/* Dots */}
//       <div className='flex justify-center mt-6 gap-2'>
//         {slides.map((_, idx) => (
//           <div
//             key={idx}
//             className={`w-3 h-3 rounded-full ${idx === current ? 'bg-orange-500' : 'bg-gray-300'}`}
//             onClick={() => setCurrent(idx)}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Banner;









// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ArrowLeft, ArrowRight } from 'lucide-react';

// const slides = [
//   {
//     title: 'Expert Pediatric Care',
//     desc: 'Book appointments with top pediatricians for your childs health. Offer valid this week only!',
//     oldPrice: '₹699',
//     newPrice: '₹499',
//     img: 'https://images.unsplash.com/photo-1588776814466-ec7ee0fc0047',
//   },
//   {
//     title: 'Comprehensive Neurologist Support',
//     desc: 'Advanced neurological care at just ₹1299. Book now, limited slots available!',
//     oldPrice: '₹2599',
//     newPrice: '₹1299',
//     img: 'https://images.unsplash.com/photo-1614695799931-896b63ffdf0b',
//   },
//   {
//     title: 'Trusted Gynecologist Care',
//     desc: 'Women health prioritized with Care & Cure Medical Center. Book at ₹899 only!',
//     oldPrice: '₹1899',
//     newPrice: '₹899',
//     img: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e',
//   },
//   {
//     title: 'Your Health, Our Priority',
//     desc: 'Book general physicians, dermatologists, and more in 2 clicks. Limited period discount!',
//     oldPrice: '₹999',
//     newPrice: '₹699',
//     img: 'https://images.unsplash.com/photo-1617606002771-5f75b2b9a8f4',
//   },
// ];

// const Banner = () => {
//   const [current, setCurrent] = useState(0);
//   const navigate = useNavigate();

//   const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);
//   const nextSlide = () => setCurrent((current + 1) % slides.length);

//   return (
//     <div className='relative w-full overflow-hidden my-20 px-4 sm:px-6 md:px-10'>
//       <div className='flex transition-transform duration-700 ease-in-out' style={{ transform: `translateX(-${current * 100}%)`, width: `${slides.length * 100}%` }}>
//         {slides.map((slide, index) => (
//           <div key={index} className='min-w-full flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-orange-100 via-white to-orange-50 rounded-3xl shadow-lg p-6 sm:p-10 gap-6'>
//             <div className='flex-1 text-left'>
//               <h2 className='text-2xl sm:text-3xl font-bold text-orange-500'>{slide.title}</h2>
//               <p className='mt-4 text-gray-700'>{slide.desc}</p>
//               <div className='mt-4 text-lg'>
//                 <span className='line-through text-gray-500 mr-2'>{slide.oldPrice}</span>
//                 <span className='font-semibold text-black'>{slide.newPrice}</span>
//               </div>
//               <button onClick={() => { navigate('/login'); scrollTo(0, 0); }} className='mt-6 bg-orange-500 text-white px-6 py-2 rounded-full hover:scale-105 transition-transform'>Book Now</button>
//             </div>
//             <div className='flex-1 max-w-[370px] rounded-3xl overflow-hidden'>
//               <img src={slide.img} alt='offer' className='w-full h-full object-cover rounded-3xl' />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Arrows */}
//       <button onClick={prevSlide} className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-orange-100'><ArrowLeft size={20} /></button>
//       <button onClick={nextSlide} className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-orange-100'><ArrowRight size={20} /></button>

//       {/* Dots */}
//       <div className='flex justify-center mt-6 gap-2'>
//         {slides.map((_, idx) => (
//           <div
//             key={idx}
//             className={`w-3 h-3 rounded-full ${idx === current ? 'bg-orange-500' : 'bg-gray-300'}`}
//             onClick={() => setCurrent(idx)}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Banner;








// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ArrowLeft, ArrowRight } from 'lucide-react';

// const slides = [
//   {
//     title: 'Expert Pediatric Care',
//     desc: 'Book appointments with top pediatricians for your child’s health. Offer valid this week only! Our child specialists ensure safe and effective treatment for newborns and adolescents alike.',
//     oldPrice: '₹699',
//     newPrice: '₹499',
//     img: 'https://images.unsplash.com/photo-1588776814466-ec7ee0fc0047',
//   },
//   {
//     title: 'Comprehensive Neurologist Support',
//     desc: 'Advanced neurological care at just ₹1299. Book now, limited slots available! Includes migraine management, epilepsy care, and neuro rehab consultations.',
//     oldPrice: '₹2599',
//     newPrice: '₹1299',
//     img: 'https://images.unsplash.com/photo-1614695799931-896b63ffdf0b',
//   },
//   {
//     title: 'Trusted Gynecologist Care',
//     desc: 'Women’s health prioritized with Care & Cure Medical Center. Book at ₹899 only! Services include prenatal, fertility, and menopause care.',
//     oldPrice: '₹1899',
//     newPrice: '₹899',
//     img: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e',
//   },
//   {
//     title: 'Your Health, Our Priority',
//     desc: 'Book general physicians, dermatologists, and more in 2 clicks. Limited period discount! Fast, affordable, and expert healthcare from the comfort of your home.',
//     oldPrice: '₹999',
//     newPrice: '₹699',
//     img: 'https://images.unsplash.com/photo-1617606002771-5f75b2b9a8f4',
//   },
// ];

// const Banner = () => {
//   const [current, setCurrent] = useState(0);
//   const navigate = useNavigate();

//   const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);
//   const nextSlide = () => setCurrent((current + 1) % slides.length);

//   return (
//     <div className='relative w-full overflow-hidden my-20'>
//       {/* Background image */}
//       <div className='absolute inset-0 z-0'>
//         <img
//           src='https://images.unsplash.com/photo-1505751172876-fa1923c5c528' // Optional background image
//           alt='banner bg'
//           className='w-full h-full object-cover opacity-20'
//         />
//       </div>

//       {/* Slide content */}
//       <div
//         className='flex transition-transform duration-700 ease-in-out relative z-10'
//         style={{
//           transform: `translateX(-${current * 100}%)`,
//           width: `${slides.length * 100}%`,
//         }}
//       >
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className='min-w-full flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-orange-100 via-white to-orange-50 rounded-3xl shadow-xl p-6 sm:p-10 gap-6 mx-4'
//           >
//             {/* Text Section */}
//             <div className='flex-1 text-left'>
//               <h2 className='text-3xl sm:text-4xl font-bold text-orange-500'>{slide.title}</h2>
//               <p className='mt-4 text-gray-700 leading-relaxed'>{slide.desc}</p>
//               <ul className='mt-3 text-gray-600 list-disc pl-5 text-sm'>
//                 <li>Certified Experts</li>
//                 <li>Easy Appointment Booking</li>
//                 <li>24/7 Support</li>
//               </ul>
//               <div className='mt-4 text-lg'>
//                 <span className='line-through text-gray-500 mr-2'>{slide.oldPrice}</span>
//                 <span className='font-semibold text-black'>{slide.newPrice}</span>
//               </div>
//               <button
//                 onClick={() => {
//                   navigate('/login');
//                   scrollTo(0, 0);
//                 }}
//                 className='mt-6 bg-orange-500 text-white px-6 py-2 rounded-full hover:scale-105 transition-transform'
//               >
//                 Book Now
//               </button>
//             </div>

//             {/* Image Section */}
//             <div className='flex-1 max-w-[400px] rounded-3xl overflow-hidden shadow-lg'>
//               <img
//                 src={slide.img}
//                 alt='offer'
//                 className='w-full h-full object-cover rounded-3xl'
//               />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Arrows */}
//       <button
//         onClick={prevSlide}
//         className='absolute top-1/2 left-6 transform -translate-y-1/2 bg-white z-20 shadow-md p-2 rounded-full hover:bg-orange-100'
//       >
//         <ArrowLeft size={20} />
//       </button>
//       <button
//         onClick={nextSlide}
//         className='absolute top-1/2 right-6 transform -translate-y-1/2 bg-white z-20 shadow-md p-2 rounded-full hover:bg-orange-100'
//       >
//         <ArrowRight size={20} />
//       </button>

//       {/* Dots */}
//       <div className='flex justify-center mt-6 gap-2 relative z-20'>
//         {slides.map((_, idx) => (
//           <div
//             key={idx}
//             className={`w-3 h-3 rounded-full cursor-pointer ${idx === current ? 'bg-orange-500' : 'bg-gray-300'}`}
//             onClick={() => setCurrent(idx)}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Banner;










import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const slides = [
  {
    title: 'Expert Pediatric Care',
    desc: 'Top pediatricians for your child’s health. Certified child specialists for newborns to teens. Book this week to avail exciting discounts!',
    oldPrice: '₹699',
    newPrice: '₹499',
    images: [
      'https://images.unsplash.com/photo-1588776814466-ec7ee0fc0047',
      'https://images.unsplash.com/photo-1607746882078-2e453ab3d0c6',
      'https://images.unsplash.com/photo-1607568125223-1831d3c798a5',
    ],
  },
  {
    title: 'Comprehensive Neurologist Support',
    desc: 'Specialized neurological care including epilepsy, migraines, and stroke recovery. Book today, limited slots available!',
    oldPrice: '₹2599',
    newPrice: '₹1299',
    images: [
      'https://images.unsplash.com/photo-1614695799931-896b63ffdf0b',
      'https://images.unsplash.com/photo-1588776814323-7adbd85fca58',
      'https://images.unsplash.com/photo-1580281657527-47b829207d1d',
    ],
  },
  {
    title: 'Trusted Gynecologist Care',
    desc: 'Fertility, pregnancy, and overall women’s health care by experienced gynecologists. Limited time discount!',
    oldPrice: '₹1899',
    newPrice: '₹899',
    images: [
      'https://images.unsplash.com/photo-1607746882042-944635dfe10e',
      'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7',
      'https://images.unsplash.com/photo-1629904853893-efb4b1b20443',
    ],
  },
  {
    title: 'Your Health, Our Priority',
    desc: 'Book general physicians, dermatologists, and more with ease. Care made convenient and affordable.',
    oldPrice: '₹999',
    newPrice: '₹699',
    images: [
      'https://images.unsplash.com/photo-1617606002771-5f75b2b9a8f4',
      'https://images.unsplash.com/photo-1550831107-1553da8c8464',
      'https://images.unsplash.com/photo-1579154204601-01588f351e56',
    ],
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((current + 1) % slides.length);

  return (
    <div className='relative w-full overflow-hidden my-20 px-4 sm:px-6 md:px-10'>
      <div
        className='flex transition-transform duration-700 ease-in-out'
        style={{
          transform: `translateX(-${current * 100}%)`,
          width: `${slides.length * 100}%`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className='min-w-full flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-orange-100 via-white to-orange-50 rounded-3xl shadow-lg p-6 sm:p-10 gap-6'
          >
            {/* Text Section */}
            <div className='flex-1 text-left'>
              <h2 className='text-3xl sm:text-4xl font-bold text-orange-500'>{slide.title}</h2>
              <p className='mt-4 text-gray-700 leading-relaxed'>{slide.desc}</p>
              <ul className='mt-3 text-gray-600 list-disc pl-5 text-sm'>
                <li>Top-rated specialists</li>
                <li>Instant booking available</li>
                <li>Verified & affordable</li>
              </ul>
              <div className='mt-4 text-lg'>
                <span className='line-through text-gray-500 mr-2'>{slide.oldPrice}</span>
                <span className='font-semibold text-black'>{slide.newPrice}</span>
              </div>
              <button
                onClick={() => {
                  navigate('/login');
                  scrollTo(0, 0);
                }}
                className='mt-6 bg-orange-500 text-white px-6 py-2 rounded-full hover:scale-105 transition-transform'
              >
                Book Now
              </button>
            </div>

            {/* Image Gallery */}
            <div className='flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4'>
              {slide.images.map((imgSrc, i) => (
                <div key={i} className='rounded-xl overflow-hidden shadow-md'>
                  <img src={imgSrc} alt='slide visual' className='w-full h-40 object-cover' />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className='absolute top-1/2 left-6 transform -translate-y-1/2 bg-white z-20 shadow-md p-2 rounded-full hover:bg-orange-100'
      >
        <ArrowLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className='absolute top-1/2 right-6 transform -translate-y-1/2 bg-white z-20 shadow-md p-2 rounded-full hover:bg-orange-100'
      >
        <ArrowRight size={20} />
      </button>

      {/* Dots */}
      <div className='flex justify-center mt-6 gap-2 relative z-20'>
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full cursor-pointer ${idx === current ? 'bg-orange-500' : 'bg-gray-300'}`}
            onClick={() => setCurrent(idx)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Banner;

