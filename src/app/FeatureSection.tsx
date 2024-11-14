import React, { useEffect } from 'react';

const FeatureSection = ({ title, type, photo, description,description1, text, button }:
  { title: string, type: string, photo: string, description: string, text: string, button: string,description1 :string }) => {

   
  return (
    <div className=' text-justify '>
  <div className={`flex flex-col gap-4 sm:flex-row`}>
    <div className={`px-10 py-4 sm:py-16 sm:px-24 sm:w-1/2 order-first ${type=='left'?'sm:order-last':'sm:order-frist'}`}>
    <div className='p-5 sm:p-5 ml-5 sm:ml-1'>
    <p className='font-semibold text-neutral-400 mt-1 text-lg'>{text}</p>
    <h1 className="text-2xl font-black sm:text-7xl lg:text-7xl md:text-5xl">{title}</h1>
  </div>
      <h2 className='text-lg sm:text-xl font-extralight text-black'>{description}</h2>
      <h2 className='text-lg sm:text-xl font-extralight text-black'>{description1}</h2>
    </div>
    <img src={photo} className="w-56 sm:w-3/5 hidden sm:block" alt="" />
    
  </div>
  

</div>




  );
};

export default FeatureSection;
