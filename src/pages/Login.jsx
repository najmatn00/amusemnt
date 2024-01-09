import signUp from "../assets/img/signup.png";
import { Outlet } from "react-router-dom";
const Login = () => {
  return (
    <div className=" relative">
      <div className="">
        <img className="w-full" src={signUp} alt="" />
      </div>
      <div className="borderWelcom absolute top-[89%] h-[64vh]  left-0 w-full  pb-16">
        <div className="flex justify-center text-[40px] text-white my-4">
          <p>ورود</p>
        </div>
        <div className=" text-sm text-white flex justify-center">
          <p>دلمون براتون تنگ شده بود</p>
        </div>
        <Outlet />
        <div className="w-full flex items-center justify-center mt-6">
          <button className="btn bg-violet-500 text-white px-16">ورود</button>
        </div>
        <div className="">
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
