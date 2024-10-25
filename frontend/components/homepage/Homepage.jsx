import React from 'react'
import Navbar from '../navbar/navbar.jsx'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Room from '../room/Room.jsx'
import About from '../about/About.jsx'
import Contest from '../contest/Contest.jsx'
import Contact from '../contact/Contact.jsx'
import Home from './Home.jsx'
import "./Homepage.css"

const Homepage = () => {
  return (
    <>
      <Router>
        <div className="background-container">
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/room" element={<Room/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contest" element={<Contest/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        </div>
      </Router>
    </>
  )
}

export default Homepage