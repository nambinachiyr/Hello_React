import React, { useReducer} from 'react'
import { initialValue, reducer } from './Reducer/R_out_of_comp'

function App() {
    //  Separete function
    let [reaction,dispatch] = useReducer(reducer,initialValue)  
  return (
   <>
      <h3>Like: </h3>
      <button onClick={()=>dispatch({type:"LIKE"})}>Like {reaction.like}</button>
      <button onClick={()=>dispatch({type:"DISLIKE"})} style={{margin:10}}>disLike {reaction.dislike}</button>

   </>
  )
}

export default App