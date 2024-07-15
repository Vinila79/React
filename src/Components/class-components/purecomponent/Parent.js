import { Component } from "react";
import ChildComponent from "../purecomponent/child";


export default class ParentComponent extends Component {
    state = {
        count:0,
    }
changeCount = (scale)=>{
    this.setState({
        count:this.state.count  + scale,
    })
}

    render(){
        console.log("parent rendering...")
        return(
            <div>
                <h4>{this.state.count}</h4>
            <button onClick={()=>this.changeCount(4)}>
                Cilck to change count
                </button>
            <ChildComponent/>
            </div>
        )
    }
}
