import { useEffect, useState } from "react";
import { useLoaderData, useLocation, useNavigate, useParams } from "react-router";
import instance from "../instances/instance";

const Todo = () => {
  // Use Navigate function for navigate the page
  const navi = useNavigate()
    let todos = useLoaderData()
    // Function For Back Button
    function handleBack(){
      // Back to Navigate the page to dashboard
      navi(-1);
    }
    function handleDelete(){
      confirm("Delete it?") && instance.delete(`/todoApp/${todos.id}`)
      .then(alert("Deleted !!!..."))

      // navigate to dashboard page
      navi("/dashboard")
    }
  return (
    <div>
        <h2>Todos</h2>
        
           <p>Id: {todos.id}</p>
           <p>Type: {todos.type}</p>
           <p>Description: {todos.description}</p>
           <p>Amount: {todos.amount}</p>
           <p>Date: {new Date(todos.createdAt).toLocaleDateString() }</p>
           <button onClick={handleBack}>Back</button>
           <button onClick={handleDelete}>Delete</button>
        
    </div>
  )
}

export default Todo