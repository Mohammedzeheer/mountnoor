'use client'
import Image from 'next/image';
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import mountnoorRoundLogo from '@/public/assets/Icon/mountnoor5.png'

const VideoBg = () => {
  return (
    <div className="relative top-0 left-0 w-full h-[96vh] overflow-hidden z-[-1] font-rubik">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-screen object-cover pointer-events-none "
      >
        <source src="https://res.cloudinary.com/dah6aafle/video/upload/v1724749512/mountnoor/mountune_to3waj.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* contents */}
      <div className="relative flex flex-col gap-4 justify-center items-center text-center w-full h-full z-30">
        <Image src={mountnoorRoundLogo} alt='clipart' loading='lazy' className="w-40 h-auto max-w-[80%] md:max-w-[50%]" data-aos="fade-down" data-aos-duration="2000" />
        <h1 className={`text-white font-rubik text-justify -tracking-wider text-xs md:text-sm leading-4 md:leading-5 max-w-[80%] md:max-w-[60%]`}>
          <Typewriter
            words={['Mountnoor, the "Village of Knowledge," is a prominent educational and spiritual center in Posoat, Manjeshwar, Kasaragod, Kerala. Guided by the Kerala Muslim Jamaath, our institution offers traditional Islamic education through the Nooraniya Madrasa and supports holistic development with initiatives from SYS (Santhwanam Charity) and SSF (WEFI for Education). Our coaching classes enhance both religious and secular learning, empowering individuals to reach their full potential. We aim to create a nurturing environment where education and spirituality merge, fostering a community grounded in knowledge, compassion, and unity.']}
            loop={1}
            cursor
            cursorStyle=""
            typeSpeed={15}
          />
        </h1>
      </div>
      <div className="container w-full h-screen absolute top-0 z-10 mix-blend-multiply opacity-[90%] brightness-50 object-cover"></div>
    </div>
  );
}

export default VideoBg;


