import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {
  return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        {/* <main>
          <Routes>
            <Route path="/" element={<div className="p-8 text-center">Welcome to AutoRent</div>} />
            <Route path="/cars" element={<div className="p-8 text-center">Cars Page</div>} />
            <Route path="/my-bookings" element={<div className="p-8 text-center">My Bookings</div>} />
          </Routes>
        </main> */}
      </div>
  )
}

export default App
