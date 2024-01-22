import Content from "./content";
import MoreImg from "./lotsOfImg";
import ShowImg from './showImg'
// import arrow from "../../assets/arrow.svg"
import { useState } from "react";

const MainTour = () => {

  
    return ( <div className="h-screen">
        <img className=" absolute right-4 top-4" src={""} alt="" />
        <ShowImg />
        <MoreImg  />
        <Content/>
    </div> );
}
 
export default MainTour;