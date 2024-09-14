import React from 'react'
import { sessionImages } from "@/constants/whatsappUrl";
import { IoMdArrowForward } from "react-icons/io";
import Image from 'next/image'
import Link from 'next/link'

function Sessions() {
  const images = sessionImages
  return (
    <div className='p-6 px-12 md:px-24 lg:px-24 py:20 md:py-32 w-full font-rubik pb-10'>
      <div className="flex justify-between items-center sticky md:relative top-24 md:top-0">
        <h1 className='text-2xl font-bold font-rubik text-primary text-center md:text-left pb-2 uppercase '>News & Events</h1>
        <Link href={'/news'} className='flex items-center '>View More <span className='animate-pulse'><IoMdArrowForward size={20} /> </span></Link>
      </div>

      <div className='grid md:grid-cols-4 grid-cols-1 md:space-y-0 space-y-5 gap-[1.5rem] md:gap-[1.2rem] lg:gap-[1.6rem]'>
        {images.length > 0 && images.slice(0, 4).map((image, i) => {
          return (
            <div key={i} className='sticky md:relative top-[9rem] md:top-0 overflow-hidden pb-6 flex flex-col flex-grow bg-yellow-50  rounded-xl shadow md:hover:shadow-lg md:hover:scale-105 duration-150 w-full'>
              <Image src={image.url} alt='sessions' width={0}
                height={0}
                sizes="100vw"
                className='w-full h-auto' loading='lazy' />
              {/* <div className='space-y-2 p-4'>
                <div className="flex gap-1 pt-1 items-center ">
                  <div className="bg-orange-400 rounded-full w-2 h-2 "></div>
                  <h1 className='font-bold text-lg leading-4'> {image.session} </h1>
                </div>
              </div> */}
            </div>
          )
        }
        )}
      </div>
    </div>
  )
}

export default Sessions