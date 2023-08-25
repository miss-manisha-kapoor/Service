import React from 'react'
import Navbar from "./Components/navbar";
import Banner from "./Components/banner";
import Card from "./Components/card.js";
import Footer from "./Components/footer";
import './App.css';
import AOS from 'aos'; 
import 'aos/dist/aos.css';
import  { useEffect } from 'react';


function App() {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <Card></Card>
     <Footer></Footer>
    </div>
  );
}

export default App;
