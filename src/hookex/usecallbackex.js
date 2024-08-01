import { useCallback, useState } from "react";
import UsecallbackChildex from "./usecallbackchildex";
const UseCallbackEx=()=>{
    const [count,setcount]=useState(0);
    const [task, setTask]=useState([])
    const incrementhandler=()=>{
        setcount(count=>count+1)
        console.log("am count")
    }

    const taskhandler=()=>{
        console.log("am function")
        setTask((prev)=>[...prev,`newtask ${task.length}`])
    }
    return(
        <>
        <h1>callback example</h1>
        <h2>{count}</h2>
        <button onClick={incrementhandler}>Increment</button>
        <UsecallbackChildex mytask={taskhandler}/>
        </>
    )

};
export default UseCallbackEx;