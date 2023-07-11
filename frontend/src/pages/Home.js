import React from 'react';
import { useEffect, useState } from 'react';
import convertToBase64 from '../utils/converToBase64';

//import components
import Banner from '../components/Banner';
import HouseList from '../components/HouseList';

// import api functions
import getAllHouseData from '../utils/ApiFunctions/HouseData/getAllHouseData';
import getSingleHouseData from '../utils/ApiFunctions/HouseData/getSingleHouseData';
import createHouseData from '../utils/ApiFunctions/HouseData/createHouseData';
import deleteHouseData from '../utils/ApiFunctions/HouseData/deleteHouseData';
import updateHouseData from '../utils/ApiFunctions/HouseData/updateHouseData';


const Home = () => {

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

  const handleImageSubmit = (e) => {
    e.preventDefault()
  }
  const handleFileUpload = async (e) => {
    const file = e.target.files[0]
    const base64 = await convertToBase64(file)
    console.log(file)
    console.log(base64)
    setImgTest(base64)
  }

  return (
  <div className='min-h-[1800px]'>
    {
      imgTest?
      <img src={imgTest} alt=''></img>
      :
      <h1>no image</h1>
    }
    <form onSubmit={handleImageSubmit}>
      <label htmlFor="file-upload">
        
      </label>
      <input
       type='file'
       label="Image"
       name="myFile"
       id='file-upload'
       accept='.jpeg, .png, .jpg'
       onChange={(e)=>handleFileUpload(e)}
      />
    </form>

    <div style={{display:"flex",flexDirection:"column"}}>
      <button onClick={()=>{getAllHouseData().then(data=>console.log(data))}}>getAllHouseData</button>
      <button onClick={()=>{getSingleHouseData("64a6ef43f15864e508a77b52").then(data=>console.log(data))}}>getSingleHouseData</button>
      <button onClick={()=>{
        createHouseData({}).then(data=>{console.log(data)})
      }}>createHouseData</button>
      <button onClick={()=>{
        deleteHouseData("64ac40f7ad0019f8a128f392").then(data=>console.log(data))
      }}>deleteHouseData</button>
      <button onClick={()=>{
        updateHouseData("64a6ef43f15864e508a77b52",{address:"UPDATED, BABY!"}).then(data=>console.log(data))
      }}>updateHouseData</button>
    </div>
    <Banner />
    <HouseList />
  </div>
  );
};

export default Home;

