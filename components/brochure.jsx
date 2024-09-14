import React from 'react';
import Image from 'next/image';
import { FiDownload } from 'react-icons/fi';

export const sessionImages = [
  {
    url: 'https://res.cloudinary.com/dah6aafle/image/upload/v1722699805/Certificates/ssfkasaragod/cover_dd9lld.jpg',
    role: 'Sahityotsav Event Brochure',
    downloadLink: 'https://online.fliphtml5.com/qmlyb/ixay/',
  },
];

function Brochure() {
  const handleImageClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className='pb-6'>
      <div className='pt-3 p-6 px-12 lg:px-36 md:px-24 w-full'>
        <h1 className='text-4xl font-bold py-3 text-black'>Brochure</h1>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[1.5rem] md:gap-[1.2rem] lg:gap-[1.6rem]'>
          {sessionImages.map((image, i) => (
            <div
              key={i}
              className='flex flex-col flex-grow col-span-3 bg-yellow-50 rounded-xl shadow hover:shadow-sm duration-150 hover:cursor-pointer w-full'
              onClick={() => handleImageClick(image.downloadLink)}
            >
              <Image
                src={image.url}
                alt='sessions'
                width={500}
                height={300}
                sizes="100vw"
                loading='lazy'
                className='w-full h-auto'
              />
              <div className='-space-y-0.5 p-4'>
                <h1 className='font-semibold text-lg py-3'>
                  {image.role}
                </h1>
                <a
                  href='/assets/brochureSahithyotsav24.pdf'
                  download
                  className='flex items-center bg-black text-white p-2 text-lg font-semibold'
                >
                  <FiDownload size={25} className='pr-3' />
                  <h1>Download Brochure</h1>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Brochure;