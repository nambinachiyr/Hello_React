import React from 'react'
import { useNavigate } from 'react-router'

const Login = () => {
    // Navigate tool
    const navi = useNavigate()

    function handleLogin(event){
        event.preventDefault()

        navi("/dashboard")        
    }
  return (
    <div>
        <h3>Login</h3>
        <form action="" onSubmit={handleLogin}>
            <input type="email" placeholder='Email...' />
            <br />
            <br />
            <input type="password" name="" id="" placeholder='password...'/>
            <br />
            <br />
            <button type='submit'>Login</button>
            <p>Don't have Account? Create New <a href='/register'>Register</a></p>
        </form>
    </div>
  )
}

export default Login