// /Bacic

import { useEffect, useState } from "react"

function App () {
   // This is for set the data to UI
   // Create an empty array for putting all datas
   // set the data in state
   let [todos,setTodos] = useState([])
  
 
  useEffect(()=>{
      fetch(`https://686be60114219674dcc688b8.mockapi.io/todoApp`)
      .then(res=>res.json())
      .then(data=>setTodos(data))
  },[])
  console.log(todos)
   return(
     <>
       <h1>Fetch Data in console </h1>
       <ul>
         {
            // key is manutary for react to find that particular element
            // for managing purpose
            todos.map(todos => <li key={todos.id}>{todos.description}</li>)
         }
       </ul>
     </>
   )
}

export default App