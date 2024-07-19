import React from "react";
import Navbar from "../Components/navbar/navbar";
import ButtonComponent from "../Components/button/button";
import { Link } from "react-router-dom";


const  HomeSCreen= () =>{
    return(
        <div>
            <Navbar/>
            <h2>wellcome to Home-Screen</h2>
            {
                [1,2,3,4].map((each)=>{
                    return(
                        <>
                        <Link to={`/hydherabad/${each}/info`}>
                         
                        <ButtonComponent text={each} />
                        </Link>
               
                        </>
                       
                        
                    )
                })
            }
        </div>
   
    )
};
export default HomeSCreen;