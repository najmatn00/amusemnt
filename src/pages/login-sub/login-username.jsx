import { useForm, Controller } from "react-hook-form";
import Input from "../../ui/input";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const loginUserName = () => {
  let { control, handleSubmit } = useForm();
  let navigate = useNavigate();
  let onSubmit = async (data) => {
    await axios
      .post("http://127.0.0.1:5000/login", {
        username: data.username,
        password: data.pws,
      })
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          localStorage.setItem("token", res.data.access_token);
          navigate("/")
        } else {
        }
      });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="username"
        control={control}
        render={({ field }) => (
          <Input
            type="text"
            placeholder="نام کاربری"
            label="نام کاربری"
            {...field}
          />
        )}
      />
      <Controller
        name="pws"
        control={control}
        render={({ field }) => (
          <Input
            type="password"
            placeholder="رمز عبور"
            label="رمز عبور"
            {...field}
          />
        )}
      />
      <div className="w-full flex items-center justify-center mt-6 ">
        <button
          type="submit"
          className="btn bg-violet-500 text-white px-36  text-[30px] wmajik "
        >
          ورود
        </button>
      </div>
    </form>
  );
};

export default loginUserName;
