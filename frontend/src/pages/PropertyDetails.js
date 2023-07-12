import React, { useEffect, useState, useContext } from 'react';
import AdminContext from "../contexts/AdminContext/AdminContext"

// import data
import {housesData} from '../data';

// import use params
import { useParams, useNavigate } from 'react-router-dom';

// import icons
import { BiBed, BiBath, BiArea, BiCartAdd, BiEdit } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';


// import link
import {Link} from 'react-router-dom';

import Cookies from 'universal-cookie';
import getSingleHouseData from '../utils/ApiFunctions/HouseData/getSingleHouseData';
import deleteHouseData from "../utils/ApiFunctions/HouseData/deleteHouseData"
import addItemToCard from '../utils/ApiFunctions/Users/addItemToCard';

const PropertyDetails = () => {
    
    const adminContext = useContext(AdminContext)
    const {id} = useParams();
    const [house,setHouse] = useState(null)
    const navigate = useNavigate()

    useEffect(()=>{

        (async ()=>{
            const data = await getSingleHouseData(id)
            if(data){setHouse(data);console.log(data)}
        })()

    },[])

    const handleCartButton = async () => {

        const cookies = new Cookies()
        const user_id = cookies.get("HomeLandUser").id
        const item_id = id
        console.log(user_id,item_id)
        const result = await addItemToCard(user_id,item_id)
        if (result) {

            navigate("/user-page")
            
        }

    }

    return (
        <>
        {
        house?
        <section>
            <div className='container mx-auto min-h-[800px] mb-14'>

                <div className='flex flex-col items-start gap-8 lg:flex-row mt-8'>

                    <div className='max-w-[768px]'>
                        <div className='mb-8'>
                            <img src={house.image} alt="" />
                        </div>
                    </div>

                    <div className='flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8'>

                        <div className='flex items-center gap-x-4 mb-8'>
                            <img src={house.agent.image} alt="" className='w-20 h-20 rounded-full border border-gray-900 object-cover'/>
                            <div>
                                <div className='font-bold text-lg'>{house.agent.name}</div>
                                <Link to='' className='text-violet-700 text-sm'>View Listings</Link>
                            </div>
                        </div>
                        
                        <div className='mb-4 flex gap-x-2'>
                            <div className='bg-green-500 text-white px-3 rounded-full'>{house.type}</div>
                            <div className='bg-violet-500 text-white px-3 rounded-full'>{house.country}</div>
                        </div>

                        <h2 className='text-2xl font-semibold'>
                            {house.name}
                        </h2>

                        <h3 className='text-lg mb-4'>
                            {house.address}
                        </h3>

                        <div className='text-3xl font-semibold text-violet-600'>
                            ${house.price}
                        </div>

                        <div className='flex gap-x-6 text-violet-700 mb-6'>

                            <div className='flex gap-x-2 items-center'>
                                <BiBed className='text-2xl'/>
                                <div>{house.bedrooms}</div>
                            </div>

                            <div className='flex gap-x-2 items-center'>
                                <BiBath className='text-2xl'/>
                                <div>{house.bathrooms}</div>
                            </div>

                            <div className='flex gap-x-2 items-center'>
                                <BiArea className='text-2xl'/>
                                <div>{house.surface}</div>
                            </div>

                        </div>

                        <div className='pb-2'>
                            {house.description}
                        </div>

                        {
                        adminContext.state.adminAuth?
                        <div className='grid grid-cols-2 gap-4'>
                            
                            <Link 
                             to={`/admin/edit-property/${id}`}
                             className="gap-3 cursor-pointer bg-blue-700 hover:bg-blue-600 text-white mt-2 pt-2 pb-2 pl-2 rounded transition flex items-center justify-center">

                                <BiEdit className='text-xl'/>
                                Edit
                            </Link>
                            
                            <div 
                             className="gap-3 cursor-pointer bg-red-700 hover:bg-red-600 text-white mt-2 pt-2 pb-2 pl-2 rounded flex items-center justify-center"
                             onClick={async()=>{

                                const result = await deleteHouseData(id)
                                if (result){
                                    navigate("/")
                                }

                             }}>

                                <AiOutlineDelete className='text-xl'/>
                                Delete
                            </div>
                        </div>
                        :
                        <div
                         className="cursor-pointer bg-blue-700 hover:bg-violet-800 text-white mt-2 pt-2 pb-2 pl-2 rounded transition flex items-center justify-center"
                         onClick={handleCartButton}>

                            <BiCartAdd className='h-[30px] w-[30px] mr-2'/>
                            <span>Add to Cart</span>
                        </div>
                        }

                    </div>
                    
                </div>
            </div>
        </section>
        :<></>
        }
        </>
    );
};

export default PropertyDetails;
