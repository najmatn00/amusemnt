import { Navigate } from "react-router-dom";

const IsLogin = ({ children }) => {
  let token = localStorage.getItem("token");

  if (token) return children;

  return (
    <>
      <Navigate to={"/login"} />
    </>
  );
};

export default IsLogin;
