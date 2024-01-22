import { useForm, Controller } from "react-hook-form";
import Input from "../../ui/input";
import axios from "axios";
const LoginPhone = () => {
  let { control, handleSubmit } = useForm();
  let submit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit(submit)}>
        <Controller
          name="phone"
          control={control}
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
          render={({ field }) => (
            <Input
              type="password"
              placeholder="کد تایید"
              label="کد تایید"
              {...field}
            />
          )}
        />
        <div className="w-full flex items-center justify-center mt-6">
          <button className="btn bg-violet-500 text-white px-36 py-4">ورود</button>
        </div>
      </form>
    </>
  );
};

export default LoginPhone;
