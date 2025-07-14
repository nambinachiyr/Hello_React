
// This is controled component

import { useEffect, useState } from "react"

// Because we are using the state to manage the input values
function App () {
 
   const [email,setEmail] = useState('')
   const [password,setPassword] = useState('')

   function handleLogin(e){
      e.preventDefault()  
      console.log(email,password)
        
   }

// just for checking purpose
   //  useEffect(()=>{
   //        console.log(email)
   //    },[email]) 
  return(
   <>
     <h3>Form Login</h3>
     <form onSubmit={()=>handleLogin(event)}>
        <input type="email" placeholder="email.." name="email" value={email} onChange={e=>(setEmail(e.target.value))}/>
        <br/>
        <br/>
        <input type="password" placeholder="password.." name="password"value={password} onChange={e=>setPassword(e.target.value)} />
        <br/>
        <br/>
        <button>Login</button>
     </form>
   </>
  )
}

export default App