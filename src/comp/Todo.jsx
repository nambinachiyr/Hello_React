import React from 'react'

function Todo({todo}) {
  /* this is if else statement
  
  if(todo.type==="Income"){
        return (
            <li>{todo.description} {"✅"}</li>
        )
   }else{
    return(
        <li>{todo.description} {"❌"}</li>
    )
   }
  */
//  This is ternary Operator
//  return todo.type === "Income"? <li>{todo.description} {"✅"}</li>:<li>{todo.description} {"❌"}</li>

// Using Logical Operator
 return todo.type === "Income"&& <li>{todo.description} {"✅"}</li>||<li>{todo.description} {"❌"}</li>

}

export default Todo