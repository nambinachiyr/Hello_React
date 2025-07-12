// Child component of App
// function Greeting(props){
// destructruce
function Greeting({name,email}){
//    console.log(nam) -> {nam: 'krish'} - 
    //  console.log(props)
     /* 
     {details: {…}}
     details: {name: 'nambi', email: 'nambi12@gmail.com', signedUp: true}
     [[Prototype]]: Object
     */
    console.log(name)
    let num1 = 15;
    let num2 = 17;
    let age = ()=>num1+num2;
   return (
    <>
    {/* Like to access js Object */}
      {/* <h1>Hello,{props.details.name} !</h1>
      <p>My email is : {props.details.email}</p>
      <p>Logged In : {props.details.signedUp}.</p> */}

      {/* if we want destrcture */}
      <h1>Hello,{name} !</h1>
      <p>My email is : {email}</p>
      {/* <p>Logged In : {props.details.signedUp}.</p>  */}
    </>
   )
}

export default Greeting;