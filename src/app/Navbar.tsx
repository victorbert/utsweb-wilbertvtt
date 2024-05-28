"use client"
import React, { useEffect, useState } from 'react';




  const colors = ['text-green-500', 'text-blue-500'];
  const imageSources = ['unduhan (4).png', 'unduhan (2).png', 'unduhan (3).png'];
 
const Navbar = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleImageClick = () => {
    const nextIndex = (currentImageIndex + 1) % imageSources.length;
    setCurrentImageIndex(nextIndex);
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  };
  useEffect(() => {
    let colorIndex = 0;
    const textElements = document.querySelectorAll('.animate-change-color');
    
    const intervalId = setInterval(() => {
      textElements.forEach((element) => {
        element.classList.remove(colors[colorIndex]);
      });

      colorIndex = (colorIndex + 1) % colors.length;

      textElements.forEach((element) => {
        element.classList.add(colors[colorIndex]);
      });
    }, 2000);
    

    return () => clearInterval(intervalId); 
  }, []); 
  return (
    <div className='bg-white '>
    <div className="bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between font-sans">
        <img src="888.png" className=" w-32 h-32 p-5" alt="Figma" />
          <div className="flex-shrink-0">
          </div>
          <div className="hidden lg:flex space-x-4">
          <button className="flex text-black bg-transparent justify-between p-8">
 Product
  <svg width="8" height="6" viewBox="0 0 8 6" className="flex mt-2 ml-2">
    <path d="M4 6L0.535898 0L7.4641 0L4 6Z" fill="currentColor" />
  </svg>
</button>

<button className="flex text-black bg-transparent justify-between p-8">
Enterprice
  <svg width="8" height="6" viewBox="0 0 8 6" className="flex mt-2 ml-2">
    <path d="M4 6L0.535898 0L7.4641 0L4 6Z" fill="currentColor" />
  </svg>
</button>

            <button className="text-black p-4 block">Pricing</button>
            <button className="flex text-black bg-transparent justify-between p-8">
            Resource
  <svg width="8" height="6" viewBox="0 0 8 6" className="flex mt-2 ml-2">
    <path d="M4 6L0.535898 0L7.4641 0L4 6Z" fill="currentColor" />
  </svg>
</button>

<button className="flex text-black bg-transparent justify-between p-8">
  Comunnity
  <svg width="8" height="6" viewBox="0 0 8 6" className="flex mt-2 ml-2">
    <path d="M4 6L0.535898 0L7.4641 0L4 6Z" fill="currentColor" />
  </svg>
</button>

            <button className="text-black p-4 block">Contact Sales</button>
            <button className="text-black p-4 block">Log in</button>
            <button className="bg-blue-600 font-bold w-56 text-center items-center h-12 mt-4 rounded-md text-white">Get Started For Free</button>
          </div>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-black p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden">
          <div className="space-y-1">
          <button className="flex text-black bg-transparent justify-between p-8">
  Product
  <svg width="8" height="6" viewBox="0 0 8 6" className="flex mt-2 ml-2">
    <path d="M4 6L0.535898 0L7.4641 0L4 6Z" fill="currentColor" />
  </svg>
</button>

<button className="flex text-black bg-transparent justify-between p-8">
  Enterprice
  <svg width="8" height="6" viewBox="0 0 8 6" className="flex mt-2 ml-2">
    <path d="M4 6L0.535898 0L7.4641 0L4 6Z" fill="currentColor" />
  </svg>
</button>

            <button className="text-black p-8 block">Pricing</button>
            <button className="flex text-black bg-transparent justify-between p-8">
  Resource
  <svg width="8" height="6" viewBox="0 0 8 6" className="flex mt-2 ml-2">
    <path d="M4 6L0.535898 0L7.4641 0L4 6Z" fill="currentColor" />
  </svg>
</button>

<button className="flex text-black bg-transparent justify-between p-8">
  Comunnity
  <svg width="8" height="6" viewBox="0 0 8 6" className="flex mt-2 ml-2">
    <path d="M4 6L0.535898 0L7.4641 0L4 6Z" fill="currentColor" />
  </svg>
</button>

            <button className="text-black p-8 block">Contact Sales</button>
            <button className="text-black p-8 block">Log in</button>
          </div>
          <button className="bg-blue-600 font-bold w-56 text-center items-center h-12 mt-3 rounded-md text-white ml-5">Get Started For Free</button>
        </div>
      )}
    </div>


    

<div className='flex'>
<div className='lg:flex flex '>
      <h1 aria-label='How You design,align, and build matters do it together with Figma' className='text-5xl order-3  p-12 grid lg:text-7xl sm:text-7xl'>
      <div className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 lg:text-justify'>
    <span className="font-normal">How You</span>
    <strong className='flex space-x-3 lg:text-justify'>
    <span className="animate-change-color font-bold text-green-500 flex flex-row items-center">
      design
      <svg xmlns="http://www.w3.org/2000/svg" width="44" height="46" fill="none" viewBox="0 0 44 46" className="w-12 h-12"><path stroke="currentColor" stroke-width="4" d="m3.88 4 22.03 7.49a13.12 13.12 0 0 1 8.36 17.12l5.82 6.43-8.84 8-5.78-6.38A13.11 13.11 0 0 1 9.02 26.02L3.88 4Zm0 0 18.05 19.95">
        </path><path fill="currentColor" d="M24.12 26.72a3.58 3.58 0 1 1-4.8-5.3 3.58 3.58 0 0 1 4.8 5.3Z"></path></svg>
      ,
      </span>
      </strong>
