import React from "react";
import { useNavigate } from "react-router-dom";

const Cards = (props) => {
    const navigate=useNavigate()

    const ShowDetails=()=>{
        navigate(`/${props.id}`)
    }
  return (
    <div className="flex items-center justify-between p-2 m-4 bg-gray-50 w-2/3 max-sm:w-full  border-[1px] border-solid border-gray-400 rounded-lg md:flex-row flex-col ">
      <div className="px-4">
        <h2 className="text-xl font-semibold text-red-500">
          {props.name}{" "}
          {props.is_live ? (
            <>
              <i className="fa-regular fa-circle-dot text-green-700"></i>
            </>
          ) : null}
        </h2>
        <p>city : {props.city}</p>
        <p>space_available :{props.space_available}</p>
        <p>{props.cluster}</p>
      </div>
      <div className="p-4 font-medium text-red-500 cursor-pointer" onClick={ShowDetails}>
        <p>Details</p>
      </div>
    </div>
  );
};

export default Cards;
