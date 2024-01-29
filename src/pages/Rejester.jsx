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
      .post("https://park-app.liara.run/api/visitors", {
        username: data.username,
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        pass: data.pass,
        age: 150,
        sex: data.sex,
      })
      .then((res) => {
        try {
          if (res.status == 200) {
            navigate("/machine");
          }
        } catch (error) {}
      });
  };
  return (
    <div className=" relative">
      <div className="">
        <img className="w-full" src={signUp} alt="" />
      </div>
      <div className="bg-[#1C0F2A] absolute top-[85%] rounded-t-3xl left-0 w-full pb-16">
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
            name="username"
            control={control}
            defaultValue=""
            render={({ field }) => <Input {...field} />}
          />
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input placeholder="اسم" label="اسم" {...field} />
            )}
          />
          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input placeholder="فامیل" label="فامیل" {...field} />
            )}
          />

          <Controller
            name="age"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input placeholder="سن" label="سن" {...field} />
            )}
          />
          <Controller
            name="sex"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input placeholder="جنسیت" label="جنسیت" {...field} />
            )}
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
            name="pass"
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
