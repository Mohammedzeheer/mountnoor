import Image from 'next/image';
import sunnicentre from '@/public/assets/mountnoorRabeeh.jpg'

const About3 = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-6 px-12 md:px-24 md:py-20 lg:px-24 w-full font-rubik bg-white">
      <div className="md:w-3/5 mt-6 md:mt-0 md:mr-32" data-aos="fade-right" data-aos-duration="2000">
        <h2 className="text-2xl font-bold text-primary uppercase">Our vision</h2>
        <p className="mt-4 text-gray-700 tracking-wide text-justify">
          Our vision is to establish Mountnoor as a leading institution of knowledge and spirituality, recognized for our commitment to holistic education and community welfare. Through the collaborative efforts of Kerala Muslim Jamaath,  <span className="font-BAUHS93">SYS</span> with Santhwanam Charity, and <span className="font-cooper-black">SSF</span> with their WEFI for Education and Mazavil programs, we aspire to create a future where our students and community members are well-equipped to lead with purpose, uphold Islamic principles, and contribute to a compassionate and just world. We envision Mountnoor as a place where learning goes beyond the classroom, instilling lifelong values of unity, service, and responsibility.
        </p>
      </div>

      <div className="md:w-2/5 md:ml-6" data-aos="fade-left" data-aos-duration="2000">
        <Image
          src={sunnicentre}
          alt="Institution Building"
          width={500}
          height={500}
          className="rounded-lg"
          style={{ borderRadius: '130px 50px 130px 50px' }}
        />
      </div>
    </div>
  );
};

export default About3;