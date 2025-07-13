// /Bacic

import { useEffect, useState } from "react"

function App () {
   let ele = [];
   ele.push(<h1>hello</h1>,<p>hi</p>)
   console.log(ele)
  return(
   <div>
   {
    ele 
   }
   </div>
  )
}

export default App