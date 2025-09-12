import React from 'react';
const Footer = () => {
  return <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-6 mt-12 shadow-inner">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img src="/Sobadanavi.png" alt="Sobadhanavi Logo" className="h-16" />
          </div>
          <div className="text-center md:text-right">
            <p className="font-medium">
              © 2025 Sobadhanavi Limited. All rights reserved.
            </p>
            <p className="text-blue-300 italic">towards a new future</p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;