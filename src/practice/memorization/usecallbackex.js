import { useCallback, useState } from "react"
import { ChildEx } from "./usecalbchild";


const CallbackEx = () =>{
    const[task,setTask]=useState([]);
    console.log("parent rendering")

    const taskhandler=useCallback(()=>{
        console.log("iam function");
        setTask((prev)=>[...prev,`newtask ${task.length}`])
    },[task]);
    return(
        <div>
            <ChildEx mytask={taskhandler} tasks={task}/>
            </div>
    )
};
export default CallbackEx;