import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home'
import Login from './Components/Login'
import Register from './Components/Register'


let routes = [
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/Login",
        element:<Login/>
    },
    {
      path:"/Register",
      element:<Register/>
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