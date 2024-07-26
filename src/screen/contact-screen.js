
import React, { useContext } from "react";
import Navbar from "../Components/navbar/navbar";
import { Link, Outlet } from "react-router-dom";
import { profileWrapper } from "../navigation/stack";

function  ContactScreen () {
    const {name , salary}=useContext(profileWrapper)
    return(
        <div>
            <Navbar/>
            <h2>wellcome to contact-Screen {name}</h2>
            <Link to={"doctors"}>Doctors</Link>
            <Link to={"engineers"}>Engineers</Link>
            <Outlet/>

        </div>
    )
};
export default ContactScreen;