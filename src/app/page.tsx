"use client"
import Navbar from './Navbar';
import FeatureSection from './FeatureSection';
import React, { useState, useEffect } from 'react';
import FaqSection from './FaqSection';


const Page = () => {
        const texts = ['Making', 'Building', 'Designing', 'Aligning'];
  const colors = ['text-yellow-600', 'text-red-500', 'text-blue-500', 'text-green-500'];
  const [index, setIndex] = useState(0);
  

  useEffect(() => {
        const textChangeInterval = setInterval(() => {
          setIndex((index + 1) % texts.length);
        }, 3000);
    
        return () => {
          clearInterval(textChangeInterval);
        };
      }, [index]);

      
    
  return (
    <div className=''>
        <Navbar />
        <div className= ''>
        <FeatureSection 
        text='Design'
        title='Co-create in one space'
        description='Work together in real time and empower designers to create in new ways. 
        Keep workflows efficient with tools that give every team visibility throughout the process.'
        photo='1000.png'
        type='left'
        button='Explore Design'
       />
      

<FeatureSection 
        text='Prototype'
        title='Make designs feel real'
        description='Create realistic prototypes that allow for quick iteration on flows and states. 
        est the full, interactive experience to get better feedback, sooner. 
        Keep workflows efficient with tools that give every team visibility throughout the process.'
        photo='20004.png'
        type='right'
        button='Explore Prototype'
       />
       

<FeatureSection 
        text='Dev Mode'
        title='Bring design and dev closer'
        description='Introducing Dev Mode, a new space in Figma for developers.
         Bring clarity to designs and give developers the tools they need to translate them into code.'
        photo='3000.png'
        type='left'
        button='Explore DevMode'
       />
      
<FeatureSection 
        text='Design systems'
        title='Scale design and development'
        description='Save time and keep things consistent with reusable assets in shared libraries.
         Standardize components and variables so that there’s more time for exploration, and less time doing busy work.'
        photo='4000.png'
        type='right'
        button='Explore Design System'
       />

<FeatureSection 
        text='FigJam'
        title='Align your team'
        description='FigJam is an online whiteboard where everyone who builds products can collaborate.
         Use it to bring your team together in new ways, from kickoffs and stand ups to rituals and retros.'
        photo='5000.png'
        type='left'
        button='Explore Figjam'
       />
        </div>
        
        <div className="bg-black sm:flex-row">
  <div className="sm:flex">
    <div className="sm:w-1/2">
      <h1 className="text-5xl sm:text-7xl p-20 py-32 text-white font-sans">
        Start <span className={`mr-2 font-bold ${colors[index]}`}>{texts[index]}</span> <br></br> with Figma
      </h1>
    </div>
    <div className="sm:w-2/3">
      <button className="w-1/2 mt-0 ml-20 h-16 rounded-md mx-auto font-bold bg-blue-500 text-2xl sm:text-4xl  sm:mt-36 sm:ml-40">Get Started For Free</button>
    </div>
  </div>
  <FaqSection />
</div>

        </div>
  );
}

export default Page;

 