import { Link, useNavigate } from 'react-router-dom';
import React, { useCallback, useState, useContext } from 'react';
import AuthContext from '../contexts/AuthContext/AuthContext';
import Cookies from 'universal-cookie';

const LoginPage  = () => {

  const authContext = useContext(AuthContext)
  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (event) => {

    event.preventDefault();
    const cookies = new Cookies()
    cookies.set("HomeLandUser",{name:"JohnDoe",email:email})
    cookies.set("HomeLandAuth",true)
    authContext.setAuth(true)
    authContext.setUserInfo({name:"JohnDoe",email:email})
    navigate("/")

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
                    type="email"
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
