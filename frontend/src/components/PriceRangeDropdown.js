import React, {useState, useEffect, useContext} from 'react';


//import icons
import {RiWallet3Line, RiArrowDropDownLine, RiArrowUpSLine} from 'react-icons/ri';

//import headless ui
import {Menu} from '@headlessui/react';

//import house context
import { HouseContext } from './HouseContext';

const PriceRangeDropdown = () => {
    const {price, setPrice} = useContext(HouseContext);

    const [isOpen, setIsOpen] = useState(false);

    const prices = [
        {
            value: 'Price range (any)',
        },
        {
            value: '100000 - 150000',
        },
        {
            value: '150000 - 200000',
        },
        {
            value: '200000 - 250000',
        },
        {
            value: '10000 - 30000',
        },
        {
            value: '30000 - 40000',
        },
    ];

  return <Menu as='div' className='dropdown relative p-2 w-full'>
    <Menu.Button onClick={()=> setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
        <RiWallet3Line className='dropdown-icon-primary' />
        <div>
            <div className='text-[15px] font-medium leadiang-tight'>{price}</div>
            <div className='text=[13px]'>Choose price range</div>
        </div>
        {isOpen ? (
            <RiArrowUpSLine className='dropdown-icon-secondary' />
        ) :  (
            <RiArrowDropDownLine className='dropdown-icon-secondary' />
        )}
    </Menu.Button>

    <Menu.Items className='dropdown-menu'>
        {prices.map((price, index)=> {
            return(
                <Menu.Item onClick={()=> setPrice(price.value)} className='cursor-pointer hover:text-violet-700 transition bg-gray-100 p-1 pl-3' as='ul' key={index}>{price.value}</Menu.Item>
            )
        })}
    </Menu.Items>
  </Menu>;
};

export default PriceRangeDropdown;
