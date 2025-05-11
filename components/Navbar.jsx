'use client'
import React, { useEffect, useState, useRef } from 'react';
import mountnoorLogo from '../public/assets/mountnoor3.png';
import Image from 'next/image';
import { IoClose, IoReorderThree } from "react-icons/io5";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navbar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef();
  const pathname = usePathname();

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    const handleScroll = () => {
      setOpen(false);
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('scroll', handleScroll);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('scroll', handleScroll);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('scroll', handleScroll);
    };
  }, [open]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/gallery", label: "Gallery" },
    { href: "/caliber", label: "Caliber" },
    { href: "/mountune", label: "Mountune" },
  ];

  return (
    <div
      ref={navRef}
      className={`fixed w-screen flex items-center z-40 justify-between p-6 px-12 lg:px-24 md:px-24 duration-150 ease-in bg-lightYellow shadow-lg`}
    >
      {/* logo */}
      <Link href='/' className='flex gap-3 items-center hover:cursor-pointer'>
        <Image priority src={mountnoorLogo} className='w-[120px] md:w-[180px] h-auto' alt="" />
      </Link>

      {/* route */}
      <div className='lg:flex gap-5 hidden font-rubik'>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`hover-underline-animation hover:scale-110 duration-150 transition-all after:bg-black ${
              pathname === link.href ? 'text-primary font-bold' : ''
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* responsive */}
      <div className='block lg:hidden z-40'>
        <button onClick={() => setOpen(!open)} className="focus:outline-none">
          {!open ? <IoReorderThree size={40} /> : <IoClose className='z-50 relative text-black' size={40} />}
        </button>
        {open && (
          <div className='fixed backdrop-blur-[200px] bg-white/50 bottom-0 top-0 right-0 shadow-2xl z-40 w-8/12 flex flex-col gap-4 font-semibold text-lg p-6 pt-24' data-aos="fade-left">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-black ${pathname === link.href ? 'text-primary font-bold' : ''}`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;




// 'use client'
// import React, { useEffect, useState, useRef } from 'react';
// import mountnoorLogo from '../public/assets/mountnoor3.png';
// import Image from 'next/image';
// import { IoClose, IoReorderThree } from "react-icons/io5";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import Link from 'next/link';

// function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [gradientScroll, setGradientScroll] = useState(true);
//   const navRef = useRef();

//   useEffect(() => {
//     AOS.init();
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (navRef.current && !navRef.current.contains(event.target)) {
//         setOpen(false);
//       }
//     };

//     const handleScroll = () => {
//       setOpen(false);
//     };

//     if (open) {
//       document.addEventListener('mousedown', handleClickOutside);
//       document.addEventListener('scroll', handleScroll);
//     } else {
//       document.removeEventListener('mousedown', handleClickOutside);
//       document.removeEventListener('scroll', handleScroll);
//     }

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//       document.removeEventListener('scroll', handleScroll);
//     };
//   }, [open]);

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       // The window object is available
//       const handleScrollChange = () => {
//         const scrollPosition = window.scrollY;
//         if (scrollPosition > 550) {
//           setGradientScroll(false);
//         } else {
//           setGradientScroll(true);
//         }
//       };

//       window.addEventListener('scroll', handleScrollChange);
//       return () => {
//         window.removeEventListener('scroll', handleScrollChange);
//       };
//     }
//   }, []);

//   return (
//     <div
//       ref={navRef} className={`fixed w-screen flex items-center z-40 justify-between p-6 px-12 lg:px-24 md:px-24 duration-150 ease-in bg-lightYellow shadow-lg`}>
//       {/* logo */}
//       <a href='' className='flex gap-3 items-center hover:cursor-pointer'>
//         <Image priority src={mountnoorLogo} className={`w-[180px] h-auto ${gradientScroll && 'brightness'}`} alt="logo" />
//       </a>
//       {/* route */}
//       <div className='lg:flex gap-5 hidden font-'>
//         <Link className={`hover-underline-animation hover:scale-110 duration-150 transition-all ${gradientScroll ? 'after:bg-white' : 'after:bg-black'}`} href="/">Home</Link>
//         <Link className={`hover-underline-animation hover:scale-110 duration-150 transition-all ${gradientScroll ? 'after:bg-white' : 'after:bg-black'}`} href="/about">About</Link>
//         <Link className={`hover-underline-animation hover:scale-110 duration-150 transition-all ${gradientScroll ? 'after:bg-white' : 'after:bg-black'}`} href="/gallery">Gallery</Link>
//         <Link className={`hover-underline-animation hover:scale-110 duration-150 transition-all ${gradientScroll ? 'after:bg-white' : 'after:bg-black'}`} href="/mountune">Mountune</Link>
//       </div>

//       {/* responsive */}
//       <div className='block lg:hidden z-40'>
//         {!open ? <IoReorderThree onClick={() => setOpen(true)} size={40} /> : <IoClose className='z-50 relative text-black' onClick={() => setOpen(false)} size={40} />}
//         {open &&
//           <div className='fixed backdrop-blur-[200px] bg-white/50 bottom-0 top-0 right-0 shadow-2xl z-40 w-8/12 flex flex-col gap-4 font-semibold text-lg p-6 pt-24 ' data-aos="fade-left">
//             <Link className='text-black' href="/">Home</Link>
//             <Link className='text-black' href="/about">About</Link>
//             <Link className='text-black' href="/gallery">Gallery</Link>
//             <Link className='text-black' href="/mountune">Mountune</Link>
//           </div>}
//       </div>
//     </div>
//   );
// }

// export default Navbar;