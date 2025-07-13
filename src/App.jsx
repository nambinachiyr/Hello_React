// /Bacic

import { useState } from "react"

function App () {

    let [reaction,setReaction] = useState([0,0])
    console.log(reaction)
    function likeFun(){
      setReaction([reaction[0]+1,reaction[1]])
    }
    function dislikeFun(){
     setReaction([reaction[0],reaction[1]+1])
    }

   return(
      <>
        <button onClick={likeFun}>Like {reaction[0]}</button> <button onClick={dislikeFun}>DisLike {reaction[1]}</button>
      </>
   )
}

export default App