//previous.js
import React, { useState } from 'react'

function Previous() {
    const [data,setData] = useState(0);
    function getUpdate(){
        let val = Math.floor(Math.random()*10);
        setData((prev)=>{
            console.log(prev);
            return val;
        })
    }
  return (
    <div><h1>{data}</h1>
    <button onClick={getUpdate}>Update Data</button>
    </div>
    
  )
}

export default Previous
