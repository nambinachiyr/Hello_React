import React from 'react'
import { Link } from 'react-router'

const Home = () => {
  return (
    <div>
        <h3>Go to</h3>
        {/* This is flickering the full page it is not smooth */}
       {/* <li><a href='/Register'>Register</a></li>
       <li><a href='/Login'>Login</a></li> */}

       {/* Use Link Component for smooth application */}
       <li><Link to ='/Register'>Register</Link></li>
       <li><Link to ='/Login'>Login</Link></li>
    </div>
  )
}

export default Home