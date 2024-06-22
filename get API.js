//app.js
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Page404 from './components/Page404';
import USer from './components/USer';
import { useEffect,useState } from 'react';


function App() {
  let [data,setData] = useState([]);
  useEffect(()=>{
    fetch("https://dummyjson.com/todos/1").then((result)=>{
      result.json().then((resp)=>{
        console.warn(resp)
        setData([resp])
      })
    })
  },[]);
  console.warn(data);
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

     <table border="1">
      <tr>
        <td>userId</td>
        <td>Title</td>
        <td>Completed</td>
      </tr>
      {
        data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.todo}</td>
            <td>{item.completed.toString()}</td>
          </tr>
        ))
      }
     </table>
    </div>
  );
}

export default App;

//api data received from fake json generator and shown in the table fetch methode is used
