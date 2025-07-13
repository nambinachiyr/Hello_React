// /Bacic

import { useState } from "react"


function App () {
     
   // Use multipleStates useState function
  
  let [like,setLike] = useState(0)
  let [dislike,setDislike] = useState(0)

   function likeClick(){
     
      console.log("clicked",like)
      setLike(like+1)
   }
   function dislikeFun(){
      setDislike(dislike+1)
   }
   
  return (
    <>
      <h1>likes & dislike</h1>
      <button onClick={likeClick}>Like {like}</button>
      <button onClick={dislikeFun}>Dislike {dislike}</button>
     

    </>

  )
}

export default App