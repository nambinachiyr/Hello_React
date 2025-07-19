
import { data, Link, useLoaderData, useNavigate } from 'react-router'

import '../style/DashboardStyle.css'

import { useEffect, useState } from 'react';


const Dashboard = () => {

    // This statement is always be out of the function 
    const navigate = useNavigate();

   const todo = useLoaderData();

    function handleLoggedOut(){
        
        confirm("Are you Sure?") && navigate("/login");
    }

    // Create state value

    // Retrive the data form mockAPI
    useEffect(()=>{
        
    },[])
    useEffect(()=>{
      console.log(todo)
    },[todo])
    
  return (
    <>
  <div className='dashboard'>
    <div className='sideBar'>
        <h2>Dashboard</h2>
        {/* One step for open in another page */}
        {/* <p><Link to={"/content1"}>Content-1</Link></p>
        <p><Link to={"/content2"}> Content-2</Link></p> */}
        {
          todo.length > 0 ? (
          <ul>
            {
              todo.map(td=> (// NOTE: dont use {}<- this use this->() if you use {} set it return
               <li key = {td.id}>
                {/* This is for query */}
                {/* <Link to={`/todo?id=${td.id}`}> */}
                <Link to={`/todo/${td.id}`}>
                 {td.description}
                </Link>
               </li>
              ))
            }
          </ul>):
          (
            <ul>No fetching data</ul>
          )
        }       
        <button onClick={handleLoggedOut}>Logged out</button>
    </div>
    {/* <div className='content'> */}
      {/* Open in this page */}
       {/* <Outlet/> */}
    {/* </div> */}
 </div>
  {/* <Todo/> */}
  </>
  )
}

export default Dashboard