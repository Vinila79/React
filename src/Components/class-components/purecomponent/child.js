// import { Component } from "react";
import { Component, PureComponent } from "react";





class ChildComponent extends PureComponent {
    render(){
        console.log("Child rendering...")
        return(
            <div>ChildComponent</div>
        )
    }
}
export default ChildComponent;