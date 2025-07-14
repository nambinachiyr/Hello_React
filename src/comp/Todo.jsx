import React from 'react'
import "/src/css.css"
function Todo({todo}) {
 
 return (
    <>
      <ul>
        <li className='list'>
            <input type="checkbox" className='inp' checked = {todo.type==="Expense"}/> 
            <p style={{textDecoration:todo.type === "Expense"?"line-through":"none"}}>{todo.description}</p>
        </li>
      </ul>
    </>
 )

}

export default Todo