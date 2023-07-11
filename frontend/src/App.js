import React from 'react';
import { useEffect, useState, useContext } from 'react';

//import routes and route
import { Routes, Route } from 'react-router-dom';

//import components
import Header from './components/Header';
import Footer from './components/Footer';

//import pages
import Home from './pages/Home';
import Home2 from './pages/Home2';
import PropertyDetails from './pages/PropertyDetails';

//import context providers
import AuthContextProvider from './contexts/AuthContext/AuthContextProvider';
import AdminContextProvider from './contexts/AdminContext/AdminContextProvider';
import EditProperty from './components/EditProperty';
import AddProperty from './components/AddProperty';
import UserPage from './pages/UserPage';


const App = () => {

  return (
  <div className='max-w-[1440px] mx-auto bg-white'>
    <AdminContextProvider>
    <AuthContextProvider>

    <Header />
    <Routes>

      <Route path='/' element={<Home2 />} />
      <Route path='/old' element={<Home />} />
      <Route path='/property/:id' element={<PropertyDetails />} />
      <Route path='/admin/edit-property/:id' element={<EditProperty />}/>
      <Route path='/admin/add-property' element={<AddProperty />}/>
      <Route path='/user-page/' element={<UserPage />}/>
      
    </Routes>
    <Footer />

    </AuthContextProvider>
    </AdminContextProvider>
  </div>
  );
};

export default App;
