import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AppLayout } from "../layout/AppLayout"
import { Prompt } from "../features/prompt/Prompt"
import { Home } from "../features/home/Home"
import { CategoryTool } from "../features/Tools/components/CategoryTool"
import { Tools } from "../features/Tools/Tools"

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
        path: "/category/:category",
        element: <CategoryTool />
      }
  ]
}])

export const App=()=>{

  return (
  <RouterProvider router={router}>
    <AppLayout/>
  </RouterProvider>

  )

}