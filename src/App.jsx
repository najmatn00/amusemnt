import { useRoutes } from "react-router"
import Router from "./router"
import Welcom from "./pages/Welcom";
import Rejester from "./pages/Rejester";
import Login from "./pages/Login";


function App() {
  let router = useRoutes(Router);
  return (
    <>
      {router}
      {/* <Welcom /> */}
      {/* <Login/> */}
    </>
  )
}

export default App
