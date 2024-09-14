import Image from 'next/image';
import sunnicentre from '@/public/assets/sunnicentre.jpg'
import { MdOutlineReadMore } from "react-icons/md";
import Link from 'next/link';

const HeroSection1 = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-6 px-12 md:px-24 lg:px-24 md:py-24 w-full font-rubik bg-white rounded-lg shadow-md">
      <div className="md:w-2/5 p-5" data-aos="fade-right" data-aos-duration="2000">
        <Image
          src={sunnicentre}
          loading='lazy'
          alt="Institution Building"
          width={500}
          height={300}
          className="rounded-full rounded-br-lg"
        // style={{ borderRadius: '20px 50px 50px 20px' }}
        />
      </div>
      <div className="md:w-3/5 mt-6 md:mt-0 md:ml-6" data-aos="fade-left" data-aos-duration="2000">
        <h2 className="text-2xl font-bold text-primary">ABOUT US</h2>
        <p className="mt-4 leading-normal text-gray-700">
          Welcome to Mountnoor, the Village of Knowledge, located in Posoat, Manjeshwar, Kasaragod, Kerala. Here, education and spirituality come together to inspire and uplift. Our commitment to ethical values and cultural heritage defines who we are. Join us in our mission to foster a brighter future through holistic education, empowering individuals to reach their full potential and contribute to a more equitable world.

        </p>
        <p className="mt-4 text-gray-700">
          Our mission at Mountnoor is to provide quality education that integrates traditional Islamic teachings with modern academic support. Guided by the Kerala Muslim Jamaath and supported by SYS (Sunni Yuvajana Sangam) through Santhwanam Charity, and SSF (Sunni Students Federation) with their WeFi for Education and Mazavil programs, we emphasize inclusivity and community service. We are dedicated to nurturing a learning environment that promotes moral development, academic excellence, and comprehensive growth.
        </p>

        <Link href="/about">
          <button className="mt-6 px-4 py-2 bg-primary text-xs text-white rounded-lg flex items-center justify-between space-x-2 hover:bg-green-700 group overflow-hidden">
            <span>Know More</span>
            <MdOutlineReadMore className="transform transition-transform group-hover:translate-y-[-5px]" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection1;