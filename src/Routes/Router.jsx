import { createBrowserRouter } from "react-router";
import MyLayouts from "../Layouts/MyLayouts";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import AddFoods from "../Pages/AddFoods";
import AvailableFoods from "../Pages/AvailableFoods";



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
      {
        path: 'addfoods',
        element: (
          <PrivateRoute>
            <AddFoods></AddFoods>
          </PrivateRoute>
        ),
      },
      {
        path:'availablefoods',
        Component:AvailableFoods,

      },

    ]
  },
]);



export default router;