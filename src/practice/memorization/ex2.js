import React,{memo} from 'react'

const ExampleOfTasks = ({mytask,tasks}) => {
    console.log("child rendering")
  return (
    <div>
      <h1>I am child</h1>
      <button onClick={mytask}>add task</button>
      {/* {tasks.map((item,index)=>{
        return <div key={index}>{item}</div>
      })} */}
     
    </div>
  )
}

export default memo(ExampleOfTasks);