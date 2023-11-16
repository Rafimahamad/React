import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { isLoggedIn } from '../auth';

const ProtectedRoute=() =>{
   

    if(isLoggedIn()){
   return <Outlet/>
    }
    else
    {
 
    return <Navigate to={"/login"}  />;
    }



  
}

export default ProtectedRoute;