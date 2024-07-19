//Button Component Creation


// export const ButtonComponent = () => {
     
//     return (
//     <button>Click me</button>
//     )
// };



// inline style

// export const ButtonComponent = () => {
//     const ButtonStyle={colour:"red",backgroundColor:"green"}
//    return (
//    <button onClick={()=>{}} className=" " style={ButtonStyle}>click me</button>
//    )
// };





import "./button.module.css";

const ButtonComponent = (prop) => {
  const ButtonStyle = { color: "red", backgroundColor: "green" };

  const { text, bgColor, onPress, height } = prop;
  return (
    <button
      onClick={onPress}
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 mx-3 rounded"

    >
      {text}
    </button>
  );
};
export default ButtonComponent;



