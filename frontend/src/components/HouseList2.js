import React, {useContext, useEffect, useState} from 'react';
import {HouseContext} from './HouseContext';
import {Link} from 'react-router-dom';

import {ImSpinner2} from 'react-icons/im';

import House from './House';

import getAllHouseData from '../utils/ApiFunctions/HouseData/getAllHouseData';

const HouseList = () => {

    const [houseList,setHouseList] = useState(null)

    useEffect(()=>{
        (async()=>{
            const data = await getAllHouseData()
            if (data){setHouseList(data)}
            else {setHouseList([])}
        })()
    },[])

    if(!houseList){
        return(<ImSpinner2 className='mx-auto animate-spin text-violet-700 text-4xl mt-[200px]' />);
    }

    if(houseList && houseList.length == 0){
        return <div className='text-center text-3xl text-gray-400 mt-48'>Sorry, nothing found</div>
    }

    return <section className='mb-20'>
        <div className='container mx-auto'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
                {
                    houseList?
                    houseList.map(house=>(
                        <Link to={`/property/${house._id}`} key= {house._id}>
                            <House house={house} />
                        </Link>
                    ))
                    :
                    <ImSpinner2 className='mx-auto animate-spin text-violet-700 text-4xl mt-[200px]' />
                }
            </div>
        </div>
    </section>;
};

export default HouseList;
