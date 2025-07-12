// Basic 
function Greeting(){
  return(
    <>
       <h1>Heloo</h1>
       <p>Your name?</p>
    </>
  )
}

function App(){
  // This is one way
  // ----------------
  /*return <div>
    <h1>Heloo</h1>
    <p>This is the para</p>
  </div>*/
// ____________________________
  // This is another way 
  // --------------------
  /*return (
    <div>
      <h1>Helo</h1>
      <p>This is a para</p>
    </div>
  )*/
  // ______________________________
  // This is another way this is called fragment tag
  /*return (
    <>
       <h1>Helo</h1>
       <p>This is para</p>
    </>
  )*/


    // Creating one more component
    return(
      // Call that component like functions in js
      <> {/* This tag is important*/}
        <Greeting />
         {/* We can call multiple time as we want */}
        <Greeting />
        <Greeting />
     </>
    )
}

export default App;
