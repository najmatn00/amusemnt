import Login from "./pages/Login";
import Rejester from "./pages/Rejester";
import Welcom from "./pages/Welcom";

let Router = [
  {
    path: "/",
    element: <Welcom />,
  },
  {
      path: "/signup",
      element:<Rejester/>
  },
  {
    path:"/login",
    element:<Login/>,
  },
];
export default Router;