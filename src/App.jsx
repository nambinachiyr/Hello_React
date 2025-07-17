import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

let router = createBrowserRouter([
    {
        path:"/",
        element:<h1>Heelo World</h1>
    },
    {
        path:"/about",
        element:<h1>About US </h1>
    }

])
const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App