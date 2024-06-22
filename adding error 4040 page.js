//Page404
import React from 'react'

function Page404() {
  return (
    <div>404 Error page</div>
  )
}

export default Page404

//app.js
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Page404 from './components/Page404';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/*' element={<Page404></Page404>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
