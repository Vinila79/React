import React, { useCallback, useMemo, useState } from 'react'
import ExampleOfTasks from './ExampleOfTasks'

const Exampleofmemorization = () => {
  const [count1,setcount]=useState(0)
  const [count2,setCount2]=useState(5)
  const [task,setTask]=useState([])
  const incrementHandler=(value)=>{
    setcount(count1+value)
    console.log("i am count")
  }
  let value=0
useMemo(()=>{
    console.log("i am the value")
    return value= count1*count1
   
  },[count1])
  
  const taskHandler=useCallback(()=>{
    console.log("i am a function")
    setTask((prev)=>[...prev,`New task ${task.length}`])
  },[task])

  return   <div>
      <h1>i a parent</h1>
      <h2>count:{count1}</h2>
      <h2>count:{count2}</h2>
      <h3>my value : {value}</h3> 
       <button onClick={()=>{incrementHandler(2)}}>Increasing</button>
      <button onClick={()=>{setCount2(count2+2)}}>Increasing222</button>
      <ExampleOfTasks mytask={taskHandler} tasks={task}/>
    </div>
}
export default Exampleofmemorization