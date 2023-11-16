import React from 'react'
import { useLocation } from 'react-router-dom'
import { isLoggedIn } from '../auth';
import Base from '../Components/Base'

const PageNotFound = () =>{
    let url=useLocation();
  return (
    <Base>
    <div className='App'>
<h1> 404 - Page Not Found</h1>
<p>the page at {url.pathname} could not be found</p>

{
  isLoggedIn() &&

  <h1>Server Error !</h1>
}

    </div>
    </Base>
  )
}

export default PageNotFound