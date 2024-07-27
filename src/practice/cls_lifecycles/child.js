// import { Component } from "react";



// class MountingChild extends Component{
//     constructor(){
//         super()
//         this.state={
//             name:"Vinila",
//             id: 3
//         }
//     };
//     componentDidMount(){
//         console.log("componentdidmount")
//     };
// }
// export default MountingChild;


//
import React, { Component } from 'react'

export default class ChildClsComp extends Component {
      constructor(props){
         super(props)  
         this.state={
             count1:this.props.data+10,
             product: "Dummy"    
         }     
         
         console.log("Inside constructor")
      }      
      static getDerivedStateFromProps(props,state){
         console.log("Inside getDerived")
         return {
            ...state,count1:props.data+10
          }     

   //           return null
      }     
      
      shouldComponentUpdate(){
                    console.log("InsideShould component update ")
          return true
      }
      getSnapshotBeforeUpdate(prevprop,prevstate){
               console.log("Inside getSnapshotBeforeUpdate",prevprop,prevstate)
               return null
      }
      componentDidUpdate(){
             console.log("Inside did update")       
      } 
    //   componentDidMount(){
    //     console.log("Inside Componnet didmount")
    //     fetch('https://fakestoreapi.com/products/1')
    //     .then(res=>res.json())
    //      .then(json=>{console.log(json);
    //       this.setState({...this.state,product:json.title})
    //      })        
    //   }
    componentDidMount(){
        console.log("Inside Component didmount");
        fetch("https://fakestoreapi.com/products/1")
        .then(res=>res.json())
        .then(json=>{console.log(json);
        this.setState({...this.state,product:json.title})})

    }

      componentWillUnmount(){
             console.log("component will unmount")       
      }
      
  render() {
        console.log(" Inside Render method")            
    return (
      <div>
        <h1>This is child cls component</h1>
        <h2>props:{this.props.data}</h2>
        <h2>count1:{this.state.count1}</h2>
        <h2>product name:{this.state.product}</h2>
      </div>
    )
  }
}