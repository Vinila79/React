// import { Component } from "react";


// class MountingStageEx extends Component{
//     render(){
//         return(
//             <div>
//                 <h1>Mounting stage example</h1>

//             </div>
//         )
//     }

// }
// export default  MountingStageEx;

import React, { Component } from 'react'
import ChildClsComp from '../child'

export default class ClsComp extends Component {

     constructor(props){
    super(props)
    this.state={

      count:10,
      show:true
    }
     }                
  render() {
    return (
      <div>
        <h1>This is parent Componnet</h1>
        {/* <p>{this.state.count}</p> */}

        {this.state.show && <ChildClsComp data={this.state.count}/>}

        <button onClick={()=>{this.setState({show:false})}}>hide</button>
        <button onClick={()=>{this.setState({show:true})}}>show</button>
        <button onClick={()=>this.setState({count:this.state.count+10})}>click me</button>
      </div>
    )
  }
}