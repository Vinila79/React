import { BrowserRouter, Route, Routes } from "react-router-dom"
import AboutScreen from "../screen/about-screen"
import HomeSCreen from "../screen/home-screen"
import ContactScreen from "../screen/contact-screen"
import SettingScreen from "../screen/setting-screen"
import InvalidScreen from "../screen/ivalid-screen"
import ProductDetails from "../screen/product-detail-screen"




const Stack = () =>{
    return(
        <BrowserRouter>
        <Routes>
            {/* these are the static routings */}
            <Route path="/" Component={HomeSCreen}/>
            <Route path="/about" Component={AboutScreen}/>
            <Route path="/settings" Component={SettingScreen}/>
            <Route path="/contact" Component={ContactScreen}/>

            <Route path="/:location/:resturantId/info" Component={ProductDetails}/>

            <Route path="*" Component={InvalidScreen}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Stack;