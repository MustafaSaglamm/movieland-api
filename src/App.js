import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './Home';
import Footer from './Footer';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Account from './components/Account';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {


  return (
    <>
    <div className="App  bg-zinc-900 ">
     
    <AuthContextProvider>
     <Routes>

   <Route path='/' element={ <Home />} />
   <Route path='/signin' element={<Signin />} />
   <Route path='/signup' element={<Signup/>} />
   <Route path='/account' element={<ProtectedRoute><Account/></ProtectedRoute>} />
   
  
      </Routes>  
      </AuthContextProvider>

     



    </div>
    </>
  ); 
}

export default App;
