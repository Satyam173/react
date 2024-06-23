//Previous props.js
import React,{useEffedt,useRef} from 'react'
function PreviousProps(props)
{
  const lastVal = useRef();
  useEffect(()=>{
    lastVal.current = props.count;
  })
  const previousProps = lastVal.current;
  return (
    <div>
      <h1>curerent Val {props.count}</h1>
      <h1> previous Val {previousProps}</h1>
    </div>
  )
}
export default PreviousProps;
