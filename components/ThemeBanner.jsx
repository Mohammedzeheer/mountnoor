import Image from 'next/image'
import React from 'react'
import clip1 from '@/public/assets/clip1.png'

function ThemeBanner() {
  return (
    <div className='flex md:flex-row flex-col items-center justify-between px-12 p-12 lg:px-36 md:px-24 gap-4'>
      <div className='flex flex-col max-w-2xl text-center md:text-left'>
        <h1 className='text-[55px] font-rubik font-semibold '>Mountnoor</h1>
      </div>
      <div className='w-full md:w-1/3'>
        <Image loading='lazy' src={clip1} className='h-auto w-full' alt='clipart' />
      </div>
    </div>
  )
}

export default ThemeBanner