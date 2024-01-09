const Input = ({
  label = "نام کاربری",
  placeholder = "@yourname",
  type = "text",
  ...props
}) => {
  return (
    <>
      <div className="text-right p-3 w-full">
        <p className="text-md  text-white">{label}</p>
      </div>
      <div className="flex justify-center flex-col items-center">
        <input
          {...props}
          className="inputR text-right focus:outline-none focus:border-none text-white p-4 w-[86%] rounded-[8px] "
          type={type}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default Input;
