import Image from 'next/image';
import schoolImage from '@/public/assets/CaliberText.png'; // Replace with your school image
import { FaGraduationCap } from "react-icons/fa";
import Link from 'next/link';

const CaliberHeroSection = () => {
  return (
    <div className="w-full font-rubik bg-gradient-to-b from-green-50 to-white">
      <div className="flex flex-col-reverse md:flex-row items-center p-6 px-6 md:px-16 lg:px-24 py-12 md:py-20 max-w-7xl mx-auto">
        <div className="md:w-3/5 mt-8 md:mt-0 md:pr-8" data-aos="fade-right" data-aos-duration="1500">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Nurturing Minds, Shaping Futures</h1>
          <h2 className="text-xl md:text-2xl font-semibold text-green-600 mb-6">Welcome to Caliber School</h2>
          
          <div className="space-y-4 text-gray-700">
            <p className="leading-relaxed">
              The learning environment at Caliber School will surely keep the child engaged with 
              <span className="text-green-700 font-medium"> Spirituality, Creativity, Social Commitment, Responsibility, Discipline and Love of Mankind</span>.
            </p>
            
            <p className="leading-relaxed">
              Our comprehensive moral education program follows modern educational strategies in practicing moral values to its core.
            </p>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/about">
              <button className="px-6 py-3 bg-green-600 text-white rounded-lg flex items-center justify-center space-x-2 hover:bg-green-700 transition duration-300 shadow-md">
                <span>Explore Our Programs</span>
                <FaGraduationCap className="ml-2" />
              </button>
            </Link>
            
            <Link href="/admission">
              <button className="px-6 py-3 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition duration-300">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
        
        <div className="md:w-2/5" data-aos="fade-left" data-aos-duration="1500">
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <Image
              src={schoolImage}
              alt="Caliber School Education"
              width={600}
              height={450}
              className="object-cover w-full h-full transform hover:scale-105 transition duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent"></div>
          </div>
          
          <div className="grid grid-cols-3 gap-3 mt-3">
            <div className="bg-green-600 p-3 rounded-lg text-center text-white">
              <p className="text-lg font-bold">Excellence</p>
            </div>
            <div className="bg-green-700 p-3 rounded-lg text-center text-white">
              <p className="text-lg font-bold">Values</p>
            </div>
            <div className="bg-green-800 p-3 rounded-lg text-center text-white">
              <p className="text-lg font-bold">Growth</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-green-800 py-4">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white text-center">
            <div className="flex flex-col items-center">
              <span className="font-semibold">Modern Education</span>
              <span className="text-sm text-green-200">Innovative Learning Methods</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-semibold">Moral Development</span>
              <span className="text-sm text-green-200">Character Building</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-semibold">Holistic Growth</span>
              <span className="text-sm text-green-200">Mind, Body & Spirit</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaliberHeroSection;



// import Image from 'next/image';
// import schoolImage from '@/public/assets/CaliberText.png'; // Replace with your school image
// import { FaGraduationCap } from "react-icons/fa";
// import Link from 'next/link';

// const CaliberHeroSection = () => {
//   return (
//     <div className="w-full font-rubik bg-gradient-to-b from-blue-50 to-white">
//       <div className="flex flex-col-reverse md:flex-row items-center p-6 px-6 md:px-16 lg:px-24 py-12 md:py-20 max-w-7xl mx-auto">
//         <div className="md:w-3/5 mt-8 md:mt-0 md:pr-8" data-aos="fade-right" data-aos-duration="1500">
//           <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Nurturing Minds, Shaping Futures</h1>
//           <h2 className="text-xl md:text-2xl font-semibold text-blue-600 mb-6">Welcome to Caliber School</h2>
          
//           <div className="space-y-4 text-gray-700">
//             <p className="leading-relaxed">
//               The learning environment at Caliber School will surely keep the child engaged with 
//               <span className="text-blue-700 font-medium"> Spirituality, Creativity, Social Commitment, Responsibility, Discipline and Love of Mankind</span>.
//             </p>
            
//             <p className="leading-relaxed">
//               Our comprehensive moral education program follows modern educational strategies in practicing moral values to its core.
//             </p>
//           </div>
          
//           <div className="mt-8 flex flex-col sm:flex-row gap-4">
//             <Link href="/about">
//               <button className="px-6 py-3 bg-blue-600 text-white rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700 transition duration-300 shadow-md">
//                 <span>Explore Our Programs</span>
//                 <FaGraduationCap className="ml-2" />
//               </button>
//             </Link>
            
//             <Link href="/admissions">
//               <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition duration-300">
//                 Apply Now
//               </button>
//             </Link>
//           </div>
//         </div>
        
//         <div className="md:w-2/5" data-aos="fade-left" data-aos-duration="1500">
//           <div className="relative overflow-hidden rounded-2xl shadow-xl">
//             <Image
//               src={schoolImage}
//               alt="Caliber School Education"
//               width={600}
//               height={450}
//               className="object-cover w-full h-full transform hover:scale-105 transition duration-700"
//               priority
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
//           </div>
          
//           <div className="grid grid-cols-3 gap-3 mt-3">
//             <div className="bg-blue-600 p-3 rounded-lg text-center text-white">
//               <p className="text-lg font-bold">Excellence</p>
//             </div>
//             <div className="bg-blue-700 p-3 rounded-lg text-center text-white">
//               <p className="text-lg font-bold">Values</p>
//             </div>
//             <div className="bg-blue-800 p-3 rounded-lg text-center text-white">
//               <p className="text-lg font-bold">Growth</p>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       <div className="bg-blue-800 py-4">
//         <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white text-center">
//             <div className="flex flex-col items-center">
//               <span className="font-semibold">Modern Education</span>
//               <span className="text-sm text-blue-200">Innovative Learning Methods</span>
//             </div>
//             <div className="flex flex-col items-center">
//               <span className="font-semibold">Moral Development</span>
//               <span className="text-sm text-blue-200">Character Building</span>
//             </div>
//             <div className="flex flex-col items-center">
//               <span className="font-semibold">Holistic Growth</span>
//               <span className="text-sm text-blue-200">Mind, Body & Spirit</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CaliberHeroSection;