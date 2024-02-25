import React from 'react'
import { UseDispatch, useDispatch } from 'react-redux'
import data from "../Redux/warehouseData.json"
import { setwareahouseData } from '../Redux/warehouseSlice';
import { useState } from 'react';

const Navbar = () => {

  const dispatch=useDispatch();
  const [inputText,setInputText]=useState("");

  const searchWarehouse=()=>{
        const searchResult=data.filter((dt)=>dt.name.toLowerCase().includes(inputText.toLowerCase()));
        dispatch(setwareahouseData(searchResult));
  }
  return (
    <div className='p-2 shadow-md px-6 flex justify-between bg-gray-50 max-md:flex-col'>
     <div>
     <i className="fa-solid fa-warehouse text-red-500 text-2xl "></i> 
     <span className='font-bold text-lg'>WareHouse</span>
     </div>
     <div>
        <input type='text' className='p-1' placeholder='search warehouse..' value={inputText} onChange={(e)=>setInputText(e.target.value)}/>
        <button className='bg-red-600 text-white p-1 px-4' onClick={searchWarehouse}>search</button>
     </div>
    </div>
  )
}

export default Navbar
