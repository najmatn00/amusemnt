import welcom from "../assets/img/welcom.png";
import bg from "../assets/img/Rectangle.png";
import { NavLink } from "react-router-dom/dist";
import { Link } from "react-router-dom/dist";
const Welcom = () => {
  return (
    <div className=" relative ">
      <div className="">
        <img className="w-full" src={welcom} alt="" />
      </div>
      <div className="borderWelcom absolute top-[89%]  left-0 w-full bg-[#1C0F2A]">
        <div className="flex justify-center text-white font-normal text-[40px] mt-8 ">
          <h2 className="wmajik">!خوش آمدید</h2>
        </div>
        <div className="flex justify-center items-center mx-4 text-center text-white text-sm line-[21.93px] my-10">
          <p>
            شهربازی، جایی که شادی و هیجان به دیدار شما می‌آید! با ورود به این
            دنیای جذاب، مطمئناً قلب شما به آهنگ شادی می‌پردازد. اینجا جایی است
            که هر کودک یا کودک بزرگی می‌تواند لحظاتی پر از خنده و سرگرمی را
            تجربه کند.
          </p>
        </div>
        <div className="flex justify-center flex-col gap-4 items-center ">
          <Link
            className=" py-4 px-36  text-3xl text-white rounded-[15px] border-[#A465EA] border-[2.5px] buttonW wmajik "
            to={"/signup"}
          >
            ثبت نام
          </Link>
          <Link
            className=" py-4 px-40  text-3xl text-white rounded-[15px] border-[#A465EA] border-[2.5px] wmajik"
            to={"/login"}
          >
            ورود
          </Link>
        </div>
        <div className="flex justify-center text-white my-16 text-[11px] anjoman">
          <p>توسعه و نگهداری توسط تیم ما</p>
        </div>
      </div>
    </div>
  );
};

export default Welcom;
