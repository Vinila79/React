import React from "react";

const ChildExample=({mytask,tasks})=>{
    console.log("child rendering...")
    return(
        <div>
           <h3>child Components</h3>
           {/* <button onClick={mytask}>Add Task</button>
           {tasks.map((item,index)=>{
            return <div key={index}>{item}</div>
           })} */}
           <button onClick={mytask}>Add Task</button>
           {tasks.map((item,index)=>{
            return <div key={index}>{item}</div>
           })}
        </div>
    )
}
export default React.memo(ChildExample);
// export default ChildExample;