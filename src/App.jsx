import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'


let routes = [
    {
        path:"/",
        element:<h1>Heelo World</h1>
    },
    {
        path:"/about",
        element:<h1>About US </h1>
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