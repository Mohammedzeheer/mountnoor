import React from 'react'
import Navbar from '@/components/Navbar'
import { FaWhatsapp } from "react-icons/fa6";
import { watsappGroupUrls } from '@/constants/whatsappUrl'
import Result from '@/components/Result';
import About from '@/components/Mountune/About';

export const metadata = {
  title: 'Results',
}

const Page = () => {
  return (
    <>
      <Navbar />
      <div className='pt-[32%] lg:pt-[16vh] md:pt-[18vh] p-6 px-12 md:px-24 lg:px-24 py-32 w-full font-rubik'>
        <div className='my-10'>
          <About /></div>
        <div className='mt'>
          <div className='w-full'>
            <div className='text-white bg-primary hover:bg-green-800 text-black text-center duration-150  py-4'><h1 className='text-2xl font-bold'>Results</h1></div>
            <div className='bg-lightYellow py-2'>
              <Result />
            </div>

          </div>

          <div className='w-full pt-16'>
            <a
              href={watsappGroupUrls}
              className='bg-gradient-to-r to-primary from-secondary shadow-xl rounded-xl text-white w-full p-4 px-6 text-lg font-semibold flex items-center justify-center gap-2'
            >
              <FaWhatsapp size={25} />
              Explore the Event
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;