
import React from "react";
import Navbar from "../Components/navbar/navbar";
import { Link, Outlet } from "react-router-dom";

const  ContactScreen= () =>{
    return(
        <div>
            <Navbar/>
            <h2>wellcome to contact-Screen</h2>
            <Link to={"doctors"}>Doctors</Link>
            <Link to={"engineers"}>Engineers</Link>
            <Outlet/>

        </div>
    )
};
export default ContactScreen;