import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home'
import Login from './Components/Login'
import Register from './Components/Register'
import Homewrap from './Wrapers/Homewrap'
import Dashboard from './Components/Dashboard'
import Todo from './Components/Todo'


let routes = [
    {
        path:"/",
        element:<Homewrap/>,
    children:[
    {
         path:"",
         element:<Home/>,
    },
    {
        path:"login",
        element:<Login/>,
    },
    {
      path:"register",
      element:<Register/>,
    },

  ]
},
{
  path:"dashboard",
  element:<Dashboard/>,
},
 {
      path:"todo",
      element:<Todo/>
  },
    
]
let router = createBrowserRouter(routes,{
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,

  },
})
const App = () => {
  return (
    <RouterProvider router={router} 
    future={{ v7_startTransition: true,}}/>
  )
}

export default App