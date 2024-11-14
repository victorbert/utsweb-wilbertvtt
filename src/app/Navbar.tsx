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
    <div className='bg-white  '>
      <div className="max-w-8xl mx-auto px-4 sm:px-3 lg:px-8">
        <div className="flex items-center justify-between font-sans">
        <img src="Logo w.png" className=" w-32 h-32 " alt="Figma" />
          <div className="flex-shrink-0">
          </div>
          <div className="hidden lg:flex space-x-4 font-bold text-amber-400">
          <button className="flex bg-transparent justify-between p-8">
 Home
  <svg width="8" height="6" viewBox="0 0 8 6" className="flex mt-2 ml-2">
    <path d="M4 6L0.535898 0L7.4641 0L4 6Z" fill="currentColor" />
  </svg>
</button>

<button className="flex text-black bg-transparent justify-between p-8">
About
  <svg width="8" height="6" viewBox="0 0 8 6" className="flex mt-2 ml-2">
    <path d="M4 6L0.535898 0L7.4641 0L4 6Z" fill="currentColor" />
  </svg>
</button>

           
            <button className="flex text-black bg-transparent justify-between p-8">
           Service
  <svg width="8" height="6" viewBox="0 0 8 6" className="flex mt-2 ml-2">
    <path d="M4 6L0.535898 0L7.4641 0L4 6Z" fill="currentColor" />
  </svg>
</button>

<button className="flex text-black bg-transparent justify-between p-8">
  Portfolio
  <svg width="8" height="6" viewBox="0 0 8 6" className="flex mt-2 ml-2">
    <path d="M4 6L0.535898 0L7.4641 0L4 6Z" fill="currentColor" />
  </svg>
</button>    
     
<a href=""className="flex text-black bg-transparent justify-between p-8">
 Contact
  <svg width="8" height="6" viewBox="0 0 8 6" className="flex mt-2 ml-2">
    <path d="M4 6L0.535898 0L7.4641 0L4 6Z" fill="currentColor" />
  </svg>
</a>
          </div>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-black p-2">
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
 Home
  <svg width="8" height="6" viewBox="0 0 8 6" className="flex mt-2 ml-2">
    <path d="M4 6L0.535898 0L7.4641 0L4 6Z" fill="currentColor" />
  </svg>
</button>

<button className="flex text-black bg-transparent justify-between p-8">
  About
  <svg width="8" height="6" viewBox="0 0 8 6" className="flex mt-2 ml-2">
    <path d="M4 6L0.535898 0L7.4641 0L4 6Z" fill="currentColor" />
  </svg>
</button>

            <button className="text-black p-8 block">Pricing</button>
            <button className="flex text-black bg-transparent justify-between p-8">
  Service
  <svg width="8" height="6" viewBox="0 0 8 6" className="flex mt-2 ml-2">
    <path d="M4 6L0.535898 0L7.4641 0L4 6Z" fill="currentColor" />
  </svg>
</button>

<button className="flex text-black bg-transparent justify-between p-8">
  Portfolio
  <svg width="8" height="6" viewBox="0 0 8 6" className="flex mt-2 ml-2">
    <path d="M4 6L0.535898 0L7.4641 0L4 6Z" fill="currentColor" />
  </svg>
</button>

<button className="flex text-black bg-transparent justify-between p-8">
 Contact
  <svg width="8" height="6" viewBox="0 0 8 6" className="flex mt-2 ml-2">
    <path d="M4 6L0.535898 0L7.4641 0L4 6Z" fill="currentColor" />
  </svg>
</button>

          </div>
  
        </div>
      )}
    </div>

    
      
  );
}

export default Navbar;
