import { Component } from "react";


class ButtonComponentClass extends Component {
    state={
        text1:"subscribe",
        text2:"subscribed",
        isSubscribe: true,
    };

subscribeHandler = () => {
    console.log("button clicked");
    this.setState({
        isSubscribe: !this.state.isSubscribe,
    },
    ()=>{}
);

    console.log(this.state.isSubscribe, "outside the setState")
};
render(){
    return(
        <div>
              <button onClick={this.subscribeHandler}>
            {this.state.isSubscribe ? this.state.text1 : this.state.text2 }

            </button>


            {this.state.isSubscribe ? (
                 <>
                      <h2>THanks for subscribing , enjoy the premium</h2>
                 </>
                ) : ( 
                <h2>please subscribe to access the premium content</h2>
            )}
        </div>
            
          

          
    )
}

}
export default ButtonComponentClass;