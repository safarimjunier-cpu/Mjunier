import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Houses from './pages/Houses'
import Cars from './pages/Cars'
import Plots from './pages/plots'
import Contact from './pages/Contact'
import RentCollection from './pages/RentCollection'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/houses" element={<Houses />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/plots" element={<Plots />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rent-collection" element={<RentCollection />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
