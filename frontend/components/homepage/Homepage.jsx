import React from 'react'
import Navbar from '../navbar/Navbar.jsx'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Room from '../room/Room.jsx'
import About from '../about/About.jsx'
import Contest from '../contest/Contest.jsx'
import Contact from '../contact/Contact.jsx'
import Home from './Home.jsx'

const Homepage = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/room" element={<Room/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contest" element={<Contest/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
    </>
  )
}

export default Homepage