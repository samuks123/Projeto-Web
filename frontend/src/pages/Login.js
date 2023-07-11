import { Link, useNavigate } from 'react-router-dom';
import React, { useCallback, useState, useContext } from 'react';
import AuthContext from '../contexts/AuthContext/AuthContext';
import AdminContext from '../contexts/AdminContext/AdminContext'
import Cookies from 'universal-cookie';
import loginUser from '../utils/ApiFunctions/Users/loginUser';

const LoginPage  = () => {

  const authContext = useContext(AuthContext)
  const adminContext = useContext(AdminContext)
  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (event) => {

    event.preventDefault();
    const data = await loginUser({email,password})
    if (data){

      // set authentication cookies

      const cookies = new Cookies()
      cookies.set("HomeLandUser", {

        token: data.token,
        id: data.user._id,
        name: data.user.name,
        email: data.user.email,
        phone: data.user.phone,
        address: data.user.address,

      })
      
      cookies.set("HomeLandAuth",true)
      
      // update authentication context
      
      authContext.setAuth(true)
      authContext.setUserInfo({

        token: data.token,
        id: data.user._id,
        name: data.user.name,
        email: data.user.email,
        phone: data.user.phone,
        address: data.user.address,
        image: data.user.image
        
      })

      // update admin authentication context

      if(data.user.admin) {

        adminContext.setAdminAuth(true)

      }


      // redirect

      navigate("/")
      
    }
    

  }

  return (
    <section>
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 shadow-md rounded-md">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email" className="block font-semibold mb-1">
                    Email
                    </label>
                    <input
                    type="text"
                    id="email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
                    value={email}
                    onChange = {(event) => setEmail(event.target.value)}
                    required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block font-semibold mb-1">
                    Password
                    </label>
                    <input
                    type="password"
                    id="password"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
                    value={password}
                    onChange = {(event) => setPassword(event.target.value)}
                    required
                    />
                    <div className="mt-2 text-sm">
                    <Link to="/forgot-password" className="text-blue-500 hover:underline">
                        Forgot my password
                    </Link>
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
                >
                    Log In
                </button>
                </form>
            </div>
        </div>
    </section>
  );
};

export default LoginPage;
