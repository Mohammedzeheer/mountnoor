'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'

const Page = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        const res = await fetch('/api/uploadImage')
        const data = await res.json()
        if (data.success) {
          const galleryImages = data.data.filter(img => img.category === 'Gallery')
          setImages(galleryImages)
        }
      } catch (error) {
        console.error('Failed to load gallery images:', error)
      }
    }

    fetchGalleryImages()
  }, [])

  return (
    <div className='pb-6'>
      <Navbar />
      <div className='pt-[32%] lg:pt-[16vh] md:pt-[18vh] p-6 px-12 md:px-24 lg:px-24 w-full font-rubik'>
        <h1 className='text-4xl text-primary font-bold font-rubik py-6'>Gallery</h1>
        <div className='relative grid grid-cols-1 md:grid-cols-3 gap-3 grid-rows-3 w-full'>
          {images.map((image, i) => (
            <div key={i} className="w-full shadow-lg">
              <Image
                src={image.imageUrl}
                alt='mountnoor'
                className='w-full h-auto rounded'
                loading='lazy'
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page



// import Image from 'next/image'
// import React from 'react'
// import Navbar from '@/components/Navbar'
// import { galleryImages } from '@/constants/whatsappUrl'

// export const metadata = {
//   title: 'Gallery',
// }
// const page = () => {
//   const images = galleryImages
//   return (
//     <div className='pb-6'>
//       <Navbar />
//       <div className='pt-[32%] lg:pt-[16vh] md:pt-[18vh] p-6 px-12 md:px-24 lg:px-24 w-full font-rubik'>
//         <h1 className='text-4xl text-primary font-bold font-rubik py-6'>Gallery</h1>
//         <div className='relative grid grid-cols-1 md:grid-cols-3 gap-3 grid-rows-3 w-full' >
//           {images.map((image, i) => {
//             return (
//               <div key={i} className="w-full shadow-lg">
//                 <Image src={image.url} alt='mountnoor' className='w-full h-auto rounded ' loading='lazy' width={0}
//                   height={0}
//                   sizes="100vw" />
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default page