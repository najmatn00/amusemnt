import CardTour from "./card";
import Servise from "./servise";

const Content = () => {
  let setShowMoreImg = true;
  return (
    <div className=" relative text-right bg-[#1C0F2A] rounded-t-2xl  -translate-y-[-1rem] px-4 flex flex-col gap-6 h-[58%] overflow-auto">
      <div className=" mt-6">
        <h1 className="text-3xl text-white font-black text-right">
          {" "}
          چرخ و فلک{" "}
        </h1>
      </div>

      <p className="text-white">
        طبیعت زیبای جزیره هرمز واقع در نزدیکی قشم لورم ایپسوم متن ساختگی با
        تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است
      </p>
      <Servise />
    </div>
  );
};

export default Content;
