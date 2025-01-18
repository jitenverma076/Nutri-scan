import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-yellow-600 text-white shadow-md flex justify-between items-center p-4">
      <div>
        <Link to="/" className="text-2xl font-bold hover:text-yellow-300 transition-colors">Nutri Scan</Link>
      </div>
      <div className="flex space-x-6">
        <Link to="/Qrscanner" className="text-lg hover:text-yellow-300 transition-colors">QR Scanner</Link>
        <Link to="/Aboutus" className="text-lg hover:text-yellow-300 transition-colors">About Us</Link>
        <Link to="/Login" className="text-lg hover:text-yellow-300 transition-colors">Login</Link>
      </div>

    </nav>
  )
}
    // const Navbar = () => {
    //     return (
    //         <nav className="bg-white py-4 px-8 sm:px-6 xl:px-28 xl:py-12 flex justify-between items-center">
    //             <Link to="/" className="text-2xl">NutriScan</Link>
    //             <ul className="flex space-x-4 sm:space-x-6">
    //                 <Link to="/Qrscanner" className="text-gray-600 hover:text-[#F6B41A]">QR Scanner</Link>
    //                 <Link to="/Aboutus" className="text-gray-600 hover:text-[#F6B41A]">About Us</Link>
    //                 <Link to="/Login" className="text-gray-600 hover:text-[#F6B41A]">Login</Link>
    //             </ul>
    //         </nav>
    //     );
    // };
export default Navbar
