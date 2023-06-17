import React from 'react'
import { Route, Routes, Link } from "react-router-dom"


import Home from './pages/Home';
import Contacts from './pages/Contacts';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Header from './units/Header';

export default function App() {
  return (
    <div>
      <Header/>
      
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </div>
  )
}
