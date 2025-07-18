import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home'
import Login from './Components/Login'
import Register from './Components/Register'
import Homewrap from './Wrapers/Homewrap'
import Dashboard from './Components/Dashboard'
import Content1 from './Components/Content1'
import Content2 from './Components/Content2'


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
  path:"/",

  children:[
    {
      path:"content1",
      element:<Content1/>
    },
    {
      path:"content2",
      element:<Content2/>
    }
  ]

}
    
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