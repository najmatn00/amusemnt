import image1 from "../../assets/img/1.png"

import {useEffect} from "react";
const MoreImg = () => {
    let imagePack=["image1","image2","image3","image4"];
    let clickHandler=(e)=>{
    }
    useEffect(()=>{
        setInterval(()=>{imagePack.map(()=>
            {})}
    ,500)}
    ,[])
    return ( 
       <>
             {<div className=" absolute left-0 top-14 w-1/3  flex flex-col items-center z-50 justify-center gap-8">
                 {imagePack.map((item)=>{
                    return <img onClick={clickHandler} className="w-20 h-20 rounded-2xl border-4 border-white" src={image1}></img>
                })}
            </div>}
       </>
     );
}
 
export default MoreImg;