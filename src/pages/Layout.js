import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import { setwareahouseData } from '../Redux/warehouseSlice';


const Layout = () => {
    const {id}=useParams();
    const dispatch=useDispatch()
    const data=useSelector((state)=>state.warehouse.warehouseData);

    const propeties=data.filter((dt)=>dt.id==id);
    console.log(propeties);
    const [city,setcity]=useState(propeties[0].city);
    const [cluster,setcluster]=useState(propeties[0].cluster);
    const [space,setSpace]=useState(propeties[0].space_available);
    const [type,setType]=useState(propeties[0].type);
    const [editing,setEditing]=useState(false);

    const saveData=()=>{
      setEditing(false);
      const newData=data.map((dt)=>{
        if(dt.id===propeties[0].id){
          return {...dt,city:city ,type:type,space_available:space ,cluster:cluster }
        }
        else return dt;
      })
      dispatch(setwareahouseData(newData));
    }
  
    

  return (
    <>
    <Navbar/>
    <div className=' h-screen bg-center w-full flex justify-center items-center blur-4'>
        <div className='flex gap-6 p-10 w-2/3 max-md:w-full max-md:m-4 bg-white rounded-xl  shadow-xl border-[0.5px] border-solid border-gray-100 max-md:flex-col'>
      <div className='w-1/2 object-cover max-md:w-full'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7XvTCRVjqaJ0_rE6FlWk2yCaUHLPzbUEoxg&usqp=CAU" alt="warehouse img" className='w-full'/>
      </div>
      <div className='w-1/2 max-md:w-full'>
        <div className='flex justify-between items-center'><p className='text-2xl font-semibold'>{propeties[0].name}</p> <p className='text-sm text-green-600 cursor-pointer'>{editing? <span onClick={saveData} >save</span>:<span onClick={()=>setEditing(true)}>Edit</span>}</p></div>
        <div className=' flex items-center justify-between '>
            {
                propeties[0].is_registered? <span className='text-gray-500'><i className="fa-solid fa-registered text-red-600"></i> registered</span>:<span className='text-gray-500'>Not registerd </span>
            }
            {
                propeties[0].is_live? <span className='text-gray-500'> <i className="fa-regular fa-circle-dot text-green-700"></i> Live</span>:<span className='text-gray-500'><i className="fa-regular fa-circle-xmark text-red-600"></i> Not Live</span>
            }
        </div>
       { !editing?
        <div>
        <p><span className='font-medium '>City:</span>{propeties[0].city}</p>
        <p><span className='font-medium '>Id: </span>{propeties[0].id}</p>
        <p><span className='font-medium '>Space_available: </span> {propeties[0].space_available}</p>
        <p><span className='font-medium '>Cluster:</span> {propeties[0].cluster}</p>
        <p><span className='font-medium '>Type: </span>{propeties[0].type}</p>
        </div>
       :
        <div>
        <p><span className='font-medium '>City:</span><input type="text" value={city}  onChange={(e)=>setcity(e.target.value)}/></p>
        <p><span className='font-medium '>Space_available:</span><input type="text" value={space}  onChange={(e)=>setSpace(e.target.value)}/></p>
        <p><span className='font-medium '>Cluster:</span><input type="text" value={cluster}  onChange={(e)=>setcluster(e.target.value)}/></p>
        <p><span className='font-medium '>Type:</span><input type="text" value={type}  onChange={(e)=>setType(e.target.value)}/></p>
        
        </div>
        }
        
      </div>
    </div>
    </div>
    </>
  )
}

export default Layout
