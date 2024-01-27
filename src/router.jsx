import { Children } from "react";
import Login from "./pages/Login";
import Rejester from "./pages/Rejester";
import Welcom from "./pages/Welcom";
import LoginPhone from "./pages/login-sub/login-phone";
import LoginUserName from "./pages/login-sub/login-username";
import IsLogin from "./utility/isLogin";
import Machine from "./pages/machine";
import MainTour from "./pages/tour/main";
let Router = [
  {
    path: "/",
    element: <Welcom />,
  },
  {
    path: "/test",
    element: <h1>salam</h1>,
  },
  {
    path: "/signup",
    element: <Rejester />,
  },
  {
    path: "/home",
    element: <h1>slaam</h1>,
  },
  {
    path: "/machine",
    element: <Machine/>,
  },
  {
    path: "/login",
    element: <Login />,
    children: [
      { path: "", element: <LoginUserName /> },
      { path: "phone", element: <LoginPhone /> },
    ],
  },
];
export default Router;
