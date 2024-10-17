'use client';
import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import mountnoorLogo from "../public/assets/Icon/mountnoor5.png";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-lightYellow pt-40 pb-24 font-rubik shadow-lg">
      <div className="max-w-screen-xl w-full mx-auto px-12 lg:px-24 md:px-24 grid grid-rows-5 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <Image
            src={mountnoorLogo}
            alt="MountNoor Logo"
            width={60}
            height={60}
          />
          <p className="mt-2 mb-4">
            <strong className="font-medium font-rubik">Mountnoor</strong> Village of knowledge.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2 ">
            <div className="mx-2 bg-white text-primary rounded-full items-center justify-center flex p-2 shadow-md">
              <a href="https://www.instagram.com/mountnoorofficial"> <FaFacebook className="h-6 w-6" /></a>
            </div>
            <div className="mx-2 bg-white text-primary rounded-full items-center justify-center flex p-2 shadow-md">
              <a href="https://www.youtube.com/@mountnoor328"> <FaYoutube className="h-6 w-6" /></a>
            </div>
            <div className="mx-2 bg-white text-primary rounded-full items-center justify-center flex p-2 shadow-md">
              <a href="https://www.instagram.com/mountnoorofficial"> <FaInstagram className="h-6 w-6" /></a>
            </div>
          </div>
          <p className="text-gray-400">©{new Date().getFullYear()} - Mountnoor</p>

          {/* </div> */}
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Quick Links</p>
          <ul className="text-black-500">
            {/* <li className="my-2 hover:text-primary cursor-pointer transition-all">
              About Us{" "}
            </li> */}
            <li className="my-2 hover:text-primary cursor-pointer transition-all">
              <Link href="/about">
                About Us
              </Link>
            </li>
            <li className="my-2 hover:text-primary cursor-pointer transition-all">
              Privacy Policy{" "}
            </li>
            <li className="my-2 hover:text-primary cursor-pointer transition-all">
              Terms of Service{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Contact</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-primary cursor-pointer transition-all">
              <p>
                Mountnoor
                Posoat, Manjeshwar (PO)
                kasaragod
                Kerala,
                671323</p>
            </li>


            <li className="my-2 hover:text-primary cursor-pointer transition-all flex items-center">
              <MdOutlineEmail className="mr-2" size={20} />
              <span>mountnoorpst@gmail.com</span>
            </li>
            <li className="my-2 hover:text-primary cursor-pointer transition-all flex items-center">
              <MdOutlinePhone className="mr-2" size={20} />
              <span>9895671762, 9567352235</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center text-gray-400 text-xs">
        <div>Designed and Developed  </div>
        <a href="https://mohammedzaheer.online" className="text-black-600 hover:underline pl-1 ">
          Mohammed Zaheer
        </a>
      </div>
    </div>
  );
};

export default Footer;



