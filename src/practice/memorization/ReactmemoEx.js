import React, { useCallback, useMemo, useState } from 'react'
import ChildExample from './ChildEx';

const MemorizationEx = () => {
  const [count1, secount1]=useState(0);
  // const IncrementHandler=()=>{
  //   secount(count+1);
  // }
  const [count2, setCount2] = useState(5)

  const [task,setTask] = useState([])

  let value=0;
  useMemo(()=>{
    console.log("iam the value")
    return value=count1*count1;
  })

  const taskhandler=useCallback(()=>{
    console.log("iam function...")
    setTask((prev)=>[...prev,`newTask ${task.length}`])
  },[task])
  

  return (
    <div>
      <h3>MemorizationEx</h3>
      <h2>count1:{count1}</h2>
      <h2>count2:{count2}</h2>
      <h3>my value:{value}</h3>

      <button onClick={()=>{secount1(count1+1)}}>Increment</button>
      <button onClick={()=>{setCount2(count2+2)}}>Increment2</button>

      <ChildExample mytask={taskhandler} tasks={task} />


    </div>
    
  )
}

export default MemorizationEx;