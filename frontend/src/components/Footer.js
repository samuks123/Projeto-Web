import React from 'react';

// import icons
import {FaGithub, FaFacebook, FaTwitter} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-black py-8 text-center text-white'>
        <div className='container mx-auto'>
            <div className='flex gap-x-6 text-violet-700 mb-6'>
                <div className='flex gap-x-2 items-center'>
                    <FaGithub className='text-2xl'/>
                    <a href="https://github.com/samuks123/Projeto-Web">GitHub</a>
                </div>
                <div className='flex gap-x-2 items-center'>
                    <FaFacebook className='text-2xl'/>
                    <a href="https://www.facebook.com">Facebook</a>
                </div>
                <div className='flex gap-x-2 items-center'>
                    <FaTwitter className='text-2xl'/>
                    <a href="https://www.twitter.com">Twitter</a>
                </div>
            </div>
        </div>
    </footer>
  )
};

export default Footer;
