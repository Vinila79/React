import React, { useState } from "react";
import Navbar from "../Components/navbar/navbar";
import ButtonComponent from "../Components/button/button";
import { Link } from "react-router-dom";
import axios, { Axios } from "axios";


const  HomeSCreen= () =>{
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const response = await axios.get ("https://fakestoreapi.com/products");
        if(response.status === 200) {
            setData(response.data);
        }
    }
    return(
        <div>
            <Navbar/>
            <h2>wellcome to Home-Screen</h2>
            {/* {
                [1,2,3,4].map((each)=>{
                    return(
                        <>
                        <Link to={`/hydherabad/${each}/info`}>
                         
                        <ButtonComponent text={each} />
                        </Link>
               
                        </>     
                    ) })
            } */}
            <button onClick={fetchData}>Fetch Data</button>
            {
                data.length > 0 ? (
                    <>
                    {data.map((each) => {
                        return(
                            <Link to={`/hyderabad/${each}/info`}>
                            <ButtonComponent text={each} />
                            </Link>
                        );
                    })}
                    </>
                ) : (
                    <h5>No products found</h5>
                )
            }
        </div>
   
    )
};
export default HomeSCreen;