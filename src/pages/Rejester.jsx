import signUp from "../assets/img/signup.png";
const Rejester = () => {
  return (
    <>
      <div className=" relative">
        <div className="">
          <img className="w-full" src={signUp} alt="" />
        </div>
        <div className="borderWelcom absolute top-[89%]  left-0 w-full h-screen">
          <div className="flex justify-center text-[40px] text-white my-4">
            <p>ثبت نام</p>
          </div>
          <div className=" text-sm text-white flex justify-center">
            <p>!دنیایی از شگفتی های سرشار از آدرنالین را کشف کن</p>
          </div>
          <div className="text-right text-[13px]">
            <p>نام کاربری</p>
          </div>
          <div className="flex justify-center flex-col items-center">
            <input
              className="inputR w-[89%] py-4 rounded-[8px] "
              type="text"
              placeholder=""
            />
          </div>
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
    </>
  );
};

export default Rejester;
