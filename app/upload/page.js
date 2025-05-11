'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { FaArrowCircleDown, FaArrowCircleUp, FaImage, FaCloudUploadAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '@/components/Navbar';

const UploadPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // List of categories - customize as needed
  const categories = ['Event', 'Gallery', 'News', 'Announcement'];

  useEffect(() => {
    AOS.init();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!title || !category || !image) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsUploading(true);

    try {
      // Create form data
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('category', category);
      formData.append('image', image);

      // Upload image to Cloudinary via API
      const response = await axios.post('/api/uploadImage', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 200) {
        toast.success('Image uploaded successfully');
        
        // Reset form fields
        setTitle('');
        setDescription('');
        setCategory('');
        setImage(null);
        setImagePreview(null);
      }
    } catch (error) {
      console.error('Upload error:', error);
      console.error('Upload error:', error.response?.data);
      toast.error(error.response?.data?.message || 'Failed to upload image');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className='min-h-screen text-primary'>
      <Navbar />
      <div className='pt-[32%] lg:pt-[19vh] md:pt-[19vh] p-6 px-12 md:px-24 lg:px-24 py-20 w-full space-y-20'>
        {/* Upload Image Section */}
        <div className='bg-lightYellow flex flex-col space-y-12'>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className='font-semibold text-xl bg-black text-primary py-3 rounded-xl flex items-center justify-center gap-2 duration-150 shadow-xl'
          >
            Upload Image {!isOpen ? <FaArrowCircleDown size={25} /> : <FaArrowCircleUp size={25} />}
          </button>
          
          {isOpen && (
            <div className='flex flex-col space-y-6 px-14 pb-8 duration-150' data-aos='fade-down'>
              <form onSubmit={handleSubmit} className='flex flex-col space-y-6'>
                {/* Title Input */}
                <div className='flex flex-col gap-2'>
                  <label htmlFor='title' className='font-semibold text-lg text-primary'>
                    Title <span className='text-red-500'>*</span>
                  </label>
                  <input
                    id='title'
                    type='text'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className='bg-lightYellow hover:bg-lightYellow p-2 rounded border-2'
                    required
                  />
                </div>

                {/* Description Input */}
                <div className='flex flex-col gap-2'>
                  <label htmlFor='description' className='font-semibold text-lg text-primary'>
                    Description
                  </label>
                  <textarea
                    id='description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className='bg-lightYellow hover:bg-lightYellow p-2 rounded border-2 min-h-[100px]'
                  />
                </div>

                {/* Category Select */}
                <div className='flex flex-col gap-2'>
                  <label htmlFor='category' className='font-semibold text-lg text-primary'>
                    Category <span className='text-red-500'>*</span>
                  </label>
                  <select
                    id='category'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className='bg-lightYellow h-full hover:bg-lightYellow p-2 rounded border-2 w-full md:w-1/2'
                    required
                  >
                    <option value=''>Select Category</option>
                    {categories.map((cat, i) => (
                      <option key={i} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Image Upload */}
                <div className='flex flex-col gap-4'>
                  <label htmlFor='image' className='font-semibold text-lg text-primary'>
                    Image <span className='text-red-500'>*</span>
                  </label>
                  
                  <div className='flex flex-col md:flex-row gap-6'>
                    {/* Upload button */}
                    <div className='flex flex-col items-center justify-center'>
                      <label 
                        htmlFor='image-upload' 
                        className='cursor-pointer flex flex-col items-center justify-center w-full md:w-48 h-48 border-2 border-dashed rounded-lg p-4 hover:bg-gray-50'
                      >
                        <FaCloudUploadAlt size={50} />
                        <span className='mt-2 text-sm text-center'>Click to upload image</span>
                        <span className='mt-1 text-xs text-gray-500'>
                          (JPG, PNG, WEBP, max 5MB)
                        </span>
                      </label>
                      <input
                        id='image-upload'
                        type='file'
                        accept='image/jpeg, image/png, image/webp'
                        onChange={handleImageChange}
                        className='hidden'
                        required
                      />
                    </div>

                    {/* Image preview */}
                    {imagePreview && (
                      <div className='mt-4 md:mt-0'>
                        <p className='text-sm mb-2'>Preview:</p>
                        <div className='relative w-full md:w-48 h-48 border rounded-lg overflow-hidden'>
                          <img 
                            src={imagePreview} 
                            alt='Preview' 
                            className='w-full h-full object-cover'
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type='submit'
                  disabled={isUploading}
                  className='bg-primary hover:bg-green-800 text-white font-semibold py-3 px-4 rounded-lg w-full md:w-auto md:self-start flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed'
                >
                  {isUploading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Uploading...
                    </>
                  ) : (
                    <>
                      <FaImage size={20} />
                      Upload Image
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadPage;