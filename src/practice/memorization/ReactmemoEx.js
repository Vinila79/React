import React, { useCallback, useState } from 'react'
import ChildExample from './ChildEx';

const MemorizationEx = () => {
  const [count, secount]=useState(0);
  // const IncrementHandler=()=>{
  //   secount(count+1);
  // }

  // const [task,setTask] = useState([])

  // const taskhandler=useCallback(()=>{
  //   console.log("iam function...")
  //   setTask((prev)=>[...prev,`newTask ${task.length}`])
  // },[task])

  const [task, setTask]=useState([])
  const taskHandler=useCallback(()=>{
    console.log("i am function")
    setTask((prev)=>[...prev,`NEWTASK ${task.length}`])
  },[task])
  

  return (
    <div>
      <h3>MemorizationEx</h3>
      <h2>count:{count}</h2>
      <button onClick={()=>{secount(count+1)}}>Increment</button>

      {/* <ChildExample mytask={taskhandler} tasks={task} /> */}
      <ChildExample mytask={taskHandler} tasks={task}/>

    </div>
    
  )
}

export default MemorizationEx;