// /Bacic
// Parent Cpmponent to Greeting
import Greeting from "./Components/Greetin";

// Passing a property parent to child using Props- method

function App(){
  // // If have only one 
  //  const name = "krish"

  // if have multiple
  // const details = {
  //   name:"nambi",
  //   email:"nambi12@gmail.com",
  //   signedUp:"yes"
  // }

  let name = "Nambi"
  let email = "nambi12@gmail.com"
 return (
  <>
    {/* <Greeting nam = {name}/> */}
    {/* <Greeting details = {details}/> */}
    <Greeting name = {name} email = {email}/>
  </>
 )
}

export default App;
