import CardTour from "./card";
import Servise from "./servise";

const Content = ({name,des,price}) => {
  let setShowMoreImg = true;
  return (
    <div className=" relative text-right bg-[#1C0F2A] rounded-t-2xl  -translate-y-[-1rem] px-4 flex flex-col gap-6 h-[58%] overflow-auto">
      <div className=" mt-6">
        <h1 className="text-3xl text-white font-black text-right">
          {name}
        </h1>
      </div>

      <p className="text-white">
       {des}
      </p>
      <Servise price={price}/>
    </div>
  );
};

export default Content;
