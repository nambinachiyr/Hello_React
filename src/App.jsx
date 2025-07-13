// /Bacic

import { useState } from "react"

function App () {
   let [count,setCount] = useState(0)
   function re_render(){
       setCount(count+1)
   }
   fetch(`https://686be60114219674dcc688b8.mockapi.io/todoApp`)
   .then(res=>res.json())
   .then(data=>console.log(data))
   return(
     <>
       <h1>Fetch Data in console</h1>
       <button onClick={re_render}>re-render</button>
     </>
   )
}

export default App