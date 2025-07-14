import { useRef } from "react"

function App () {

   // This is traditional DOM way
//    function handleLogin(e){
//       e.preventDefault()  
//        let email = document.getElementById("email_id").value
//        let password = document.getElementById("p_w_id").value
//       console.log(email,password)
        
//    }


//   return(
//    <>
//      <h3>Form Login</h3>
//      <form onSubmit={()=>handleLogin(event)}>
//         <input type="email" placeholder="email.." name="email" id="email_id"/>
//         <br/>
//         <br/>
//         <input type="password" placeholder="password.." name="password" id="p_w_id"/>
//         <br/>
//         <br/>
//         <button>Login</button>
//      </form>
//    </>
//   )
  
// We create to element using useRef();
//   in above the handle function & inside the component app
   let email = useRef(null)
   let password = useRef(null)

   // Using redex way in DOM
   function handleLogin(e){
   
      e.preventDefault()
      console.log(password.current.value)  
      console.log(email.current.value)
        
   }

  return(
   <>
     <h3>Form Login</h3>
     <form onSubmit={()=>handleLogin(event)}>
        <input type="email" placeholder="email.." ref={email}/>
        <br/>
        <br/>
        <input type="password" placeholder="password.." ref={password}/>
        <br/>
        <br/>
        <button>Login</button>
     </form>
   </>
  )
}

export default App