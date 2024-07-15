
import React, {Component} from "react";

export default class MountingPhase extends Component {
constructor() {
    console.log("constructor executing...");
    super();
    this.state = {
    count:10,
    favouriteColor: "green"
    };
}
componentDidMount() {
    console.log("componentDidMount executing...");
    document.title=`React count ${this.state.count}`;

}
static getDerivedStateFromProps(props, state) {
    return { favouriteColor: props.favColor };
 }
IncreaseCount=()=>{ 
    this.setState({
        count:this.state.count+1,
    });
}
componentDidUpdate(){
    document.title=`React count ${this.state.count}`;

}
shouldComponentUpdate(){
    return true;
}
getSnapshotBeforeUpdate(state, prop){
    console.log(state, prop)
    return null;
}
    render() {
        console.log("render executing...");
        return(
        <div>
       
        <h3>My favourite color{this.state.favouriteColor}{this.state.count}</h3>
        <button onClick={this.IncreaseCount}>Increment Count</button>
        </div>
        );
    }
}