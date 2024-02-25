import React from 'react'
import {useDispatch,useSelector} from "react-redux"
import Cards from '../components/Cards';
import Navbar from '../components/Navbar';
import Filters from '../components/Filters';
const Home = () => {

  const data=useSelector((state)=>state.warehouse.warehouseData);
  
  return (
    <>
     <Navbar/>
     <Filters/>
    <div className='p-10 px-14 max-md:px-4 flex flex-col items-center'>
   
     
      
      {
        data.map((dt)=>{
          return <Cards {...dt}/>
      })
    }
    
   
    </div>
    </>
  )
}

export default Home
