import './App.css'
import Home from './Pages/Home';
import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Show from './Pages/Show';
import Header from './Components/Header/Header';
import View from './Pages/View';
import Cancel from './Pages/Cancel';
import Sign from './Pages/Sign';
import Check from './Pages/Check';
import Footer from './Components/Footer/Footer';
import Board from './Components/Viewpage/Board';
import Dropspot from './Pages/Dropspot';
function App() {
  return (
    
    
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/View" element={<View />} />
        <Route path="/Cancel" element={<Cancel />} />
        <Route path ="/Show" element={<Show />} />
        <Route path = "/Sign" element={<Sign />} />
        <Route path = "/Check" element={<Check />} />
        <Route path = "/Dropspot" element={<Dropspot />} />
        
         
        
       

        

      
      </Routes>
      <Footer />
      </BrowserRouter>
    
  )
}

export default App;