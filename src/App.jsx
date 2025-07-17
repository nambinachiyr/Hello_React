import React, { useReducer} from 'react'
import { initialValue, reducer } from './Reducer/R_out_of_comp'

function App() {
    //  Separete function
    let [like,dispatch] = useReducer(reducer,initialValue)  
  return (
   <>
      <h3>Like: {like}</h3>
      <button onClick={()=>dispatch({type:"LIKE"})}>Like</button>
      <button onClick={()=>dispatch({type:"DISLIKE"})} style={{margin:10}}>disLike {like}</button>

   </>
  )
}

export default App