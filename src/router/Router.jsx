import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Auth/login";
import Register from "../pages/Auth/register"; // Utilisez "register" au lieu de "Register"
import Tasks from "../pages/Tasks/Tasks";
import Logout from "../pages/Auth/Logout";
import Root from "../pages/Root";
import ProtectedRoute from "../utils/ProtecteRoute";
import Create from "../pages/Tasks/Create";
// import Edit from "../pages/Expense/Edit";

const RouterConfig = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />, 
      },
      {
        path: "/expenses",
        element: <ProtectedRoute><Tasks /></ProtectedRoute>,
      },
      {
        path: "/create",
        element: <ProtectedRoute><Create /></ProtectedRoute>,
      },
      {
        path: "/expenses/:expenseId/edit",
        element: <ProtectedRoute><Edit /></ProtectedRoute>,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
    ],
  },
]);

export default RouterConfig;
