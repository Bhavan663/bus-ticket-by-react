import './App.css'
import Home from './Pages/Home';
import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from './Components/Header/Header';
import View from './Pages/View';
import Cancel from './Pages/Cancel';
import Show from './Pages/Show';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    
    
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/View" element={<View />} />
        <Route path="/Cancel" element={<Cancel />} />
        <Route path ="/Show" element={<Show />} />

        

      
      </Routes>
      <Footer />
      </BrowserRouter>
    
  )
}

export default App;
