import React from "react";
const UsecallbackChildex=({mytask})=>{
    console.log("usecallback child")
    return(
        <>
        <h1>usecallback child</h1>
       <button onClick={mytask}>add task</button>
       </>
    )

}
export default React.memo(UsecallbackChildex);