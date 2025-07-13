// /Bacic

import { useState } from "react"


function App () {
   // let count = 0 -> this is ordinary variable so this is not to allows to change the UI element
    
   // Use useState function
   let [count,setCount] = useState(0)

   function handleClick(){
      // count ++:Not work in UI
      
      console.log("clicked",count)
      setCount(count+1)
   }
   function decreaseFun(){
      console.log(count,"decrease")
      setCount(count-1)
   }
   function resetFun(){
      console.log(count,"reset")
      setCount(count=0)
   }
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={handleClick}>Increase</button>
      <button onClick={decreaseFun}>Decrease</button>
      <button onClick={resetFun}>reset</button>   

    </>

  )
}

export default App