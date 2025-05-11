'use client'

import React, { useState } from 'react';
import { FaUser, FaCalendarAlt, FaPhone, FaEnvelope, FaHome } from 'react-icons/fa';
import Navbar from '@/components/Navbar';

const AdmissionForm = () => {
  const [formStep, setFormStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [applicationRef, setApplicationRef] = useState(null);
  
  const [formData, setFormData] = useState({
    studentName: '',
    dob: '',
    gender: '',
    address: '',
    parentName: '',
    parentOccupation: '',
    phone: '',
    email: '',
    agreeToTerms: false,
  });
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };
  
  const nextStep = () => {
    setFormStep(formStep + 1);
    window.scrollTo(0, 0);
  };
  
  const prevStep = () => {
    setFormStep(formStep - 1);
    window.scrollTo(0, 0);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic form validation for required fields
    if (!formData.studentName || !formData.dob || !formData.gender || !formData.address || 
        !formData.parentName || !formData.phone || !formData.agreeToTerms) {
      setError('Please fill in all required fields');
      return;
    }
    
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch('/api/admission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Error submitting application');
      }
      
      // Store application reference for confirmation page
      setApplicationRef(data.applicationReference);
      
      // Move to confirmation step
      nextStep();
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setError(error.message || 'Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-blue-50 to-white pt-[70px] md:pt-[80px] min-h-screen">
        <div className="max-w-4xl mx-auto p-6 md:p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <div className="relative h-16 w-full max-w-md">
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="text-5xl font-bold tracking-wide">
                    <span className="text-green-500">C</span>
                    <span className="text-pink-500">A</span>
                    <span className="text-orange-500">L</span>
                    <span className="text-blue-500">i</span>
                    <span className="text-purple-500">B</span>
                    <span className="text-yellow-500">E</span>
                    <span className="text-green-500">R</span>
                  </h1>
                </div>
              </div>
            </div>
            <h2 className="text-gray-600 text-lg">Kids School For Better Tomorrow</h2>
            <div className="bg-green-500 text-white inline-block px-4 py-1 mt-2 rounded-md">
              2025-26 ലേക്കുള്ള
            </div>
            <h1 className="text-4xl font-bold mt-2 bg-gradient-to-r from-purple-600 to-teal-500 text-transparent bg-clip-text">
              അഡ്മിഷൻ ആരംഭിച്ചു
            </h1>
          </div>
          
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <span className={`font-medium ${formStep >= 1 ? 'text-green-500' : 'text-gray-400'}`}>Student Details</span>
              <span className={`font-medium ${formStep >= 2 ? 'text-green-500' : 'text-gray-400'}`}>Family & Contact</span>
              <span className={`font-medium ${formStep === 3 ? 'text-green-500' : 'text-gray-400'}`}>Confirmation</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 to-green-500 rounded-full transition-all duration-300"
                style={{ width: `${(formStep / 3) * 100}%` }}
              ></div>
            </div>
          </div>
          
          {/* Error Display */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
              {error}
            </div>
          )}
          
          {/* Form Container */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            {formStep === 1 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-purple-700 mb-6">Student Details</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 flex items-center">
                      <FaUser className="mr-2 text-green-500" /> Student Name
                    </label>
                    <input
                      type="text"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Enter full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 flex items-center">
                      <FaCalendarAlt className="mr-2 text-green-500" /> Date of Birth
                    </label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Gender</label>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                        checked={formData.gender === 'male'}
                        onChange={handleChange}
                        className="h-4 w-4 text-green-500 focus:ring-green-500 mr-2"
                      />
                      <label htmlFor="male" className="text-gray-700">Male</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                        checked={formData.gender === 'female'}
                        onChange={handleChange}
                        className="h-4 w-4 text-green-500 focus:ring-green-500 mr-2"
                      />
                      <label htmlFor="female" className="text-gray-700">Female</label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2 flex items-center">
                    <FaHome className="mr-2 text-green-500" /> Address
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    rows="3"
                    placeholder="Enter complete address"
                    required
                  ></textarea>
                </div>
                
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-6 py-2 bg-gradient-to-r from-purple-600 to-green-500 text-white rounded-lg hover:opacity-90 transition"
                  >
                    Next Step
                  </button>
                </div>
              </div>
            )}
            
            {formStep === 2 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-purple-700 mb-6">Family & Contact Information</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Parent/Guardian Name
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Enter parent/guardian name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Occupation</label>
                    <input
                      type="text"
                      name="parentOccupation"
                      value={formData.parentOccupation}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Enter occupation"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 flex items-center">
                      <FaPhone className="mr-2 text-green-500" /> Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Enter mobile number"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 flex items-center">
                      <FaEnvelope className="mr-2 text-green-500" /> Email (Optional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Enter email address"
                    />
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="agreeToTerms"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                      className="h-5 w-5 text-green-500 focus:ring-green-500 mt-1 mr-2"
                      required
                    />
                    <label htmlFor="agreeToTerms" className="text-gray-700">
                      I confirm that all the information provided is accurate and complete. I understand that providing false information may result in the cancellation of admission.
                    </label>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="px-8 py-3 bg-gradient-to-r from-purple-600 to-green-500 text-white rounded-lg hover:opacity-90 transition font-medium disabled:opacity-50"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                </div>
              </div>
            )}
            
            {formStep === 3 && (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                  <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Application Submitted Successfully!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for applying to Caliber School. We have received your application and will contact you shortly.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg text-left mb-6">
                  <h4 className="font-semibold text-blue-800 mb-2">Next Steps:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Check your phone for confirmation SMS</li>
                    <li>Prepare necessary documents for verification</li>
                    <li>Wait for the interview call from our admissions team</li>
                  </ul>
                </div>
                <div className="flex justify-center">
                  <div className="px-6 py-3 bg-gradient-to-r from-purple-600 to-green-500 text-white rounded-lg font-medium">
                    Application Reference: {applicationRef || 'CAL-' + Math.floor(100000 + Math.random() * 900000)}
                  </div>
                </div>
                <p className="mt-6 text-gray-500">
                  For any queries, please contact: +91 80753 05604
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdmissionForm;



// 'use client';
// import React, { useState } from 'react';
// import Image from 'next/image';
// import { FaUser, FaCalendarAlt, FaPhone, FaEnvelope, FaHome, FaBook, FaUsers } from 'react-icons/fa';
// import Navbar from '@/components/Navbar';

// const AdmissionForm = () => {
//   const [formStep, setFormStep] = useState(1);
//   const [formData, setFormData] = useState({
//     studentName: '',
//     dob: '',
//     gender: '',
//     religion: '',
//     category: '',
//     address: '',
//     parentName: '',
//     parentOccupation: '',
//     phone: '',
//     email: '',
//     previousSchool: '',
//     applyingForClass: '',
//     medium: '',
//     agreeToTerms: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   const nextStep = () => {
//     setFormStep(formStep + 1);
//     window.scrollTo(0, 0);
//   };

//   const prevStep = () => {
//     setFormStep(formStep - 1);
//     window.scrollTo(0, 0);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log('Form submitted:', formData);
//     // Show confirmation step
//     nextStep();
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="bg-gradient-to-b from-blue-50 to-white pt-[70px] md:pt-[80px] min-h-screen">
//         <div className="max-w-4xl mx-auto p-6 md:p-8">
//           {/* Header */}
//           <div className="text-center mb-8">
//             <div className="flex justify-center mb-6">
//               <div className="relative h-16 w-full max-w-md">
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <h1 className="text-5xl font-bold tracking-wide">
//                     <span className="text-green-500">C</span>
//                     <span className="text-pink-500">A</span>
//                     <span className="text-orange-500">L</span>
//                     <span className="text-blue-500">i</span>
//                     <span className="text-purple-500">B</span>
//                     <span className="text-yellow-500">E</span>
//                     <span className="text-green-500">R</span>
//                   </h1>
//                 </div>
//               </div>
//             </div>
//             <h2 className="text-gray-600 text-lg">Kids School For Better Tomorrow</h2>
//             <div className="bg-green-500 text-white inline-block px-4 py-1 mt-2 rounded-md">
//               2025-26 ലേക്കുള്ള
//             </div>
//             <h1 className="text-4xl font-bold mt-2 bg-gradient-to-r from-purple-600 to-teal-500 text-transparent bg-clip-text">
//               അഡ്മിഷൻ ആരംഭിച്ചു
//             </h1>
//           </div>

//           {/* Progress Bar */}
//           <div className="mb-8">
//             <div className="flex justify-between mb-2">
//               <span className={`font-medium ${formStep >= 1 ? 'text-green-500' : 'text-gray-400'}`}>Student Details</span>
//               <span className={`font-medium ${formStep >= 2 ? 'text-green-500' : 'text-gray-400'}`}>Family & Contact</span>
//               <span className={`font-medium ${formStep >= 3 ? 'text-green-500' : 'text-gray-400'}`}>Academic Information</span>
//             </div>
//             <div className="h-2 bg-gray-200 rounded-full">
//               <div
//                 className="h-full bg-gradient-to-r from-purple-500 to-green-500 rounded-full transition-all duration-300"
//                 style={{ width: `${(formStep / 4) * 100}%` }}
//               ></div>
//             </div>
//           </div>

//           {/* Form Container */}
//           <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
//             {formStep === 1 && (
//               <div className="space-y-6">
//                 <h3 className="text-2xl font-semibold text-purple-700 mb-6">Student Details</h3>

//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-gray-700 font-medium mb-2 flex items-center">
//                       <FaUser className="mr-2 text-green-500" /> Student Name
//                     </label>
//                     <input
//                       type="text"
//                       name="studentName"
//                       value={formData.studentName}
//                       onChange={handleChange}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
//                       placeholder="Enter full name"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-gray-700 font-medium mb-2 flex items-center">
//                       <FaCalendarAlt className="mr-2 text-green-500" /> Date of Birth
//                     </label>
//                     <input
//                       type="date"
//                       name="dob"
//                       value={formData.dob}
//                       onChange={handleChange}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-gray-700 font-medium mb-2">Gender</label>
//                     <div className="space-y-2">
//                       <div className="flex items-center">
//                         <input
//                           type="radio"
//                           id="male"
//                           name="gender"
//                           value="male"
//                           checked={formData.gender === 'male'}
//                           onChange={handleChange}
//                           className="h-4 w-4 text-green-500 focus:ring-green-500 mr-2"
//                         />
//                         <label htmlFor="male" className="text-gray-700">Male</label>
//                       </div>
//                       <div className="flex items-center">
//                         <input
//                           type="radio"
//                           id="female"
//                           name="gender"
//                           value="female"
//                           checked={formData.gender === 'female'}
//                           onChange={handleChange}
//                           className="h-4 w-4 text-green-500 focus:ring-green-500 mr-2"
//                         />
//                         <label htmlFor="female" className="text-gray-700">Female</label>
//                       </div>
//                     </div>
//                   </div>

//                   {/* <div>
//                     <label className="block text-gray-700 font-medium mb-2">Religion</label>
//                     <select
//                       name="religion"
//                       value={formData.religion}
//                       onChange={handleChange}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
//                     >
//                       <option value="">Select Religion</option>
//                       <option value="islam">Islam</option>
//                       <option value="hinduism">Hinduism</option>
//                       <option value="christianity">Christianity</option>
//                       <option value="other">Other</option>
//                     </select>
//                   </div> */}
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 font-medium mb-2 flex items-center">
//                     <FaHome className="mr-2 text-green-500" /> Address
//                   </label>
//                   <textarea
//                     name="address"
//                     value={formData.address}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
//                     rows="3"
//                     placeholder="Enter complete address"
//                     required
//                   ></textarea>
//                 </div>

//                 <div className="flex justify-end">
//                   <button
//                     type="button"
//                     onClick={nextStep}
//                     className="px-6 py-2 bg-gradient-to-r from-purple-600 to-green-500 text-white rounded-lg hover:opacity-90 transition"
//                   >
//                     Next Step
//                   </button>
//                 </div>
//               </div>
//             )}

//             {formStep === 2 && (
//               <div className="space-y-6">
//                 <h3 className="text-2xl font-semibold text-purple-700 mb-6">Family & Contact Information</h3>

//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-gray-700 font-medium mb-2 flex items-center">
//                       <FaUsers className="mr-2 text-green-500" /> Parent/Guardian Name
//                     </label>
//                     <input
//                       type="text"
//                       name="parentName"
//                       value={formData.parentName}
//                       onChange={handleChange}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
//                       placeholder="Enter parent/guardian name"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-gray-700 font-medium mb-2">Occupation</label>
//                     <input
//                       type="text"
//                       name="parentOccupation"
//                       value={formData.parentOccupation}
//                       onChange={handleChange}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
//                       placeholder="Enter occupation"
//                     />
//                   </div>
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-gray-700 font-medium mb-2 flex items-center">
//                       <FaPhone className="mr-2 text-green-500" /> Phone Number
//                     </label>
//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
//                       placeholder="Enter mobile number"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-gray-700 font-medium mb-2 flex items-center">
//                       <FaEnvelope className="mr-2 text-green-500" /> Email (Optional)
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
//                       placeholder="Enter email address"
//                     />
//                   </div>
//                 </div>

//                 {/* <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-gray-700 font-medium mb-2">Category</label>
//                     <select
//                       name="category"
//                       value={formData.category}
//                       onChange={handleChange}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
//                     >
//                       <option value="">Select Category</option>
//                       <option value="general">General</option>
//                       <option value="obc">OBC</option>
//                       <option value="sc">SC</option>
//                       <option value="st">ST</option>
//                       <option value="other">Other</option>
//                     </select>
//                   </div>
//                 </div> */}

//                 <div className="flex justify-between">
//                   <button
//                     type="button"
//                     onClick={prevStep}
//                     className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
//                   >
//                     Previous
//                   </button>
//                   <button
//                     type="button"
//                     onClick={nextStep}
//                     className="px-6 py-2 bg-gradient-to-r from-purple-600 to-green-500 text-white rounded-lg hover:opacity-90 transition"
//                   >
//                     Next Step
//                   </button>
//                 </div>
//               </div>
//             )}

//             {formStep === 3 && (
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <h3 className="text-2xl font-semibold text-purple-700 mb-6">Academic Information</h3>

//                 {/* <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-gray-700 font-medium mb-2 flex items-center">
//                       <FaBook className="mr-2 text-green-500" /> Previous School (if any)
//                     </label>
//                     <input
//                       type="text"
//                       name="previousSchool"
//                       value={formData.previousSchool}
//                       onChange={handleChange}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
//                       placeholder="Enter previous school name"
//                     />
//                   </div>
                  
//                   <div>
//                     <label className="block text-gray-700 font-medium mb-2">Applying for Class</label>
//                     <select
//                       name="applyingForClass"
//                       value={formData.applyingForClass}
//                       onChange={handleChange}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
//                       required
//                     >
//                       <option value="">Select Class</option>
//                       <option value="LKG">LKG</option>
//                       <option value="UKG">UKG</option>
//                       <option value="1">Class 1</option>
//                       <option value="2">Class 2</option>
//                       <option value="3">Class 3</option>
//                       <option value="4">Class 4</option>
//                       <option value="5">Class 5</option>
//                     </select>
//                   </div>
//                 </div> */}

//                 {/* <div>
//                   <label className="block text-gray-700 font-medium mb-2">Medium of Instruction</label>
//                   <div className="space-y-2">
//                     <div className="flex items-center">
//                       <input
//                         type="radio"
//                         id="english"
//                         name="medium"
//                         value="english"
//                         checked={formData.medium === 'english'}
//                         onChange={handleChange}
//                         className="h-4 w-4 text-green-500 focus:ring-green-500 mr-2"
//                       />
//                       <label htmlFor="english" className="text-gray-700">English</label>
//                     </div>
//                     <div className="flex items-center">
//                       <input
//                         type="radio"
//                         id="malayalam"
//                         name="medium"
//                         value="malayalam"
//                         checked={formData.medium === 'malayalam'}
//                         onChange={handleChange}
//                         className="h-4 w-4 text-green-500 focus:ring-green-500 mr-2"
//                       />
//                       <label htmlFor="malayalam" className="text-gray-700">Malayalam</label>
//                     </div>
//                   </div>
//                 </div> */}

//                 <div className="bg-blue-50 p-4 rounded-lg">
//                   <div className="flex items-start">
//                     <input
//                       type="checkbox"
//                       id="agreeToTerms"
//                       name="agreeToTerms"
//                       checked={formData.agreeToTerms}
//                       onChange={handleChange}
//                       className="h-5 w-5 text-green-500 focus:ring-green-500 mt-1 mr-2"
//                       required
//                     />
//                     <label htmlFor="agreeToTerms" className="text-gray-700">
//                       I confirm that all the information provided is accurate and complete. I understand that providing false information may result in the cancellation of admission.
//                     </label>
//                   </div>
//                 </div>

//                 <div className="flex justify-between">
//                   <button
//                     type="button"
//                     onClick={prevStep}
//                     className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
//                   >
//                     Previous
//                   </button>
//                   <button
//                     type="submit"
//                     className="px-8 py-3 bg-gradient-to-r from-purple-600 to-green-500 text-white rounded-lg hover:opacity-90 transition font-medium"
//                   >
//                     Submit Application
//                   </button>
//                 </div>
//               </form>
//             )}

//             {formStep === 4 && (
//               <div className="text-center py-8">
//                 <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
//                   <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                   </svg>
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-800 mb-2">Application Submitted Successfully!</h3>
//                 <p className="text-gray-600 mb-6">
//                   Thank you for applying to Caliber School. We have received your application and will contact you shortly.
//                 </p>
//                 <div className="bg-blue-50 p-4 rounded-lg text-left mb-6">
//                   <h4 className="font-semibold text-blue-800 mb-2">Next Steps:</h4>
//                   <ul className="list-disc list-inside text-gray-700 space-y-1">
//                     <li>Check your phone for confirmation SMS</li>
//                     <li>Prepare necessary documents for verification</li>
//                     <li>Wait for the interview call from our admissions team</li>
//                   </ul>
//                 </div>
//                 <div className="flex justify-center">
//                   <div className="px-6 py-3 bg-gradient-to-r from-purple-600 to-green-500 text-white rounded-lg font-medium">
//                     Application Reference: CAL-{Math.floor(100000 + Math.random() * 900000)}
//                   </div>
//                 </div>
//                 <p className="mt-6 text-gray-500">
//                   For any queries, please contact: +91 80753 05604
//                 </p>
//               </div>
//             )}
//           </div>

//           {/* Features Section */}
//           <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="bg-white p-6 rounded-xl shadow-md">
//               <h3 className="text-xl font-semibold text-purple-700 mb-4">School Features</h3>
//               <ul className="space-y-3">
//                 <li className="flex items-start">
//                   <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                   </svg>
//                   <span>മൂന്നു വയസ്സിനും നാലു വയസ്സിനും ഇടയിൽ പ്രായമുള്ള കുട്ടികൾക്ക് പ്രവേശനം.</span>
//                 </li>
//                 <li className="flex items-start">
//                   <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                   </svg>
//                   <span>ശ്രദ്ധ സൗഹൃദ ക്യാമ്പസ്.</span>
//                 </li>
//                 <li className="flex items-start">
//                   <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                   </svg>
//                   <span>സ്മാർട്ട് ക്ലാസ് റൂം.</span>
//                 </li>
//                 <li className="flex items-start">
//                   <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                   </svg>
//                   <span>അറബിക് ഇംഗ്ലീഷ് മലയാളം കമ്പ്യൂട്ടർ ഭാഷാ പഠനം.</span>
//                 </li>
//               </ul>
//             </div>

//             <div className="bg-white p-6 rounded-xl shadow-md">
//               <h3 className="text-xl font-semibold text-purple-700 mb-4">Contact Information</h3>
//               <div className="space-y-4">
//                 <div className="flex items-start">
//                   <div className="bg-green-100 p-2 rounded-full mr-3">
//                     <FaPhone className="text-green-500" />
//                   </div>
//                   <div>
//                     <p className="font-medium">Phone Numbers</p>
//                     <p className="text-gray-600">+91 80753 05604</p>
//                     <p className="text-gray-600">+91 73563 96944</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="bg-green-100 p-2 rounded-full mr-3">
//                     <FaEnvelope className="text-green-500" />
//                   </div>
//                   <div>
//                     <p className="font-medium">Email</p>
//                     <p className="text-gray-600">mountnoorpst@gmail.com</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="bg-green-100 p-2 rounded-full mr-3">
//                     <FaHome className="text-green-500" />
//                   </div>
//                   <div>
//                     <p className="font-medium">Address</p>
//                     <p className="text-gray-600">Posoat Manjeshwar Kasaragod, 671323</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="text-center mt-12 text-gray-500 text-sm">
//             <p>www.mountnoor.in • mountnoorofficial</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AdmissionForm;