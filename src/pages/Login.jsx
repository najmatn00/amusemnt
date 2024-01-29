import signUp from "../assets/img/signup.png";
import { Outlet } from "react-router-dom";
import login from "../assets/img/login.png";
const Login = () => {

  return (
    <div className=" relative">
      <div className="">
        <img className="w-full" src={login} alt="" />
      </div>
      <div className="bg-[#1C0F2A] absolute top-[85%] h-[64vh] rounded-t-3xl  left-0 w-full  pb-16">
        <div className="flex justify-center text-[40px] text-white my-4 ">
          <p className="wmajik">ورود</p>
        </div>
        <div className=" text-sm text-white flex justify-center">
          <p className="wmajik">(:دلمون براتون تنگ شده بود</p>
        </div>
        <Outlet />
     
      </div>
    </div>
  );
};

export default Login;
