import { createBrowserRouter } from "react-router";
import MyLayouts from "../Layouts/MyLayouts";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";



const router = createBrowserRouter([
  {
    path: "/",
    Component:MyLayouts,
    children:[
        {
            index:true,
            Component:Home,
        },
        {
        path: "login",
        Component: Login,

      },
      {
        path: "register",
        Component: Register,
      },

    ]
  },
]);



export default router;