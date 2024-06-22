//App.js
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
