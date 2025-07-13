// /Bacic

import { useEffect, useState } from "react"

function App () {
   let [count,setCount] = useState(0)
   function re_render(){
       setCount(count+1);
       console.log(count)
   }
   
   // This effect run after the first render
   //1. this is first way with depentancy []
//   useEffect(()=>{
//       fetch(`https://686be60114219674dcc688b8.mockapi.io/todoApp`)
//       .then(res=>res.json())
//       .then(data=>console.log(data))
//   },[])
// ------------------------------------------------------------------------
//2. This second way without dep-[];
// this is will also like without useEffect
//   useEffect(()=>{
//       fetch(`https://686be60114219674dcc688b8.mockapi.io/todoApp`)
//       .then(res=>res.json())
//       .then(data=>console.log(data))
//   })
// -------------------------------------------------------------------------
// 3.set the depentacy array when it run inside the []
  useEffect(()=>{
      fetch(`https://686be60114219674dcc688b8.mockapi.io/todoApp`)
      .then(res=>res.json())
      .then(data=>console.log(data))
  },[count])
   return(
     <>
       <h1>Fetch Data in console</h1>
       <button onClick={re_render}>re-render</button>
     </>
   )
}

export default App