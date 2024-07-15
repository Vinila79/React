import { Component } from "react";



class ChildComponent extends Component{

    componentWillUnmount(){
        alert("child rendering...");
    }
    render(){
        return(
            <div>Child Component</div>
        )
    }
}
export default ChildComponent;
