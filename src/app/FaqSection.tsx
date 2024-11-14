import React from 'react';

const FaqSection = () => {
  return (
    <div className="bg-gray-100 text-white py-10 px-6 sm:px-10 lg:px-32 xl:px-48 text-center">
      
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-amber-400">Contact Us</h1>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
        
        <div className="space-y-3 text-left sm:text-center">
          <h2 className="text-lg sm:text-xl font-semibold text-black">Get in Touch</h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Feel free to reach out to us anytime. We’re here to help!
          </p>
          <p className="text-sm sm:text-base text-amber-400">
            Email: <a href="mailto:support@example.com" className="text-black hover:text-gray-300">w****@gmail.com</a>
          </p>
          <p className="text-sm sm:text-base text-amber-400">
            Phone: <a href="tel:+1234567890" className="text-black hover:text-gray-300">+62-822-8888-8888</a>
          </p>
        </div>

        
        <div className="flex flex-col items-center space-y-3">
          <h2 className="text-lg sm:text-xl font-semibold text-black">Follow Us</h2>
          <div className="flex space-x-3">
            <a href="https://twitter.com" className="text-gray-400 hover:text-white text-sm sm:text-base">Twitter</a>
            <a href="https://youtube.com" className="text-gray-400 hover:text-white text-sm sm:text-base">YouTube</a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-white text-sm sm:text-base">Instagram</a>
            <a href="https://facebook.com" className="text-gray-400 hover:text-white text-sm sm:text-base">Facebook</a>
          </div>
        </div>
      </div>

    
     
    </div>
  );
};

export default FaqSection;
