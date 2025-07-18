
import { Link } from 'react-router'

const Home = () => {
  return (
    <div>
        
        <p>Welcome to My App </p>
       
       <li><Link to ='/Register'>Register</Link></li>
       <li><Link to ='/Login'>Login</Link></li>
    </div>
  )
}

export default Home