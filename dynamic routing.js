//USer.js
import React from 'react'
import { useParams } from 'react-router-dom'

function USer() {
    const params = useParams();
    const {name} = params;
  return (
    <div>
        <h1>Welcome {name}</h1>
    </div>
  )
}

export default USer

//app
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Page404 from './components/Page404';
import USer from './components/USer';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/*' element={<Page404></Page404>}></Route>
      <Route path='/user/:name' element= {<USer/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
