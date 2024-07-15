import { useEffect, useState } from "react";




function Movie() {
    const [views , setViews] = useState(0);
    useEffect(()=>{
        const id=setInterval(()=>{
            setViews((views) =>{ })
        })
    });
    return(
        <>
        <MovieViewsRealTime/>

       
        </>
    )

}export default Movie;