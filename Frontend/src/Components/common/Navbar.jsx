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

export default Navbar
