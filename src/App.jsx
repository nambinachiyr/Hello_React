
// This is Uncontroled component
// Because we are not using the state to manage the input values
function App () {

   function handleLogin(e){
      e.preventDefault()
      console.log(e.target.email.value,e.target.password.value)

   }
  return(
   <>
     <h3>Form Login</h3>
     <form onSubmit={()=>handleLogin(event)}>
        <input type="email" placeholder="email.." name="email"/>
        <br/>
        <br/>
        <input type="password" placeholder="password.." name="password"/>
        <br/>
        <br/>
        <button>Login</button>
     </form>
   </>
  )
}

export default App