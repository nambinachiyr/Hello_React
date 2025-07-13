// /Bacic

import { useEffect, useState } from "react"
import Todo from "./comp/todo";

function App () {
   
   // Set the State element to fetch the UI
   const [todos,setTodos] = useState([]);

   useEffect(()=>{
      fetch("https://686be60114219674dcc688b8.mockapi.io/todoApp")
      .then(response => response.json())
      .then(data => setTodos(data))
   },[])
   console.log(todos)

   return(
      <>
        <h1>Todo</h1>
        <ul>
         {
            todos.map((todo)=> (
               // console.log(todo.id)
               <Todo 
               key = {todo.id}
               todo= {todo}
                
               />
            ))
         }
        </ul>
      </>
   )
}

export default App