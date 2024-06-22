//Nabbar
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
        <Link to='/'>Home</Link>
        <br />
        <Link to='/about'>About</Link>
    </div>
  )
}

export default Navbar

//Home
import React from 'react'
import Navbar from './Navbar'

function Home() {
  return (
    <div>
        <Navbar></Navbar>
        <h1>
        This is home page</h1></div>
  )
}

export default Home

//About
import React from 'react'
import Navbar from './Navbar'

function About() {
  return (
    <div>
        <Navbar></Navbar>
        <h1>About page </h1>
    </div>
  )
}

export default About

//App
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
