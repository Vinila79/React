import { useState } from "react";



const TodoComponent = () =>{
    const initialsate =[
        {
            id: 1,
            period: "Morning",
            routine: ["wake up at 5am" , "breakfast at 9am" , "class at 10am"]
        
        },
        {
            id: 2,
            period: "Afternoon",
            routine: ["lunch at 1pm" , "breakfast at 4pm" , "class at 2pm"]
        
        },
    ];
    const {todos , setTodos} = useState(initialsate);
    const addNewTodo = () => {
        const dummyTodo = {
            id: 3,
            period: "Evening",
            routine: ["snacks at 5pm" , "Instagram at 6pm" , "class at 2pm"]
        };

        const dummyIncluded = todos.find(
            (eachTodo) =>eachTodo.id === dummyTodo.id
        ); 
        const updatedTodos = [...todos, dummyTodo];
        if(!dummyIncluded) {
            setTodos(updatedTodos);
        };
    };
const removeRoutingHandler = (each) =>{
    const id = each.id;
    const filterData = todos.filter((eachTodo) => eachTodo.id != id);
    setTodos(filterData)   
};
    return(
        <>
        <button onClick={addNewTodo}>Add new todo</button>
        {todos.map((each) =>{
            return(
                <>
                <h3>{each.period}</h3>
                <button onClick={() => removeRoutingHandler(each)}>Remove routine</button>
                {each.routine.map((eachRoutine) =>{
                    return(
                        <>
                        <h5>{eachRoutine}</h5>
                        </>
                    );
                   }) 
                }
                </>
            )

        })}
        
        </>
    ) 
};
export default TodoComponent;