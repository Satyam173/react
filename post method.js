//POST method
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
  const [userId,setId] = useState('');
  const [todo,setTodo] = useState('');
  const [completed,setCompleted] = useState(false);
  useEffect(()=>{
    fetch("https://dummyjson.com/todos/1").then((result)=>{
      result.json().then((resp)=>{
        console.warn(resp)
        setData([resp])
      })
    })
  },[]);

  function saveUser(){
    console.warn({userId,todo,completed});
    let data = {userId,todo,completed};
    fetch("https://dummyjson.com/todos/1",{
      method:"POST",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    }).then((result)=>{
      result.json();
    })
  }
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

     {/* <table border="1">
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
     </table> */}

      <div className="input form">'
        <input type="text" placeholder='Enter id' value={userId} name='name' onChange={(e)=>{setId(e.target.value)}} />
        <input type="text" placeholder='todo' value={todo} name='todo' onChange={(e)=>{setTodo(e.target.value)}} />
        <input type='text' placeholder='Status' value={completed} name='completed' onChange={(e)=>{setCompleted(e.target.value)}}></input>
        <button onClick={saveUser}>Submit data</button>
      </div>
     
    </div>
  );
}

export default App;
