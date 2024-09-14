import Image from 'next/image';
import clip1 from '../../public/assets/clip1.png'

const About4 = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 justify-between items-start p-6 px-12 md:px-24 lg:px-24 w-full font-rubik'>
      <div className='text-center lg:text-start w-full pt-0 md:pt-6 lg:pt-10 '>
        <h1 className='text-[55px] font-rubik font-semibold'>Mountnoor</h1>
        <div className='space-y-4'>
          <h1 className={`text-base font-rubik leading-5`}> share cultural similarities in their roles
            as historic trade centers, unique traditional architecture, rich and diverse cuisines, and the celebration of various cultural and
            religious festivals. </h1>
          <h1 className={`text-base font-rubik  leading-5`}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h1>
          <h1 className={`text-base font-rubik leading-5`}>Lorem Ipsum is simply. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the releasishing software like Aldus PageMaker including versions of Lorem Ipsum.</h1>
        </div>
      </div>
      <div className=' w-full pt-0 md:pt-10'>
        <Image src={clip1} alt='clipart' className='w-full h-auto' loading='lazy' />
      </div>
      <h1 className={`lg:col-span-2 text-base font-rubik leading-5 `}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h1>
    </div>
  );
};

export default About4;