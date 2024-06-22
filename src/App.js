
import { Heading1,Heading2,Heading3,Heading4,Heading5,Heading6 } from "./Components/headings/headings";
import { ButtonComponent } from "./Components/button/button";
import { ImageComponent } from "./Components/image/imageComponenets";
import { ListParentOrdered, ListParentUnordered} from "./Components/list/listparent";
import { CardComponent } from "./Components/Card/CardComponent";



const App =() =>{
    const greeting= "good morning";
    return(
        <div>
            <Heading1/>
            <Heading2/>
            <Heading3/>
            <Heading4/>
            <Heading5/>
            <Heading6/>
             <ButtonComponent/>
             <ImageComponent/>
             <ListParentOrdered/>
             <ListParentUnordered/>
             <CardComponent/>

           <h3>{greeting}</h3>
           {[1].map((num,index) => (
            <CardComponent key={index}></CardComponent>
           ))

           };
            
        </div>
     )
  

 }
export default App;


