// /Bacic

import { useState } from "react"

// Single state

//one  useState function with mulitiple variable create
function App () {

    let [reaction,setReaction] = useState({
      like:0,
      dislike:0
    })
    console.log(reaction)
    function likeFun(){
      // If we have two variable it is ok but whatif if we have 10 vari
      // setReaction({like:reaction.like+1,dislike:reaction.dislike})

      // this way
      setReaction({...reaction,like:reaction.like+1})
      // console.log(reaction.like,"- Likes",reaction.dislike,"- Dislike")
    }
    function dislikeFun(){
      // setReaction({dislike:reaction.dislike+1, like:reaction.like})

       setReaction({...reaction,dislike:reaction.dislike+1})
      // console.log(reaction.like,"- Likes",reaction.dislike,"- Dislike")
    }

   return(
      <>
        <button onClick={likeFun}>Like {reaction.like}</button> <button onClick={dislikeFun}>DisLike {reaction.dislike}</button>
      </>
   )
}

export default App