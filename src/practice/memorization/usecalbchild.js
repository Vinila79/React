

export const ChildEx = ({mytask,tasks})=>{
    console.log("child rendering")
    return(
        <div>
<h3>child component</h3>
<button onClick={mytask}>Add Task</button>
           {tasks.map((item,index)=>{
            return <div key={index}>{item}</div>
           })}
        </div>
    )
}