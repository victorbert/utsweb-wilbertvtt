import React from 'react';

const Service = () => {
  return (
    <div className="bg-gray-white text-gray-900 py-16 px-6 sm:px-10 lg:px-32 xl:px-48">

    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-800">Our Services</h2>

 
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
        <img src="salmon.jpg" alt="Food Photography" className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">Food Photography</h3>
          <p className="text-gray-600 mb-4 font-extralight">
            Capturing the essence of your dishes with vibrant and appetizing food photography.
          </p>
          <a href="#portfolio" className="text-amber-400 font-bold hover:text-amber-100">View Portfolio</a>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
        <img src="event.jpg" alt="Event Photography" className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">Event Photography</h3>
          <p className="text-gray-600 mb-4 font-extralight">
            Professional event photography to capture the spirit and highlights of your occasion.
          </p>
          <a href="#portfolio" className="text-amber-400 font-bold hover:text-amber-100">View Portfolio</a>
        </div>
      </div>

    </div>
  </div>
);
};

export default Service;
