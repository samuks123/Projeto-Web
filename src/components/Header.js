import React from 'react';

//import link
import {Link, Routes, Route} from 'react-router-dom';

//import logo
import Logo from '../assets/img/logo.svg';
import doge from '../assets/img/doge.jpg';

import LoginPage from '../pages/Login'
import SignUpPage from '../pages/Signup';
import UserPage from '../pages/UserPage';

const Header = () => {
  return (
    <header className='py-6 mb-12 border-b'>
        <div className='container mx-auto flex justify-between items-center'>
            {/* logo*/}
            <Link to='/'>
                <img src={Logo} alt='' />
            </Link>
            {/* buttons */}
            <div className='flex items-center gap-6'>
                <Link className='hover:text-violet-900 transition' to='/Login'>
                    Log In
                </Link>
                <Link className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition' to='/Signup'>
                    Sign up
                </Link>
                <Link className='w-20 h-20 bg-black px-1 py-1 rounded-full' to='/User'>
                    <img className='rounded-full' src={doge} alt=''/>
                </Link>
            </div>
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
