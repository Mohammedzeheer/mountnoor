import React from 'react';

const HeroSection2 = () => {
  return (
    <section className="w-full bg-white dark:bg-wickeddark">
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
        <div className="flex w-full mx-auto text-left">
          <div className="relative inline-flex items-center mx-auto align-middle">
            <div className="pb-12 text-center">
              <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
                Village Of <br className="hidden lg:block" />
                Knowledge
              </h1>
            </div>
          </div>
        </div>

        <div className="mx-auto text-center">
          <div className="grid grid-cols-3 gap-4 mx-auto lg:grid-cols-6">
            <div>
              <img
                className="h-4 mx-auto lg:h-12 grayscale hover:grayscale-0 transition duration-300"
                src='https://res.cloudinary.com/dah6aafle/image/upload/v1724747969/mountnoor/santhwanam.png'
                alt="sys"
                loading='lazy'
              />
            </div>
            <div>
              <img
                className="h-4 mx-auto lg:h-12 grayscale hover:grayscale-0 transition duration-300"
                src='https://res.cloudinary.com/dah6aafle/image/upload/v1724747416/mountnoor/20240827_134841_qkq3vk.png'
                alt="Framer"
                loading='lazy'
              />
            </div>
            <div>
              <img
                className="h-4 mx-auto lg:h-12 grayscale hover:grayscale-0 transition duration-300"
                src='https://res.cloudinary.com/dah6aafle/image/upload/v1724747323/mountnoor/20240827_134624_kjmyjz.png'
                alt="Sketch"
                loading='lazy'
              />
            </div>
            <div>
              <img
                className="h-4 mx-auto lg:h-12 grayscale hover:grayscale-0 transition duration-300"
                src='https://res.cloudinary.com/dah6aafle/image/upload/v1724747322/mountnoor/20240827_134320_cce6jb.png'
                alt="Sketch"
                loading='lazy'
              />
            </div>
            <div>
              <img
                className="h-4 mx-auto lg:h-12 grayscale hover:grayscale-0 transition duration-300"
                src='https://res.cloudinary.com/dah6aafle/image/upload/v1724747353/mountnoor/kalalyam.png'
                alt="kalalayam"
                loading='lazy'
              />
            </div>

            <div>
              <img
                className="h-4 mx-auto lg:h-12 grayscale hover:grayscale-0 transition duration-300"
                src='https://res.cloudinary.com/dah6aafle/image/upload/v1724748394/mountnoor/risala_tc5vix.png'
                alt="risala"
                loading='lazy'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;
