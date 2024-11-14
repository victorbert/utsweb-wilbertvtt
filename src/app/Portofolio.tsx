import React from 'react';

const Portfolio = ({ type }: { type: string }) => {
  return (
    <div className="bg-white text-gray-900 py-16 px-6 sm:px-10 lg:px-32 xl:px-48 text-center">
    
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4">Portfolio</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="relative group">
          <img src="Makan.jpg" alt="Portfolio 1" className="w-full h-60 object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform group-hover:scale-105" />
        </div>

        <div className="relative group">
          <img src="Makan2.jpg" alt="Portfolio 2" className="w-full h-60 object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform group-hover:scale-105" />
        </div>

        <div className="relative group">
          <img src="Makan3.jpg" alt="Portfolio 3" className="w-full h-60 object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform group-hover:scale-105" />
        </div>

        <div className="relative group">
          <img src="Event1.jpg" alt="Portfolio 4" className="w-full h-60 object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform group-hover:scale-105" />
        </div>

        <div className="relative group">
          <img src="s.jpg" alt="Portfolio 5" className="w-full h-60 object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform group-hover:scale-105" />
        </div>

        <div className="relative group">
          <img src="d.jpg" alt="Portfolio 6" className="w-full h-60 object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform group-hover:scale-105" />
        </div>

      </div>
    </div>
  );
};

export default Portfolio;
