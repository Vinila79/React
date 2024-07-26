import { BrowserRouter, Route, Routes } from "react-router-dom"
import AboutScreen from "../screen/about-screen"
import HomeSCreen from "../screen/home-screen"
import ContactScreen from "../screen/contact-screen"
// import SettingScreen from "../screen/setting-screen"
import InvalidScreen from "../screen/ivalid-screen"
import ProductDetails from "../screen/product-detail-screen"
import DoctorScreen from "../screen/doctor-screen"
import EngineerScreen from "../screen/engineer-screen"
import React, { createContext, Suspense, useState } from "react"
// import LazySetting = React.lazy(()=>import("../screen/setting-screen"))
const LazySetting = React.lazy(() => import ("../screen/setting-screen"))



export const profileWrapper=createContext();

function Stack  (){
    const [profileInfo, setProfileInfo] = useState({
        name:"ram",
        salary:"50,000"
    })

    return(
        <profileWrapper.Provider value={profileInfo}>

        <BrowserRouter>
        <Routes>
            {/* these are the static routings */}
            <Route path="/" element={<HomeSCreen/>}/>
            <Route path="/about" element={<AboutScreen/>}/>
            <Route path="/contact" element={<ContactScreen/>}>
            <Route path="doctors" element={<DoctorScreen/>} />
            <Route path="engineers" element={<EngineerScreen/>}/>
            </Route>

            <Route path="/settings" element={

                <Suspense fallback={<div>Loading</div>}>  
                < LazySetting />
                </Suspense>
            }
                />

            <Route 
             path="/:category/:productId/info"
             element={<ProductDetails/>}
             />

            <Route path="*" element={<InvalidScreen/>}/>

        </Routes>
        </BrowserRouter>
        </profileWrapper.Provider>
    )
}

export default Stack;