<strong>
    <span className="animate-change-color font-bold text-blue-500 flex flex-row items-center">
      align
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="50" fill="none" viewBox="0 0 36 50" className="w-12 h-12"><path fill="currentColor" stroke="currentColor" stroke-linejoin="round" d="M30.95 33.17a1.54 1.54 0 0 0-.25-.63.9.9 0 0 0-.36-.3c-.13-.05-.28-.06-.4-.05-.25.02-.5.12-.74.22-.52.22-1.14.38-1.71.4-1.15.05-2.28.08-3.42.1l-2.86.08c-.72.04-2.48-.02-2.78.63-.17.38.63.83 1.17.93.76.14 4.56.24 6.56.26l1.2-.04c-.69.7-5.56 4.66-7.56 6.02a11 11 0 0 1-5.72 1.72c-3.12.15-5.88-2.12-6.16-5.04-.2-1.9.18-3.74.78-5.6l1.06.11.6.06c.58.05 1.14.09 1.7.06 2.59-.13 5.3-1.5 7.45-3.47 2.15-1.96 3.77-4.53 4.15-7.08.2-1.28 0-2.3-.6-3-.62-.7-1.62-1-2.92-.96-3.34.1-6.17 1.37-8.25 3.97a46.87 46.87 0 0 0-2.54 3.62l-1.02 1.54c-.2.28-.37.58-.58.91l-.15.25a4.51 4.51 0 0 1-.8-3.4c.28-1.83.61-3.7 1.29-5.4 1.97-4.99 5.03-9.25 9.25-12.66a115.8 115.8 0 0 0 3.33-2.63c.53-.44 1.01-.95 1.45-1.48a.4.4 0 0 0 .1-.23c.02-.08.03-.17.03-.25a.87.87 0 0 0-.13-.48.88.88 0 0 0-.4-.28 1.14 1.14 0 0 0-.47-.07 2.3 2.3 0 0 0-.94.43l-1.3.9c-1.2.84-2.4 1.67-3.55 2.6a32.04 32.04 0 0 0-10.21 14.5 18.3 18.3 0 0 0-.9 3.68c-.36 2.48-.1 4.91 1.7 6.92.17.2.25.39.28.56.02.18 0 .39-.07.66l-.2.8c-.32 1.3-.65 2.63-.75 3.97-.46 5.58 4.02 9.77 9.6 9.12 2.7-.32 5.18-1.24 7.36-2.85.26-.18.75-.57 1.3-1.03l.22-.18 2.01-1.72.22-.18c.2-.16.38-.33.63-.56l.06-.05-.12.55-.62 2.26c-.51 1.86-1.02 3.71-1.5 5.58l-.1.28-.04.13c-.04.15-.09.3-.1.48-.06.35 0 .71.3 1.08a.2.2 0 0 0 .2.06c.5-.08.81-.33 1.03-.63.19-.27.3-.58.4-.85 0-.04.02-.07.03-.1 1.6-4.5 3.2-9.03 4.76-13.57.06-.2.04-.45 0-.67Zm-15.5-11.82a8.06 8.06 0 0 1 4.86-1.59c.57-.03.89.08 1.05.25.15.16.21.45.08.98-.25 1.09-.6 2.2-1.18 3.11a13.09 13.09 0 0 1-5.18 4.7 7.45 7.45 0 0 1-5.36.55c1.59-3.09 3.1-5.93 5.73-8Z">
      </path></svg>
      ,
    </span>
    </strong>
    </div>

    <div className='flex space-x-4 lg:text-justify'>
    <span className="font-normal">and</span>
    <strong className='flex space-x-3'>
    <span className="animate-change-color font-bold text-green-500 flex flex-row items-center">
      build
      <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" fill="none" viewBox="0 0 47 47" className="w-12 h-12"><path fill="currentColor" fill-rule="evenodd" d="M23.5 42.36a18.86 18.86 0 1 0 0-37.72 18.86 18.86 0 0 0 0 37.72Zm0 3.64a22.5 22.5 0 1 0 0-45 22.5 22.5 0 0 0 0 45Z" clip-rule="evenodd"></path><path fill="currentColor" fill-rule="evenodd" d="m12.64 29.86-4.23-5.09-1.07-1.28 1.07-1.28 4.23-5.08h5.21l-5.3 6.36 5.3 6.37h-5.2Zm6.33 0 5.09-12.73h4.3l-5.09 12.73h-4.3Zm15.38 0h-5.21l5.3-6.37-5.3-6.36h5.2l4.24 5.08 1.07 1.28-1.07 1.28-4.23 5.09Z"
       clip-rule="evenodd"></path></svg>
    </span>
    </strong>
    <span className='font-normal'> matters. </span>
    </div>
    <div className='flex space-x-4 '>
<span className="font-normal">Do it together with Figma.</span>
</div>
</h1>
</div>
<div className=''>
<button className='bg-black mx-auto items-center text-2xl w-56 h-16 mt-48 sm:flex-grow rounded-md  text-white font-bold'>Get Started</button>
</div>
    </div>


<div>
      </div>

      <div className='items-center text-center'>
        <p>
          <strong className='text-center items-center text-lg'>Trusted by teams at</strong>
        </p>
        <div className='flex gap-10 p-10 items-center justify-center image-scroll-container bg-white'>

    </div>
      </div>
    </div>
  );
}

export default Navbar;
