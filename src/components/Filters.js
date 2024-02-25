import React, { useState } from "react";
import data from "../Redux/warehouseData.json"
import { useDispatch } from "react-redux";
import {setwareahouseData} from "../Redux/warehouseSlice"

const Filters = () => {

  const [city,setcity]=useState("");
  const [space,setSpace]=useState("2");
  const [cluster,setcluster]=useState("");
  const dispatch=useDispatch();

  const filterData=(e)=>{
           e.preventDefault();
           const newData=data.filter((dt)=> dt.city.includes(city) && dt.space_available>=parseInt(space) && dt.cluster.includes(cluster));
           dispatch(setwareahouseData(newData));

  }
  return (
    <div className='bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwGhWFUH5X1y2cdW5iNCSu6IJkVlprQ4mYvms4mo7yXkA6sMwVBIK8a7-8PajD0c3D3N4&usqp=CAU")] h-64 max-md:h-auto w-full bg-no-repeat bg-cover bg-center bg-fixed'>
      <div className="flex justify-center h-full items-center flex-wrap">
        <form className="bg-white w-fit p-4 flex gap-2 flex-wrap m-4" onSubmit={filterData}>
          <div className="md:border-r-[1px] max-md:border-b-[1px]  border-solid border-gray-400">
            <p>City</p>
            <input type="text" placeholder="Enter city" className="p-1 max-md:w-full" value={city} onChange={(e)=>setcity(e.target.value)}/>
          </div>
          <div className="md:border-r-[1px] max-md:border-b-[1px] border-solid border-gray-400">
            <p>Space required</p>
            <input type="text" placeholder="space required" className="p-1 max-md:w-full" value={space} onChange={(e)=>setSpace(e.target.value)}/>
          </div>
          <div>
            <p>Cluster</p>
            <input
              type="text"
              placeholder="Enter cluster name"
              className="p-1 max-md:w-full"
              value={cluster} onChange={(e)=>setcluster(e.target.value)}
            />
          </div>

          <button className="bg-red-600 text-white p-2 px-4" type="submit">submit</button>
        </form>
      </div>
    </div>
  );
};

export default Filters;
