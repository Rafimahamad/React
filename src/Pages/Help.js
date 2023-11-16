import React, { useEffect } from 'react';
import help from '../assets/help.png';


const Help = () => {


useEffect(()=>{
  document.title='service'
},[])

  return (
    <div>
    <div className="container">
        <div className="card m-2 text-center" style={{color:'black'}} >
        <div className="card-header">
Help Page
</div>
        <div className="card-body " >
        <img src={help} className="card-img-top " alt="calc" style={{width:'200px'}} />

      <h5 className="card-title" style={{color:'red'}}>help line Number : 1234567890</h5>
      
       <p className="card-text ">call this toll free number for any queries 24x7 available </p>
       <p>we are happy to assist you !</p>
      
       <p className="placeholder-glow ">
       
  <span className="placeholder col-12 bg-dark " style={{color:'white',fontSize:'20px'}}  > 
  Call : 1234567890
  </span>
</p>
  </div>
        </div>
    </div>
    
     </div>  
  )
}

export default Help;