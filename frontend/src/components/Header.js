import React, { useState } from 'react';

//import link
import {Link, Routes, Route} from 'react-router-dom';
import Cookies from 'universal-cookie';

// import auth context
import { useContext, useEffect } from 'react';
import AuthContext from '../contexts/AuthContext/AuthContext';
import AdminContext from '../contexts/AdminContext/AdminContext'

//import logo
import Logo from '../assets/img/logo.svg';
import doge from '../assets/img/doge.jpg';

import LoginPage from '../pages/Login'
import SignUpPage from '../pages/Signup';
import UserPage from '../pages/UserPage';

const Header = () => {

    const authContext = useContext(AuthContext)
    const adminContext = useContext(AdminContext)

    return (
    <header className='border-b'>
        <div className='py-2 container mx-auto flex justify-between items-center'>

            {/* logo*/}
            <Link to='/'>
                <img src={Logo} alt='' />
            </Link>
            {/* buttons */}
            

            {
                adminContext.state.adminAuth?
                <div className='flex items-center justify-center gap-4'>
                    <div className={`cursor-pointer rounded-full bg-green-500 h-[20px] w-[20px]`}/>
                    <div className='text-xl'>Admin</div>
                </div>
                :
                <></>
            }

            {
            
            authContext.state.userInfo?

            <div className='flex gap-3'>
                
                <Link className='w-16 h-16 bg-black px-1 py-1 mt-1 rounded-full flex' to='/user-page'>

                    <img 
                     className='rounded-full' 
                     src={authContext.state.userInfo.image} 
                     alt=''/>

                </Link>

                <div className='flex flex-col'>
                    <p>{authContext.state.userInfo.name}</p>
                    <p>{authContext.state.userInfo.email}</p>
                    <button className='bg-gray-200 text-black w-20 rounded-md hover:text-violet-800 hover:bg-gray-300 mt-1' onClick={()=>{authContext.logout()}}>Logout</button>
                </div>

            </div>
            
            :
            
            <>
            <div className='flex items-center gap-6'>
                <Link className='hover:text-violet-900 transition' to='/Login'>
                    Log In
                </Link>
                <Link className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition' to='/Signup'>
                    Sign up
                </Link>
            </div>
            </>

            }


        </div>
        <Routes>
            <Route path='Login' element={<LoginPage />} />
            <Route path='Signup' element={<SignUpPage />} />
            <Route path='User' element={<UserPage />} />
        </Routes>
    </header>
    );
    };

export default Header;


