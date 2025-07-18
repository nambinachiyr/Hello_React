import { Link, Outlet } from "react-router"

const Homewrap = () => {
    
  return (
    <div>
         
        <h3><Link to={"/"}>My App</Link></h3>
        <Outlet></Outlet>
       
    </div>
  )
}

export default Homewrap