import { Component } from "react";
import ChildComponent from "./child";



class UnMounting extends Component {
    state = {
        isChildVisible:true,
    };
    onClick = () =>{
        this.setState({
            isChildVisible: !this.state.isChildVisible
        })
    };

    render(){
        return(
            <>
            <h2>unMounting stage</h2>
            <button onClick={this.onClick}> click to hide Child</button>
            {
                this.state.isChildVisible ? <ChildComponent/> : null
            }

           
            
            </>
        )
    }
}

export default UnMounting;