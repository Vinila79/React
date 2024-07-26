import { useState } from "react"




const TaskCount =()=>{
   const initialstate=0;
    const [Count , setCount]=useState(initialstate);

const IncrementCountHandler=()=>{
   setCount((Count) => Count + 1)
}

return(
  
    <>
    <h3>{Count}</h3>
    
    <button onClick={IncrementCountHandler}>Increment</button>
    
    </>
)
    }

export default TaskCount;