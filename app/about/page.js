import React from 'react'
import Navbar from '@/components/Navbar'
import About1 from '@/components/AboutUs/About1'
import About2 from '@/components/AboutUs/About2'
import About3 from '@/components/AboutUs/About3'

const page = () => {
  return (
    <>
      <Navbar />
      <div className='pb-8 pt-[32%] gap-4 lg:pt-[16vh] md:pt-[18vh]'>
        <About1 />
        <About2 />
        <About3 />
      </div>
    </>
  )
}

export default page