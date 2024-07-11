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
//   const ButtonStyle = { color: "red", backgroundColor: "green" };

  const { text, bgColor, onPress, width, height } = prop;
  return (
    <button
      onClick={onPress}
      style={{ backgroundColor: bgColor, width: width, height: height }}
    >
      {text}
    </button>
  );
};
export default ButtonComponent;



