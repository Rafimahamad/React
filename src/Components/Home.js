import React, { useEffect } from 'react';
import Base from './Base';
import { Link } from 'react-router-dom';
// import bulb from '../assets/bulb.png'



const Home = () =>{

  useEffect(()=>{
document.title='home'
  },[])

  return (

<Base>
<div >
<div className="App-header"> 
   {/* <img src={bulb} className='App-logo' alt="" /> */}
  

  <h1>ELECTRICTY BILLING SYSTEM</h1>
   <Link className='btn btn-outline-light'  to='/login' > START </Link>

   </div>
    </div>
</Base>
   

  )
}

export default Home;