// Child component of App
// function Greeting(props){

function Greeting(props){
     const name = "Nambi"
     let email = "nambi12@gmail.com"
     console.log(props)
    //  Set the property
     props.childToParent(name,email)
     return(
     <>
        <h1>hello,{name}</h1>
        <h4>email : {email}</h4>

     </>
    )
}

export default Greeting;