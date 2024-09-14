'use client'
import Sessions from '@/components/Sessions'
import VideoBg from '@/components/VideoBg'
import Navbar from '@/components/Navbar'
import HeroSection1 from '@/components/HeroSection1'
import HeroSection2 from '@/components/HeroSection2'

export default function Home() {
  return (
    <>
      <main className="flex flex-col ">
        <Navbar />
        <VideoBg />
        <HeroSection1 />
        <HeroSection2 />
        <Sessions />
      </main>
    </>
  );
}
