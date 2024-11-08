import { Link } from "react-router-dom";

const Servise = ({price}) => {
  return (
    <>
      <div className=" mb-16 absolute flex items-center  w-full  justify-between bottom-0 right-0">
        <Link
          to="/su"
          className="border text-cente  flex items-center justify-center  h-16 px-16 rounded-r-lg text-[#2F2A52] bg-[#EDDEF3]"
        >
          خرید بلیط
        </Link>
        <div className=" flex items-center justify-between px-4">
          <p className="mr-2 mt-2 flex gap-2">
            <span className="mt-2 text-sm font-light text-white">
              هزار تومان
            </span>
            <span className="text-3xl font-black gradient-text text-[#FFE3A7]">
              {price}
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Servise;
