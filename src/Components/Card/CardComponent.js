import { Heading1 } from "../headings/headings";
import { ImageComponent } from "../image/imageComponenets";
import { ButtonComponent } from "../button/button";
import { ListParentOrdered} from "../list/listparent";





export const CardComponent = () => {
    return(
        <div>
            <Heading1/>
            <ImageComponent/>
            <ButtonComponent/>
            <ListParentOrdered/>
           

        </div>
    )
}