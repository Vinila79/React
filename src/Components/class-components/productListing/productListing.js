import CustomSpinner from "../../spinner/CustomSpinner";



const { Component} = require("react");

class ProductListing extends Component{

state={
    ProductListing:[],
    loading: false,
  error:null,
}

    componentDidMount() {
        console.log("componentDidMount invoked...");
        this.fetchData();

    }

        // fetchData = () => {
        //     this.setState({
        //         loading: true,
        //     })
        //     fetch("https://fakestoreapi.com/products")
        //     .then((response) =>response.json())
        //     .then((response) => {
        //         console.log(response)
        //         this.setState({
        //             ProductListing: response,
        //             loading: false,
        //         });
        // });      
        // };


        // fetchData = async ()=>{
        //    this.setState({
        //     loading: true,
        //    });
        //    try{
        //    const response1 = await fetch("https://fakestoreapi.com/products");
        //    const finalResponse = await response1.json();
        //    this.setState({
        //     ProductListing: finalResponse,
        //     loading: false,
        //    });
        // } catch (err) {
        //     console.error(err);
        //     this.setState({
        //         error: "server is busy",
        //     });
        // }finally{
        //     this.setState({
        //         loading: false,
        //     });
        // }
        // };


        fetchData = async ()=>{
            this.setState({
             loading: true,
            });
            try{
            const response1 = await Axios("https://fakestoreapi.com/products");
           console.log(response1, "response1");


           if(response1.status === 200) {
            this.setState({
                ProductListing:response1.data,
                loading: false,
            })
           }



            // this.setState({
            //  ProductListing: finalResponse,
            //  loading: false,
            // });
         } catch (err) {
             console.error(err);
             this.setState({
                 error: "server is busy",
             });
         }finally{
             this.setState({
                 loading: false,
             });
         }
         };

    render() {
        console.log("render invoked...");
        return(
            <>
            <h3>Product Listing page</h3>
            
            {this.state.loading ? (
                <>
               
                <h3>please wait its loading...</h3>
                <CustomSpinner/>
                </>
               
                ):(
                    <div>
                         {this.state.ProductListing.map(eachObject=>{
                            return<h3 key={eachObject.id}>{eachObject.title}</h3>
                            
                        })}
                    </div>
            )}    
            </>
        );
       
    }
}
export default ProductListing;