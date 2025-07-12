// Child component of App
// function Greeting(props){

import ComB from "./comB";

// function ComA(props){

// This is destructrce
function ComA({name}){
   console.log(name)
   //  Nambi Nachiyar
   // {name: 'Nambi Nachiyar'}
    return(
      // <ComB props = {props.name}/>
      <ComB name = {name}/>
    )
}

export default ComA;