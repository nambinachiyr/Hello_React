import React, { useReducer ,useEffect} from 'react'

function App() {

    // Using useReducer
    // useReducer is also the state value manageing but this is manage complex values
    let [like,dispatch] = useReducer(reducer,0)
     
    // This function runs when dispatch is called
    // This function has two parameter
    // One is the initial state value,one is action for change the initial value
    // 
    function reducer(state,action){
        // console.log(action); //{type: 'LIKE'}
        // console.log(state)  //0

        if(action.type == "LIKE"){
            // The return statement will be assign to the state value
            // like the setLike()
            return state+1;
        }
    }
    // This is use for console the like increasing
    useEffect(()=>{
        console.log(like)
    },[like])
    function hande(){
        // Call that function inside the click function
        // Put the argument for action parameter
       dispatch({type:"LIKE"});
    }
  return (
   <>
      <h3>Like: {like}</h3>
      <button onClick={hande}>Like</button>
   </>
  )
}

export default App