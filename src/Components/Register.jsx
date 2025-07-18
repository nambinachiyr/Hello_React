import { useNavigate } from "react-router";


const Register = () => {
    // Create Navigate function
    const navigate = useNavigate()

    function handleRegister(event){
        event.preventDefault();
        alert("Registered Successfully!..");
        // Navigate to dashboard
        navigate("/dashboard")
    }
  return (
    <div>
        <h4>Register Form</h4>
        <form action="" onSubmit={handleRegister}>
            <input type="email" placeholder="Email...." />
            <br/>
            <br/>
            <input type="password" placeholder="password" />
            <br/>
            <br/>
            <button type="submit">Register</button>
            <p>Already have account? <a href="/login">Login</a></p>
        </form>
    </div>
  )
}

export default Register