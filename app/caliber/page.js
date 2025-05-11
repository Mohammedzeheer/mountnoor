import React from 'react'
import Navbar from '@/components/Navbar'
import CaliberHeroSection from '@/components/Caliber/CaliberHeroSection';

export const metadata = {
  title: 'Caliber School - Academic Results',
  description: 'View the outstanding academic achievements and exam results of Caliber School students',
}

const CaliberPage = () => {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="pt-[70px] md:pt-[80px] w-full font-rubik">
        <CaliberHeroSection />
      </section>

      {/* Results Section */}
      <section className="p-6 px-6 md:px-16 lg:px-24 py-16 w-full font-rubik bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-12 text-center" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-3">Academic Excellence</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At Caliber School, we take pride in our students&#39; remarkable achievements.
              Our comprehensive approach to education reflects in these outstanding results.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default CaliberPage;


// import React from 'react'
// import Navbar from '@/components/Navbar'
// import { FaWhatsapp, FaTrophy, FaChartLine } from "react-icons/fa6";
// import { watsappGroupUrls } from '@/constants/whatsappUrl'
// import Result from '@/components/Result';
// import CaliberHeroSection from '@/components/Caliber/CaliberHeroSection';

// export const metadata = {
//   title: 'Caliber School - Academic Results',
//   description: 'View the outstanding academic achievements and exam results of Caliber School students',
// }

// const ResultsPage = () => {
//   return (
//     <>
//       <Navbar />
      
//       {/* Hero Section */}
//       <section className="pt-[70px] md:pt-[80px] w-full font-rubik">
//         <CaliberHeroSection />
//       </section>
      
//       {/* Results Section */}
//       <section className="p-6 px-6 md:px-16 lg:px-24 py-16 w-full font-rubik bg-white">
//         <div className="max-w-7xl mx-auto">
//           {/* Section Header */}
//           <div className="mb-12 text-center" data-aos="fade-up" data-aos-duration="1000">
//             <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-3">Academic Excellence</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               At Caliber School, we take pride in our students' remarkable achievements. 
//               Our comprehensive approach to education reflects in these outstanding results.
//             </p>
//           </div>
          
//           {/* Results Display */}
//           <div className="mb-16">
//             <div className="w-full rounded-xl overflow-hidden shadow-lg" data-aos="fade-up" data-aos-duration="1200">
//               <div className="bg-green-700 text-white py-5 px-6 flex items-center justify-between">
//                 <h3 className="text-2xl font-bold flex items-center">
//                   <FaTrophy className="mr-3" /> Academic Results
//                 </h3>
//                 <div className="bg-green-600 px-4 py-1 rounded-full text-sm">
//                   2024-2025
//                 </div>
//               </div>
              
//               <div className="bg-white py-6 px-4">
//                 <Result />
//               </div>
//             </div>
//           </div>
          
//           {/* Statistics */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16" data-aos="fade-up" data-aos-duration="1400" data-aos-delay="100">
//             <div className="bg-green-50 p-6 rounded-xl shadow-md text-center">
//               <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <FaChartLine className="text-green-700 text-2xl" />
//               </div>
//               <h4 className="text-xl font-semibold text-green-800 mb-2">95%</h4>
//               <p className="text-gray-600">Students Achieving A+ Grades</p>
//             </div>
            
//             <div className="bg-green-50 p-6 rounded-xl shadow-md text-center">
//               <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <FaChartLine className="text-green-700 text-2xl" />
//               </div>
//               <h4 className="text-xl font-semibold text-green-800 mb-2">100%</h4>
//               <p className="text-gray-600">Pass Rate in All Subjects</p>
//             </div>
            
//             <div className="bg-green-50 p-6 rounded-xl shadow-md text-center">
//               <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <FaChartLine className="text-green-700 text-2xl" />
//               </div>
//               <h4 className="text-xl font-semibold text-green-800 mb-2">85%</h4>
//               <p className="text-gray-600">Higher Education Placement Rate</p>
//             </div>
//           </div>
          
//           {/* WhatsApp Link */}
//           <div className="mt-8" data-aos="fade-up" data-aos-duration="1000">
//             <a
//               href={watsappGroupUrls}
//               className="bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 shadow-xl rounded-xl text-white w-full p-5 text-lg font-semibold flex items-center justify-center gap-3 transition duration-300"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaWhatsapp size={28} />
//               <span>Join Our Community for Latest Updates</span>
//             </a>
//           </div>
          
//         </div>
//       </section>
      
//       {/* Testimonial Section */}
//       <section className="bg-green-50 p-6 px-6 md:px-16 lg:px-24 py-16">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-10" data-aos="fade-up" data-aos-duration="1000">
//             <h2 className="text-3xl font-bold text-green-800 mb-3">What Parents Say</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Discover what our school community has to say about the Caliber School experience
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-up" data-aos-duration="1200">
//             <div className="bg-white p-6 rounded-xl shadow-md">
//               <p className="text-gray-600 italic mb-4">
//                 "The comprehensive approach to education at Caliber School has transformed my child's learning experience. The balance of academic excellence with moral values is exactly what we were looking for."
//               </p>
//               <div className="flex items-center">
//                 <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
//                   <span className="text-green-800 font-bold">PR</span>
//                 </div>
//                 <div className="ml-3">
//                   <h4 className="font-semibold">Parent Name</h4>
//                   <p className="text-sm text-gray-500">Parent of Grade 8 Student</p>
//                 </div>
//               </div>
//             </div>
            
//             <div className="bg-white p-6 rounded-xl shadow-md">
//               <p className="text-gray-600 italic mb-4">
//                 "What stands out about Caliber School is how they nurture both academic skills and character development. My children have thrived in this environment that emphasizes both excellence and values."
//               </p>
//               <div className="flex items-center">
//                 <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
//                   <span className="text-green-800 font-bold">AS</span>
//                 </div>
//                 <div className="ml-3">
//                   <h4 className="font-semibold">Parent Name</h4>
//                   <p className="text-sm text-gray-500">Parent of Grade 5 Student</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default ResultsPage;