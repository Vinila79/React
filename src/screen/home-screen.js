import React, { useState } from "react";
import Navbar from "../Components/navbar/navbar";
import ButtonComponent from "../Components/button/button";
import { Link } from "react-router-dom";
import axios from "axios";
import UseEffectExample from "../Components/useEffect/UseEffectEx";
import UseEffectExample2 from "../Components/useEffect/UseEffectEx2";
import UseEffectExample3 from "../Components/useEffect/UseEffectEx3";



const  HomeSCreen= () =>{
    return(
        <div>
            <Navbar/>
            <h2>wellcome to Home-Screen</h2>
          <UseEffectExample3/>
        </div>
   
    )
};
export default HomeSCreen;