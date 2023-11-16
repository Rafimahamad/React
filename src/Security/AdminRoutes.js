import React from 'react'
import { Outlet } from 'react-router-dom';
import { isAdmin} from '../auth';

const AdminRoutes =() => {

    if(isAdmin()){
   return <Outlet/>
    }
    else
    {
 
    return  <h1>you didn't have a permission to access this page !</h1>;
    }
}

export default AdminRoutes