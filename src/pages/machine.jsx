import { useForm } from "react-hook-form";
import logo from "../assets/img/LOGO.png";
import m from "../assets/img/mach.png";
import m1 from "../assets/img/products-fairground-rides 1.png";
import sorsore from "../assets/img/sorsore.png";

import rides from "../assets/img/rides.png";
import boy from "../assets/img/boy.png";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Machine = () => {
  let { handleSubmit, register } = useForm();
  const [machines, setMachines] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch all machines from the API
    axios
      .get("http://localhost:3000/api/Machines")
      .then((response) => {
        setMachines(response.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching machines:", error);
        setIsLoading(false);
      });
  }, []);

  let onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-[#1C0F2A] h-screen w-full">
      <div className="flex items-center flex-row-reverse justify-between px-6">
        <div className="">
          <img src={logo} alt="" />
        </div>
        <div className="">
          <img src={boy} alt="" />
        </div>
      </div>
      <div className="flex justify-center mt-2">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="text-right w-[82vw] px-4 border py-2 bg-white rounded-3xl placeholder:text-[#00425A] wmajik"
            type="text"
            placeholder="!اینجا بگرد"
            {...register("search")}
          />
        </form>
      </div>
      <div className="text-right px-8 text-[20px] py-4 wmajik">
        <p>:بازی های مناسب شما</p>
      </div>
      <div className="flex flex-row flex-nowrap gap-6">
        {isLoading ? (
          <p className="text-center w-full text-white">Loading...</p>
        ) : (
          machines.map((machine) => (
            <div key={machine.id} className="flex gap-16 w-full justify-center">
              <Link to={`/mainmachine/${machine.id}`}>
                <div className="flex gap-16 w-full justify-center">
                  <img className="rounded-xl" src={m} alt="" />
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Machine;

