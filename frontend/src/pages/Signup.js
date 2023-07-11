import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext/AuthContext';
import AdminContext from '../contexts/AdminContext/AdminContext';
import Cookies from 'universal-cookie';
import signupUser from '../utils/ApiFunctions/Users/signupUser';
import convertToBase64 from '../utils/converToBase64';

const SignUpPage = () => {
  
  const authContext = useContext(AuthContext)
  const adminContext = useContext(AdminContext)
  const navigate = useNavigate()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address,setAddress] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("")

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAdressChange = (e) => {
    setAddress(e.target.value)
  }

  const handlePhoneChange = (e) => {
    setPhone(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    
    e.preventDefault();

    const userData = {

      name,
      email,
      address,
      phone,
      password,
      image

    }
    
    const data = await signupUser(userData)
    if (data) {

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
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          {
            // name
          }
          <div className="mb-4">
            <label htmlFor="name" className="block font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          {
            // email
          }
          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          {
            // adress
          }
          <div className="mb-4">
            <label htmlFor="address" className="block font-semibold mb-1">
              Address
            </label>
            <input
              type="text"
              id="address"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
              value={address}
              onChange={handleAdressChange}
              required
            />
          </div>
          {
            // phone
          }
          <div className="mb-4">
            <label htmlFor="phone" className="block font-semibold mb-1">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
              value={phone}
              onChange={handlePhoneChange}
              required
            />
          </div>
          {
            // password
          }
          <div className="mb-4">
            <label htmlFor="password" className="block font-semibold mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          {
            // image
          }
          <div className="mb-4">
            <label htmlFor="houseImage" className="block font-semibold mb-1">
              User picture
            </label>
            <img 
              className="h-40 object-contain"
              src={image} 
              alt="image"/>
            <input
                type="file"
                id="houseImage"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
                onChange={async function (e) {
                    const file = e.target.files[0]
                    const img64 = await convertToBase64(file)
                    setImage(img64)
                }}
            />
          </div>
          {
            // submit
          }
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
          >
            Sign Up
          </button>

        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
