import { Children } from "react";
import Login from "./pages/Login";
import Rejester from "./pages/Rejester";
import Welcom from "./pages/Welcom";
import LoginPhone from "./pages/login-sub/login-phone";
import LoginUserName from "./pages/login-sub/login-username";
import IsLogin from "./utility/isLogin";
import MainTour from "./pages/tour/main";
let Router = [
  {
    path: "/",
    element: <Welcom />,
  },
  {
    path: "/test",
    element: <MainTour />,
  },
  {
    path: "/signup",
    element: <Rejester />,
  },
  {
    path: "/home",
    element: (
      <IsLogin>
        <h1>slaam</h1>
      </IsLogin>
    ),
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
