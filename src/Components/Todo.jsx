import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

const Todo = () => {
  // Use Navigate function for navigate the page
  const navi = useNavigate()
    const location = useLocation();
    const query = new URLSearchParams(location.search)
  
    let [todos,setTodos] = useState({})   

    useEffect(()=>{
         let todoID = query.get("id");
        fetch(`https://686be60114219674dcc688b8.mockapi.io/todoApp/${todoID}`)
        .then(response => response.json())
        .then(data => setTodos(data))
        .catch(error=>{
            console.log(error.message)
        })
    },[])//We don't need to write "location.search" cuz we set that in separate page

    // Function For Back Button
    function handleBack(){
      // Back to Navigate the page to dashboard
      navi(-1);
    }
    // useEffect(()=>{
    //     console.log(todos)
    // },[todos])
  return (
    <div>
        <h2>Todos</h2>
        
           <p>Id: {todos.id}</p>
           <p>Type: {todos.type}</p>
           <p>Description: {todos.description}</p>
           <p>Amount: {todos.amount}</p>
           <p>Date: {new Date(todos.createdAt).toLocaleDateString() }</p>
           <button onClick={handleBack}>Back</button>
        
    </div>
  )
}

export default Todo