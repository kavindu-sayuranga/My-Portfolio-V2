import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
                My name is Kavindu Sayuranga.
                I’am final year student at IJSE
                ( Institute of Software Engineering ).
                I’ve mostly professionally with Java and JavaScript .
                I’m currently learning more about web development
                and software development.I like to work as
                freelance UI/UX Designer , Software Developer and
                Web Developer.

          </p>
          <p className='py-2 text-gray-600'>
          As an undergraduate of Information Technology, I am willing to gain
          more practical knowledge where I can apply my ongoing academic
          competencies, skills, and strengths to uplift the company operations in
          a more serious way. Through my internship, I can learn how employees
          solve industrial problems.

          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;