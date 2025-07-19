
import { data, Link, useNavigate } from 'react-router'

import '../style/DashboardStyle.css'

import { useEffect, useState } from 'react';


const Dashboard = () => {

    // This statement is always be out of the function 
    const navigate = useNavigate();

    function handleLoggedOut(){
        
        confirm("Are you Sure?") && navigate("/login");
    }

    // Create state value
    let [todo,setTodo] = useState({});

    // Retrive the data form mockAPI
    useEffect(()=>{
         fetch('https://686be60114219674dcc688b8.mockapi.io/todoApp')
         .then(response => response.json())
         .then(data=>setTodo(data))
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