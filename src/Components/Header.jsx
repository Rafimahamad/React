import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { isLoggedIn, doLogout, isAdmin } from '../auth';
import {AiOutlineLogin,AiOutlineEdit,AiOutlineLogout,AiOutlineHome ,AiFillHome } from "react-icons/ai";



const Header = () => {



  const handleLogout = () => {
   toast.success('loggedout Successfully !...')
    doLogout();
  }

 let user=JSON.parse(sessionStorage.getItem('data'));

  useEffect(()=>{
 

  },[])

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark navColor">
        <div className="container-fluid">

          {!isLoggedIn() && <Link className="navbar-brand" to='/' > <span> <AiOutlineHome /> Electricity Billing System</span> </Link>}

          {isLoggedIn() && <Link className="navbar-brand" to='/auth/dashboard/view' > <AiFillHome/> Electricity Billing System</Link>}

          <div className=" navbar-nav nav-item ml-auto" id="navbarSupportedContent">
          {!isLoggedIn() && <Link className="nav-link active " to={'/signup'} > < AiOutlineEdit /> signUp</Link>}

            {!isLoggedIn() && <Link className="nav-link active " to='/login' > <AiOutlineLogin/> Login</Link>}

           
            {isLoggedIn() && isAdmin() && <h5 className="nav-link active" > Welcome Admin : {user.email}</h5>}

            {isLoggedIn() && !isAdmin() && <h5 className="nav-link active" >Welcome : {user.email}</h5>}



            {isLoggedIn() && <Link className="nav-link active" onClick={handleLogout} > <AiOutlineLogout /> logout</Link>}

          </div>
        </div>

      </nav>
    </div>
  )
}
export default Header;