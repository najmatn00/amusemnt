import { Link } from "react-router-dom";
import signUp from "../assets/img/signup.png";
import Input from "../ui/input";
import { useEffect, useState } from "react";
import axios from "axios";
const Rejester = () => {
  // useEffect(async () => {
  //   await axios.post("http://127.0.0.1:5000/register", {
  //     username: "username",
  //     password: "password",
  //   }).then((res)=>{
  //     try {
  //       if (res.status){
  //       }
  //     } catch (error) {

  //     }
  //   });

  // }, []);
  return (
    <div className=" relative">
      <div className="">
        <img className="w-full" src={signUp} alt="" />
      </div>
      <div className="borderWelcom absolute top-[89%]  left-0 w-full  pb-16">
        <div className="flex justify-center text-[40px] text-white my-4">
          <p>ثبت نام</p>
        </div>
        <div className=" text-sm text-white flex justify-center">
          <p>!دنیایی از شگفتی های سرشار از آدرنالین را کشف کن</p>
        </div>
        <form action="">
          <Input />
          <Input type="number" placeholder="شماره تماس" label="شماره تماس" />
          <Input type="password" placeholder="رمز عبور" label="رمز عبور" />
          <div className="w-full flex items-center justify-center mt-6">
            <button className="btn bg-violet-500 text-white px-16">
              sign up
            </button>
          </div>
        </form>
        {/* <div className="flex justify-center flex-col gap-4 items-center ">
              <Link
                className=" py-4 px-36  text-3xl text-white rounded-[15px] border-[#A465EA] border-[2.5px] buttonW"
                to={"/signup"}
              >
                ثبت نام
              </Link>
              <Link
                className=" py-4 px-40  text-3xl text-white rounded-[15px] border-[#A465EA] border-[2.5px]"
                to={"/login"}
              >
                ورود
              </Link>
            </div> */}
      </div>
    </div>
  );
};

export default Rejester;
