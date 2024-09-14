import Image from 'next/image';
import sunnicentre from '@/public/assets/sunnicentre.jpg'

const About = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center w-full font-rubik bg-white">
                <div className="md:w-3/5 mt-6 md:mt-0 md:mr-32" data-aos="fade-right" data-aos-duration="2000">
                    <h2 className="text-2xl font-bold text-primary uppercase">Mountune</h2>
                    <p className="mt-4 text-gray-700 tracking-wide text-justify">
                        Mountune is  fest celebrated with great enthusiasm by the students of Nooraniya Madrasa, located in Mountnoor Posoat — a village revered as a beacon of knowledge and spirituality. Since its inception in 2016, Mountune has grown into a vibrant platform that showcases the talents and skills of our students in various disciplines, including writing, reading, nasheeds (Islamic songs), qawwali, burda, group songs, and Qur'an recitation.
                    </p>
                    <p className="mt-4 text-gray-700 text-justify">
                        Organized under the esteemed guidance of the Kerala Muslim Jamaath, Mountune reflects the essence of our institution, which comprises a mosque, madrasa, coaching classes, and charitable initiatives. Our mission is to nurture the intellectual, spiritual, and artistic abilities of our students, fostering a well-rounded education that balances traditional Islamic teachings with contemporary learning.
                    </p>
                </div>
                <div className="md:w-2/5 md:ml-3 m-3" data-aos="fade-left" data-aos-duration="2000">
                    <Image
                        src={sunnicentre}
                        alt="Institution Building"
                        width={500}
                        height={500}
                        className="rounded-lg"
                        style={{ borderRadius: '130px 130px 130px 130px' }}
                    />
                </div>
            </div>
            <div data-aos="fade-right" data-aos-duration="2000">
                <p className="mt-4 text-gray-700" >
                    Mountune is more than just a festival; it is a celebration of the rich cultural and religious heritage that Mountnoor represents. Each year, the event brings together our community in a spirit of unity, learning, and joy, providing a stage for our students to shine and for the community to come together in shared values and aspirations.
                </p>
                <p className="mt-4 text-gray-700 ">
                    Join us in celebrating the spirit of Mountune, where knowledge meets culture, and tradition meets talent.
                </p>
            </div>
        </>
    );
};

export default About;