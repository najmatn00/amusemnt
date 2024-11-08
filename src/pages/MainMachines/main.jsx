import { useParams } from "react-router";
import Content from "./content";
import MoreImg from "./lotsOfImg";
import ShowImg from './showImg'
// import arrow from "../../assets/arrow.svg"
import { useEffect, useState } from "react";
import axios from "axios";

const MainMachines = () => {
    const { id } = useParams();
    const [machines, setMachines] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getData=async()=>{
        axios
        .get(`http://localhost:3000/api/Machines/${id}`)
        .then((response) => {
            setMachines(response.data);
            setIsLoading(false);
        })
        .catch((error) => {
            console.error("Error fetching machines:", error);
            setIsLoading(false);
        });
}
  useEffect(()=>{
    getData();
  })
    return (
      <>
        {!isLoading ? (
          <div className="h-screen">
            <img className=" absolute right-4 top-4" src={""} alt="" />
            <ShowImg />
            <MoreImg />
            <Content name={machines.name} des={machines.des} price={machines.price}/>
          </div>
        ) : (
          "Loading"
        )}
      </>
    );
}
 
export default MainMachines;