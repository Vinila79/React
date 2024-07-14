// import ProductListing from "./Components/class-components/productListing/productListing";
import Greeting from "./Components/greeting/greeting";
// import CustomSpinner from "./Components/spinner/CustomSpinner";



const App =() =>{

  const  persons =[
    {
      name: "kiran",
      dayRouting:[["woke up at 7am" , "breakfast at 9am " , "class at 12 pm "]],
      breakTime: 10,
    },
    {
      name: "ramya",
      dayRouting:[["woke up at 7am" , "breakfast at 9am " , "class at 12 pm "]],
      breakTime: 60,
    },
  ];

  const names=["kiran" , "sathwika" , "ramya" , "sashi" , "mounika"];
  
  const greeting=["woke up at 7am" , "breakfast at 9am " , "class at 12 pm "];
  
  
  return(
    <div>
      {
        names.map((eachName, index) =>{
          return(
            <Greeting name={eachName} key={index}>
              {
                greeting.map((eachGreeting, ind) => {
                  return<h4 key={ind}>{eachGreeting}</h4>
                })};
            </Greeting>  
          );
        })};
    </div>
 
  );
};
export default App;
