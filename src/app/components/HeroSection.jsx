'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="col-span-7 place-self-center sm:text-left">
            <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fc7e77]  to-[#EFAC11]">Hello, I'm{" "}
            </span> 
            <br></br>
            <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'Jakub',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              'Web Developer',
              1000,
              'Mobile Developer',
              1000,
              'Game Developer',
              1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '1em', display: 'inline-block' }}
            repeat={Infinity}
            />
            </h1>
              <p className='text-[#ADB7BE] mb-6 text-base sm:text-lg lg:text-xl'>
              opis
              </p>
              <div>
                <button className='px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#fc7e77]  to-[#EFAC11] hover:bg-slate-200 text-white'>
                <span className='block bg-[#000000] hover:bg-slate-800 rounded-full px-5 py-2'>Hire me</span></button>
                <button className='px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#fc7e77] to-[#EFAC11] text-white mt-3'>
                <span className='block bg-[#000000] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span></button>
              </div>
          </div>
      <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
        <div className="rounded-full bg-[#181818] w-[350px] h-[350px] lg:w-[400px] lg:h-[400px] relative">
          <Image
          src="/images/logomountain.png"
          alt="hero-image"
          className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
          width={300} 
          height={300} />
        </div>
      </div>
      </div>
    </section>
  )
}

export default HeroSection