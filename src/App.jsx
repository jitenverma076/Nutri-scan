import { useState } from 'react'
import './App.css'
import QRScanner from './Components/Pages/QrScanner'
import Home from './Components/Pages/Home'
import Navbar from './Components/common/Navbar'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './Components/Pages/AboutUs'
// import Login from './Components/Pages/Login'
import PageNotFound from './Components/Pages/Pagenotfound'
import AddDishForm from './Components/Pages/AddDishForm'
import InventoryPage from './Components/Pages/Inventory'

function App() {
  return (
    <>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Qrscanner" element={<QRScanner />} />
        <Route path="/Aboutus" element={<AboutUs />} />
        {/* <Route path="/Login" element={<Login />} /> */}
        <Route path="*" element={<PageNotFound />} />
        <Route path='/adddish' element={<AddDishForm />} />
        <Route path="/inventory" element={<InventoryPage />} />
      </Routes>
    </>
  )
}

export default App
