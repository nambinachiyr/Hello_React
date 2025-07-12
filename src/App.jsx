// /Bacic
// Parent Cpmponent to Greeting
import Greeting from "./Components/Greetin";


function App(){
    // To create a like callback function for getting the name and email
  function childToParent(name,email){
    console.log("function from parent !!!")
    console.log(name, email)
  }
  
  return(
    // to set the data for passing the child component through like a attribute
    <Greeting  childToParent = {childToParent}/>
    )
}

export default App;
