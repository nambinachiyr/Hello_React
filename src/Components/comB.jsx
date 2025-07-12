import ComC from "./comC";

// function ComB(nam){
function ComB({name}){
    console.log(name)
    //  Nambi Nachiyar
    // {props: 'Nambi Nachiyar'}
    return(
      <ComC name = {name}/>
    )
}

export default ComB;