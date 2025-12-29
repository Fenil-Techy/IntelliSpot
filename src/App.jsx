import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AppLayout } from "./components/layout/AppLayout"
import { Prompt } from "./pages/Prompt"
import { Review } from "./pages/Review"
import { Home } from "./pages/Home"
import { ToolList } from "./pages/Toollist"
import { CategoryTool } from "./components/ui/CategoryTool"

const router=createBrowserRouter([{
  path:"/",
  element:<AppLayout/>,
  children:[
    {
      path:"/",
      element:<Home/>

    },
    {
      path:"/toollist",
      element:<ToolList/>
    },
    {
      path:"/review",
      element:<Review/>
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