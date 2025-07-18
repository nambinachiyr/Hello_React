
import { Link, useNavigate } from 'react-router'

const Dashboard = () => {

    // This statement is always be out of the function 
    const navigate = useNavigate();

    function handleLoggedOut(){
        
        confirm("Are you Sure?");
        navigate("/login")
    }
  return (
    <div>
        <h2>Dashboard</h2>
        <p><Link to={"/content1"}>Content-1</Link></p>
        <p><Link to={"/content2"}> Content-2</Link></p>
       
        <button onClick={handleLoggedOut}>Logged out</button>
    </div>

  )
}

export default Dashboard