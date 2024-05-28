import React, { useEffect } from 'react';

const FeatureSection = ({ title, type, photo, description, text, button }:
  { title: string, type: string, photo: string, description: string, text: string, button: string, }) => {

    useEffect(() => {
      const handleScroll = () => {
        var scroll = window.pageYOffset;
        var body = document.getElementsByTagName('body')[0];
        
        if (scroll < 400) {
      
          body.style.backgroundColor = 'bg-yellow-400';
        } else if (scroll >= 1600 && scroll < 3000) {
          body.style.backgroundColor = 'green';
        } else if (scroll >= 1800 && scroll < 4000) {
          body.style.backgroundColor = 'silver';
        } else if (scroll >= 2000 && scroll < 5000) {
          body.style.backgroundColor = 'aqua';
        } else {
          body.style.backgroundColor = 'yellow';
          
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <div className=' text-justify '>
  <div className='p-5 sm:p-10 ml-5 sm:ml-10'>
    <p className='font-sans mt-10 text-lg'>{text}</p>
    <h1 className="text-4xl font-sans sm:text-7xl lg:text-7xl md:text-5xl">{title}</h1>
  </div>
  <div className={`flex flex-col gap-4 sm:flex-row`}>
    <div className={`px-10 py-4 sm:py-16 sm:px-24 sm:w-1/2 order-first ${type=='right'?'sm:order-last':'sm:order-frist'}`}>
      <h2 className='text-lg  sm:text-3xl text-black'>{description}</h2>
      <button className="w-48 h-12 font-bold text-white rounded-md mt-5 bg-black">{button}</button>
    </div>
    <img src={photo} className="w-full sm:w-3/5" alt="TV Image" />
  </div>
  <div className="border-b w-full border-black"></div>

</div>




  );
};

export default FeatureSection;
