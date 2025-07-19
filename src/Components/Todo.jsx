import { useEffect, useState } from "react";
import { useLoaderData, useLocation, useNavigate, useParams } from "react-router";

const Todo = () => {
  // Use Navigate function for navigate the page
  const navi = useNavigate()
    let todos = useLoaderData()
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