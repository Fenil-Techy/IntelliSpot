import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AppLayout } from "../layout/AppLayout"
import { Prompt } from "../features/prompt/Prompt"
import { Home } from "../features/home/Home"
import { Tools } from "../features/Tools/Tools"
import { ToolDetails } from "../features/Tools/components/ToolDetails"


const router=createBrowserRouter([{
  path:"/",
  element:<AppLayout/>,
  children:[
    {
      path:"/",
      element:<Home/>

    },
    {
      path:"/tools",
      element:<Tools/>

    },
    {
      path:"/prompt",
      element:<Prompt/>
    },
    {
        path: "/tool/:id",
        element: <ToolDetails/>
    },
    
  ]
}])

export const App=()=>{

  return (
  <RouterProvider router={router}>
    <AppLayout/>
  </RouterProvider>

  )

}