import React from "react";
import { useNavigate } from "react-router-dom";

function InvalidScreen() {
    const navigate=useNavigate()
    const handleRedirection=()=>{
        const isRedirect= true
        if(isRedirect){
            navigate("./")
        }else {

        };
    }
        return(
        <>
        <h2>you have lost 404 custom error</h2>
        <button onClick={handleRedirection}>Back to home</button>
   </>
    )
};
export default InvalidScreen;