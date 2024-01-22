import { useNavigate } from "react-router-dom";
import signUp from "../assets/img/signup.png";
import Input from "../ui/input";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";

const Rejester = () => {
  let { control, handleSubmit } = useForm();
  let navigate = useNavigate();
  let submitHandler = async (data) => {
    console.log(data);
    await axios
      .post("http://127.0.0.1:5000/register", {
        username: data.user,
        password: data.pws,
      })
      .then((res) => {
        try {
          if (res.status == 200) {
            navigate("/");
          }
        } catch (error) {}
      });
  };
  return (
    <div className=" relative">
      <div className="">
        <img className="w-full" src={signUp} alt="" />
      </div>
      <div className="bg-[#1C0F2A] absolute top-[85%] rounded-t-3xl left-0 w-full  h-[64vh] pb-16">
        <div className="flex justify-center text-[40px] text-white my-4">
          <p className="wmajik">ثبت نام</p>
        </div>
        <div className=" text-sm text-white flex justify-center">
          <p className="wmajik">
            !دنیایی از شگفتی های سرشار از آدرنالین را کشف کن
          </p>
        </div>
        <form action="" onSubmit={handleSubmit(submitHandler)}>
          <Controller
            name="user"
            control={control}
            defaultValue=""
            render={({ field }) => <Input {...field} />}
          />

          <Controller
            name="phone"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                type="number"
                placeholder="شماره تماس"
                label="شماره تماس"
                {...field}
              />
            )}
          />
          <Controller
            name="pws"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                type="password"
                placeholder="رمز عبور"
                label="رمز عبور"
                {...field}
              />
            )}
          />
          <div className=" flex items-start justify-center mt-10">
            <button
              type="submit"
              className="btn bg-violet-500 text-white px-36 py-4 wmajik text-[25px]"
            >
              ثبت نام
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Rejester;
