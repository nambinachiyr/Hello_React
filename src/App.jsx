import React, { useEffect, useRef, useState } from 'react'

function App() {
    
   let [refresh,setRefresh] = useState(1)
   let refreshB = ()=>{
       setRefresh(refresh+1)
       console.log(refresh,"refresh count")
   }

    let count = 0
   const normal = ()=>{
       count = count+1;
       console.log(count,"normal-count")
   }

   let count1 = useRef(0)
   const useref = ()=>{
      count1.current = count1.current+1
      console.log(count1.current,"ref-count")
   }
  

   let [count2,setCount2] = useState(0)
   const use = ()=>{
       setCount2(count2+1);
       console.log(count2,"state-count")
   }
  return (
    <div >
       <h1>Refresh the Componetent</h1>
       <button onClick={refreshB}>Refresh</button>  <button onClick={normal}>N-Increase</button>  <button onClick={useref}>UR-Increase</button>  <button onClick={use}>US-Increase</button>
       <br/>     
       <br/>     
       <span>(Ordinary Variable - {count})</span> | <span>(UseRef variable - {count1.current})</span> | <span>(Usestate variable - {count2})</span>
       </div>
  )
}

export default App