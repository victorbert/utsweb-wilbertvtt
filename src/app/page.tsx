"use client"
import Navbar from './Navbar';
import FeatureSection from './FeatureSection';
import React, { useState, useEffect } from 'react';
import FaqSection from './FaqSection';
import Bio from './Bio';
import About from './About';
import Portfolio from './Portofolio';
import Service from './Service';


const Page = () => {
  return (
    <div className=''>
        <Navbar />
        <Bio />
        <About 
        type='left'
        />
        <div className= "bg-gray-100">
<FeatureSection 
        text=''
        title='My Experience'
        description='- 2023 | Front End-Developer | PT. Pundi Mas Berjaya'
        description1='- 2023-2024 | Photografer | Freelance | Kamalini Yoga Studio & THW'
        photo='ft.png'
        type='right'
        button='Explore Prototype'
       />
        </div>
        <Service />
        <Portfolio 
  type='left'/>
        
  <FaqSection />
</div>


  );
}

export default Page;

 