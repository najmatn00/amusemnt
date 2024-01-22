import { useForm } from "react-hook-form";
import logo from "../assets/img/LOGO.png";
import m from "../assets/img/mach.png";
import boy from "../assets/img/boy.png";
const Machine = () => {
    let { handleSubmit, register } = useForm();
    let onSubmit = (data) => {
        console.log(data);
    }
  return (
    <div className="bg-[#1C0F2A] h-screen w-full">
      <div className="flex items-center flex-row-reverse justify-between px-6">
        <div className="">
          <img src={logo} alt="" />
        </div>
        <div className="">
          <img src={boy} alt="" />
        </div>
      </div>
      <div className=" flex justify-center mt-2  ">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="text-right w-[82vw] px-4  border py-2 bg-white rounded-3xl placeholder:text-[#00425A] wmajik"
            type="text"
            placeholder="!اینجا بگرد"
            {...register}
          />
        </form>
      </div>
      <p className="text-[20px] text-right px-8 py-4 wmajik">
        :محبوب ترین بازی ها{" "}
      </p>
      <div className="flex gap-16 w-full justify-center ">
        <img className=" rounded-xl" src={m} alt="" />
        <img className=" rounded-xl" src={m} alt="" />
      </div>
      <div className="text-right px-8 text-[20px] py-4 wmajik">
        <p>:بازی های مناسب شما</p>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex gap-16 w-full justify-center ">
          <img className=" rounded-xl" src={m} alt="" />
          <img className=" rounded-xl" src={m} alt="" />
        </div>
        <div className="flex gap-16 w-full justify-center ">
          <img className=" rounded-xl" src={m} alt="" />
          <img className=" rounded-xl" src={m} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Machine;