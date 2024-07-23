import React, { useEffect } from "react";


function UseEffectExample3 (){
    useEffect(()=>{
        window.addEventListener("mousemove", captureMouse);

        return ()=>{//befor leaving the current component, this return will execute.
            //clean up , prevent leak 

            window.removeEventListener("mousemove", captureMouse)
        };
    },[])

    const captureMouse = (event) => {
        console.log(event.clientX , "X-AXIS");
        console.log(event.clienty , "Y-AXIS")
    }
    return<div>UseEffectExample3</div>
}
export default UseEffectExample3;