import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'
import { FaWhatsapp } from "react-icons/fa6";
import { watsappGroupUrls } from '@/constants/whatsappUrl'
import { sessionImages } from "@/constants/whatsappUrl";

export const metadata = {
  title: 'news',
}

const page = () => {
  const images = sessionImages
  return (
    <div className='pb-6'>
      <Navbar />
      <div className='pt-[32%] lg:pt-[16vh] md:pt-[18vh] p-6 px-12 md:px-24 lg:px-24 w-full font-rubik'>
        <h1 className='text-3xl font-bold py-6 text-primary font-rubik uppercase'>News</h1>
        <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-[1.5rem] md:gap-[1.2rem] lg:gap-[1.6rem] '>
          {/* cards */}
          {images.length > 0 && images.slice(0, 15).map((image, i) => {
            return (
              <div key={i} className='flex flex-col flex-grow bg-yellow-50  rounded-xl shadow hover:shadow-lg hover:scale-105 duration-150 hover:cursor-pointer w-full'>
                <Image src={image.url} alt='kasaragod sahithyotsav sessions' width={0}
                  height={0}
                  sizes="100vw"
                  loading='lazy'
                  className='w-full h-auto' />
                <div className='-space-y-0.5 p-4'>
                  <div className="flex gap-2 pt-1 items-center justify-between">
                    <div className='flex items-center gap-1'>
                      <div className="bg-orange-400 rounded-full w-2 h-2 "></div>
                      <h1 className='font-medium text-sm leading-4'> {image.session} </h1>
                    </div>
                    <div>
                      <h1 className='text-sm font-semibold leading-4 text-end'> {image.date} </h1>
                    </div>
                  </div>
                  <h1 className=' font-semibold text-lg'>{image.role}</h1>
                </div>
              </div>
            )
          }
          )}
        </div>
        {/* btn */}
        <div className='w-full pt-8'>
          <a
            href={watsappGroupUrls}
            className='bg-gradient-to-r to-orange-700 from-yellow-500 shadow-xl rounded-xl text-white w-full p-4 px-6 text-lg font-semibold flex items-center justify-center gap-2'>
            <FaWhatsapp size={25} />
            Explore the Event</a>
        </div>
      </div>
    </div>
  )
}

export default page
