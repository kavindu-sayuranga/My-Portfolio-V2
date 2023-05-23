import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import portfoloImg from '../public/assets/projects/portfolio.png';
import weatherImg from '../public/assets/projects/weather.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Weather app'
            backgroundImg={weatherImg}
            projectUrl='/weather'
            tech='Next JS & Tailwind css'
          />
          <ProjectItem
            title='Portfolio site'
            backgroundImg={portfoloImg}
            projectUrl='/portfolio'
            tech='Html, Css & Javascript'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;