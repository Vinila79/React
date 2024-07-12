

const { Component} = require("react");

class ProductListing extends Component{
    componentDidMount() {
        console.log("componentDidMount invoked...");
        this.fetchData();

    }

        fetchData = () => {
            fetch("https://fakestoreapi.com/products/1")
            .then((response) =>response.json())
            .then((response) =>console.log(response));
        }

    render() {
        console.log("render invoked...");
        return(
            <>
            <h1>Product Listing page</h1>
            
            
            </>
        )
       
    }
}
export default ProductListing