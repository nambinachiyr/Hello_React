import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";

const Todo = () => {
  // Use Navigate function for navigate the page
  const navi = useNavigate()

  // WE use /todo/1 this
  // This is for ULRParams
  // /For this we should change the path
  // also we change the dashborad URL Link component
  const {id } = useParams()

  // This is for query params like /todo?id = 1
    // const location = useLocation();
    // const query = new URLSearchParams(location.search)
  
    let [todos,setTodos] = useState({})   

    useEffect(()=>{
      // In URL Params we dont this
        //  let todoID = query.get("id");
        // we directly passthe id value
        fetch(`https://686be60114219674dcc688b8.mockapi.io/todoApp/${id}`)
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