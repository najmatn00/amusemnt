import Input from "../../ui/input";

const loginUserName = () => {
  return (
    <>
      <Input type="text" placeholder="نام کاربری" label="نام کاربری" />
      <Input type="password" placeholder="رمز عبور" label="رمز عبور" />
    </>
  );
};

export default loginUserName;
