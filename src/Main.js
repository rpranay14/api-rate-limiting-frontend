import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import NavbarComponent from './Components/NavbarComponent';
import SignIn from './Pages/SignIn';
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard';
import ProtectedRoute from './Components/ProtectedRoute';
import Pricing from './Pages/Pricing';
import SuccessPage from './Pages/SuccessPage';



const Main = () => {
  return (
    <>
    <NavbarComponent/>
    <Routes>
     
        <Route path='/' element={<HomePage/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route element={<ProtectedRoute/>}>
        <Route path='/restorephotos' element={<Dashboard/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path="/success" element={<SuccessPage/>}/>
        </Route>
    </Routes>
    </>
  )
}

export default Main