import Image from 'next/image';
import sunnicentre from '@/public/assets/sunnicentre.jpg'

const About1 = () => {
  return (
    <div className='p-6 px-12 md:px-24 lg:px-24 py-20 w-full font-rubik'>
      <div className="flex flex-col md:flex-row items-center bg-white">
        <div className="md:w-2/5" data-aos="fade-right" data-aos-duration="2000">
          <Image
            src={sunnicentre}
            alt="Institution Building"
            width={500}
            height={300}
            className="rounded-lg"
            style={{ borderRadius: '20px 50px 50px 20px' }}
          />
        </div>
        <div className="md:w-3/5 mt-6 md:mt-0 md:ml-16" data-aos="fade-left" data-aos-duration="2000">
          <h2 className="text-2xl font-bold text-primary">ABOUT US</h2>
          <p className="mt-4 text-gray-700 text-justify">
            Mountnoor, often referred to as the Village of Knowledge is a distinguished educational and spiritual hub located in Posoat, Manjeshwar, Kasaragod, Kerala. This serene village is home to a range of institutions dedicated to learning, spiritual growth, and community service, all operating under the auspices of the Kerala Muslim Jamaath
          </p>
          <p className="mt-4 text-gray-700 text-justify">
            Mountnoor houses the Nooraniya Madrasa, where traditional Islamic education is imparted alongside moral and ethical teachings. Our coaching classes provide academic support, ensuring that students excel in both religious and secular studies, fostering a well-rounded education.
          </p>
        </div>
      </div>
      <div data-aos="fade-left" data-aos-duration="2000">
        <p className="mt-4 text-gray-700 text-justify">
          Committed to holistic development, Mountnoor meets the spiritual, intellectual, and social needs of our community. Our charitable initiatives reflect a deep commitment to social welfare, extending support to those in need and promoting a spirit of compassion and unity.  </p>
        <p className="mt-4 text-gray-700 text-justify">
          At Mountnoor, we strive to nurture a generation that is knowledgeable, spiritually grounded, and deeply connected to their cultural and religious heritage. We aim to create an environment where learning thrives, community bonds are strengthened, and Islamic values are embodied in everyday life. </p>
      </div>
    </div>
  );
};

export default About1;