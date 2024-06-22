
// import { Heading1,Heading2,Heading3,Heading4,Heading5,Heading6 } from "./Components/headings/headings";
// import { ButtonComponent } from "./Components/button/button";
// import { ImageComponent } from "./Components/image/imageComponenets";
// import { ListParentOrdered} from "./Components/list/listparent";
// import { CardComponent } from "./Components/Card/CardComponent";
import CustomAccordion from "./Components/Accordian/accordian.js";


const App =() =>{
    return(
    //     <div>
    //         <Heading1/>
    //         <Heading2/>
    //         <Heading3/>
    //         <Heading4/>
    //         <Heading5/>
    //         <Heading6/>
    //          <ButtonComponent/>
    //          <ImageComponent/>
    //          <ListParentOrdered/>
    //          <ListParentUnordered/>
    //          <CardComponent/>
            
    //     </div>
    // )
  

// }
// export default App;


//13 march(12-06-2024)

//using ifelse

// const App=() =>{
//     const isLogin=null;
//     if (isLogin){
//         return(
//             <>
//             <h2>you logined sucessfully...</h2>
//             <ImageComponent/>
//             <CardComponent/>
//             </>
//         );
//     }else{
//         return(
//             <>
//             <h2>Your login failed please try again</h2>
//             </>
//         );
//     };

// }
// export default App;



//using ternary

//  const App=() =>{
//      const isLogin=true;
//     return(
//         <div>
//             {isLogin ? (
//                 <div>
//                     <h3>you logined sucessfully...</h3>
//                     <ImageComponent/>

//                 </div>
//             ):(
//                 <h3>Your logined failed try again</h3>

//             )}
//         </div>
//     )
// };
// export default App;



//logic and AND (&&) operator

// const App = () => {
//     const isLogin = true;
// return(
// <div>
// {isLogin && (
//     <>
//        <h3>you loggined sucessfully...</h3>
//       <ListParentOrdered />
//       <ImageComponent />
      
//     </>
    
//   )};
// </div>
<CustomAccordion/>
);
};

export default App;