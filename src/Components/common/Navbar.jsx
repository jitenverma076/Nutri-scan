import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#F6B41A] text-black shadow-md p-4 sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div>
          <Link to="/" className="text-2xl font-bold hover:text-gray-700 transition-colors">Nutri Scan</Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link to="/Qrscanner" className="text-lg hover:text-gray-700 transition-colors">QR Scanner</Link>
          <Link to="/Aboutus" className="text-lg hover:text-gray-700 transition-colors">About Us</Link>
         
          <Link to="/adddish" className="text-lg hover:text-gray-700 transition-colors">Add Dish</Link>
          <Link to="/inventory" className="text-lg hover:text-gray-700 transition-colors">Inventory</Link>
          <Link to="/Login" className="text-lg hover:text-gray-700 transition-colors">Login</Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-lg focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <Link to="/Qrscanner" className="block text-lg hover:text-gray-700 transition-colors">QR Scanner</Link>
          <Link to="/Aboutus" className="block text-lg hover:text-gray-700 transition-colors">About Us</Link>
         
          <Link to="/adddish" className="block text-lg hover:text-gray-700 transition-colors">Add Dish</Link>
          <Link to="/inventory" className="block text-lg hover:text-gray-700 transition-colors">Inventory</Link>
          <Link to="/Login" className="block text-lg hover:text-gray-700 transition-colors">Login</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
