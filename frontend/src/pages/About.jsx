// import React from 'react'
// import { assets } from '../assets/assets'

// const About = () => {
//   return (
//     <div>
//       <div className='text-center text-2xl pt-10 text-gray-500'>
//         <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
//       </div>

//       <div className='my-10 flex flex-col md:flex-row gap-12'>
//         <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
//         <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
//           <p>Welcome to Care and Cure Medical Center, your trusted partner in managing your healthcare needs conveniently and efficiently. Here, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>

//           <p>Care and Cure Medical Center is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>

//           <b className='text-gray-800'>Our Vision</b>
//           <p>
//           Our vision at Care and Cure Medical Center is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
//         </div>
//       </div>

//       <div className='text-xl my-4'>
//         <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
//       </div>

//       <div className='flex flex-col md:flex-row mb-20'> 
//         <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
//           <b>Efficiency:</b>
//           <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
//         </div>

//         <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
//           <b>Convenience:</b>
//           <p>Access to a network of trusted healthcare professionals in your area.</p>
//         </div>

//         <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
//           <b>Personalization:</b>
//           <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default About








import React, { useRef } from 'react';
import { assets } from '../assets/assets';
import baba from '../assets/reviews/baba.jpeg';
import maa from '../assets/reviews/maa.jpeg';
import soma from '../assets/reviews/soma.jpeg';
import bimal from '../assets/reviews/bimal.jpeg';

const About = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const container = carouselRef.current;
    if (direction === 'left') {
      container.scrollBy({ left: -400, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* ABOUT US SECTION */}
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to Care and Cure Medical Center, your trusted partner in managing your healthcare needs conveniently and efficiently.Here, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
          <p>Care and Cure Medical Center is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Care and Cure Medical Center is here to support you every step of the way.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision at Care and Cure Medical Center is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
      </div>

      {/* WHY CHOOSE US SECTION */}
      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'> 
        {["Efficiency", "Convenience", "Personalization"].map((title, idx) => (
          <div key={idx} className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <b>{title}:</b>
            <p>{
              idx === 0
              ? "Streamlined appointment scheduling that fits into your busy lifestyle."
              : idx === 1
              ? "Access to a network of trusted healthcare professionals in your area."
              : "Tailored recommendations and reminders to help you stay on top of your health."
            }</p>
          </div>
        ))}
      </div>

      {/* REVIEWS SECTION */}
      <div className='text-center text-3xl font-bold text-gray-800 mb-4'>
        What people say <span className='text-primary'>about us</span>
      </div>
      <p className='text-center text-gray-500 mb-10'>These are concise and effective. They capture a customer’s experience in their own words.</p>

      <div className='relative'>
        {/* Scroll buttons */}
        <button
          onClick={() => scroll('left')}
          className='absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-primary hover:text-white transition'
        >‹</button>

        <div
          ref={carouselRef}
          className='flex overflow-x-auto gap-6 px-4 pb-6 scroll-smooth no-scrollbar'
        >
          {[
            {
              name: "Kalosona Mondal", city: "Kolkata", img: baba,
              review: "Dr. Roy, our pediatrician, is amazing with kids. She made my daughter feel so comfortable and explained everything patiently. Truly a blessing for parents. Care & Cure Medical Center provides a warm and family-friendly atmosphere."
            },
            {
              name: "Kabita Mondal", city: "South 24 Pgs.", img: maa,
              review: "I consulted the gynecologist here for regular checkups and found the experience very professional and reassuring. The doctor was attentive and extremely kind. The center itself is clean, well-organized, and welcoming."
            },
            {
              name: "Soma Biswas", city: "Garia", img: soma,
              review: "The general physician was quick to diagnose and start treatment for my recurring fever. I appreciated the clarity in communication. Care & Cure's online appointment system is super smooth and efficient."
            },
            {
              name: "Bimal Tripathi", city: "Baruipur", img: bimal,
              review: "Visited the dermatologist for my skin allergies. The treatment worked like magic! The doctor was knowledgeable and very approachable. Care & Cure has truly modern facilities and helpful staff."
            },
            {
              name: "Ananya Paul", city: "Shyambazar", img: "https://randomuser.me/api/portraits/women/15.jpg",
              review: "The neurologist took great care in understanding my migraine issues. I finally feel relieved after months of discomfort. Grateful to Care & Cure Medical Center for their expert care."
            },
            {
              name: "Soumya Ghosh", city: "New Town", img: "https://randomuser.me/api/portraits/men/13.jpg",
              review: "I was suffering from digestive issues and consulted their gastroenterologist. The diagnosis and treatment plan were spot on. Thank you Care & Cure for your prompt and compassionate service!"
            },
            {
              name: "Koyel Das", city: "Ballygunge", img: "https://randomuser.me/api/portraits/women/14.jpg",
              review: "Excellent general care by the physician. The whole process from appointment to consultation was smooth. Care & Cure is setting new standards in healthcare service quality."
            },
            {
              name: "Ritwik Sen", city: "Howrah", img: "https://randomuser.me/api/portraits/men/14.jpg",
              review: "I visited their dermatology wing and was impressed by the modern treatments. The doctor was friendly and took time to explain everything. Care & Cure Medical Center has become my go-to healthcare hub!"
            }
          ].map((item, idx) => (
            <div key={idx} className='min-w-[300px] max-w-[300px] bg-white border border-green-400 rounded-xl p-5 shadow hover:shadow-md'>
              <div className='flex items-center gap-3 mb-3'>
                <img src={item.img} alt={item.name} className='w-12 h-12 rounded-full object-cover'/>
                <div>
                  <p className='font-bold'>{item.name}</p>
                  <p className='text-sm text-gray-500'>{item.city}</p>
                </div>
              </div>
              <p className='text-gray-700 text-sm'>{item.review}</p>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className='absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-primary hover:text-white transition'
        >›</button>
      </div>
    </div>
  );
};

export default About;

