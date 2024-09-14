import Image from 'next/image'
import React from 'react'
import clip1 from '@/public/assets/clip1.png'

function ThemeBanner() {
  return (
    <div className='flex md:flex-row flex-col items-center justify-between px-12 p-12 lg:px-36 md:px-24 gap-4'>
      <div className='flex flex-col max-w-2xl text-center md:text-left'>
        <h1 className='text-[55px] font-rubik font-semibold '>Mountnoor</h1>
        <h1 className={`leading-5 font-rubik`}>
          Text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
          Tabriz and Kasaragod share cultural similarities in their roles as historic trade centers, unique traditional architecture, rich and diverse cuisines, and the celebration of various cultural and religious festivals.
          Tabriz and Kerala are two regions with distinct cultural and historical backgrounds. Tabriz is a major city in northwestern Iran, historically known for its role as a cultural and trade hub along the Silk Road. Kerala, on the other hand, is a state in southwestern India known for its rich cultural heritage, diverse religious communities, and historical trade connections with various civilizations.
        </h1>
      </div>
      <div className='w-full md:w-1/3'>
        <Image loading='lazy' src={clip1} className='h-auto w-full' alt='clipart' />
      </div>
    </div>
  )
}

export default ThemeBanner