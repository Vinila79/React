
import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails =() =>{
    const URL_PARAMS =useParams();
    console.log(URL_PARAMS);
    return(
        <div>
            <h2>Product-Details</h2>
        </div>
    )
};
export default ProductDetails;