function Greeting(){

    let num1 = 15;
    let num2 = 17;
    let age = ()=>num1+num2;
   return (
    <>
      <h1>Hello</h1>
      <p>What is your age?</p>

      <p>My age is {age()}</p>
    </>
   )
}

export default Greeting