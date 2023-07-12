import React, {useState, useEffect, useContext} from 'react';


//import icons
import {RiMapPinLine, RiArrowDropDownLine, RiArrowUpSLine} from 'react-icons/ri';

//import headless ui
import {Menu} from '@headlessui/react';

//import house context
import { HouseContext } from './HouseContext';

const CountryDropdown = () => {
    const {country, setCountry, countries} = useContext(HouseContext);

    const [isOpen, setIsOpen] = useState(false);

  return <Menu as='div' className='dropdown relative p-2 w-full'>

        <Menu.Button onClick={()=> setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
            <RiMapPinLine className='dropdown-icon-primary' />
            <div>
                <div className='text-[15px] font-medium leadiang-tight'>{country}</div>
                <div className='text=[13px]'>Select your place</div>
            </div>
            {isOpen ? (
                <RiArrowUpSLine className='dropdown-icon-secondary' />
            ) :  (
                <RiArrowDropDownLine className='dropdown-icon-secondary' />
            )}
        </Menu.Button>

        <Menu.Items className='dropdown-menu'>
            {countries.map((country, index)=> {
                return(
                    <Menu.Item onClick={()=> setCountry(country)} className='cursor-pointer hover:text-violet-700 transition bg-gray-100 p-1 pl-3' as='ul' key={index}>{country}</Menu.Item>
                )
            })}
        </Menu.Items>

  </Menu>;
};

export default CountryDropdown;