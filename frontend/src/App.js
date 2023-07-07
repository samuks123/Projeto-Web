import React from 'react';
import { useEffect, useState, useContext } from 'react';

//import routes and route
import { Routes, Route } from 'react-router-dom';

//import components
import Header from './components/Header';
import Footer from './components/Footer';

//import pages
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';

//import authentication context provider
import AuthContextProvider from './contexts/AuthContext/AuthContextProvider';
import AuthContext from './contexts/AuthContext/AuthContext';

import Cookies from 'universal-cookie';

const App = () => {

  return (
  <div className='max-w-[1440px] mx-auto bg-white'>
    <AuthContextProvider>

    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/property/:id' element={<PropertyDetails />} />      
    </Routes>
    <Footer />

    </AuthContextProvider>
  </div>
  );
};

export default App;
