import {Routes, Router} from 'react-router-dom'
import { Home } from './componet/Home';
import { About } from './componet/About';
import React from 'react';
import './App.css'
import { Navbar } from './componet/Navbar';
function App() {

  return (
    <>
    <Navbar/>
    
    </>
  );
}
<Routes>
    <Router path='/' elment={<Home/>}/>
    <Router path='about' elment={<About/>}/>
</Routes>


export default App;
