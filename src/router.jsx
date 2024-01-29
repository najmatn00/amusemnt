import Login from "./pages/Login";
import Rejester from "./pages/Rejester";
import Welcom from "./pages/Welcom";
import LoginPhone from "./pages/login-sub/login-phone";
import LoginUserName from "./pages/login-sub/login-username";
import Machine from "./pages/machine";
let Router = [
  {
    path: "/",
    element: <Welcom />,
  },
  {
    path: "/mainmachine",
    element: <MainMachines />,
  },
  {
    path: "/signup",
    element: <Rejester />,
  },
  {
    path: "/su",
    element: <Su />,
  },
  {
    path: "/home",
    element: <h1>home</h1>,
  },
  {
    path: "/machine",
    element: <Machine />,
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
