//state with object .js
import React, { useState } from 'react'

function StatewithObject() {
    const [data,setData] = useState({name:"satyam",age:21})
  return (
    <div>
        <h1>State Object with hooks</h1>
        <input type="text" placeholder='enter name' value={data.name} onChange={(e)=>{setData({...data,name:e.target.value})}} />
        <input type="text" placeholder='enter age' value={data.age} onChange={(e)=>{setData({...data,age:e.target.value})}} />
        <h1>
            name: {data.name}
        </h1>
        <h1>age: {data.age}</h1>
    </div>
  )
}

export default StatewithObject;
