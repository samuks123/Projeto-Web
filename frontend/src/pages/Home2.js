import React from 'react';
import { useEffect, useState, useContext } from 'react';
import convertToBase64 from '../utils/converToBase64';

//import components
import AuthContext from "../contexts/AuthContext/AuthContext"
import Banner from '../components/Banner';
import HouseList from '../components/HouseList2';
import { BsHouseAddFill } from "react-icons/bs"




// import api functions
import getAllHouseData from '../utils/ApiFunctions/HouseData/getAllHouseData';
import getSingleHouseData from '../utils/ApiFunctions/HouseData/getSingleHouseData';
import createHouseData from '../utils/ApiFunctions/HouseData/createHouseData';
import deleteHouseData from '../utils/ApiFunctions/HouseData/deleteHouseData';
import updateHouseData from '../utils/ApiFunctions/HouseData/updateHouseData';
import AdminContext from '../contexts/AdminContext/AdminContext';
import { Link } from 'react-router-dom';


const Home2 = () => {

  const authContext = useContext(AuthContext)
  const adminContext = useContext(AdminContext)
  const [houseData,setHouseData] = useState(null)
  const [imgTest,setImgTest] = useState(null)

  useEffect (()=>{

    const fetchHouseData = async()=>{
      const response = await fetch("/api/housedata")
      const json = await response.json()
      if (response.ok) {
        setHouseData(json)
        console.log("@fetchHouseData: success")
      }else{
        console.log("failed to fetch data")
      }
    }

    fetchHouseData()

  },[])

  return (
  <div className='min-h-[1800px]'>
    {
      authContext.state.auth?
      <>
      <h1
       className='text-4xl font-bold text-center m-8 mb-12'>

        Properties
      </h1>

      {
        adminContext.state.adminAuth?
        <Link
         to="/admin/add-property/">
          
          <div 
           className='w-[300px] gap-3 cursor-pointer bg-green-700 hover:bg-green-600 text-white mb-6 p-3 rounded transition flex items-center justify-center m-auto'>

            <BsHouseAddFill/>
            Add new property
          </div>

        </Link>
        :
        <></>
      }
      
      <HouseList />
      </>
      :
      <>
      <Banner />
      </>
    }
  </div>
  );
};

export default Home2;

