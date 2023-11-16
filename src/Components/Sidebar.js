import React from 'react'
import { Link } from 'react-router-dom'
import { isAdmin } from '../auth';
import {AiOutlineUser,AiFillWarning,AiOutlineHistory,
  AiFillInfoCircle ,AiOutlineQuestionCircle,AiOutlineUsergroupAdd} from "react-icons/ai";

const Sidebar=()=> {
  return (
    <div className='card' style={{height:'100vh', background:'#f2f2f2',font:'caption'}} >
    <div className='sidebar' >
    <div className="list-group ">
    
    
   
  <Link className="list-group-item list-group-item-action"  to={'/auth/dashboard/profile'}> <AiOutlineUser /> Profile</Link>
  {
    !isAdmin() &&
  
  <Link className="list-group-item list-group-item-action" to={'/auth/dashboard/duebills'}> <AiFillWarning style={{color:'rgb(203, 40, 40)'}}/>  Due bills</Link>
}
{
    !isAdmin() &&
  <Link className="list-group-item list-group-item-action" to={'/auth/dashboard/history'}> <AiOutlineHistory/> history</Link>
 }
 
  {
    isAdmin() &&
  <Link className="list-group-item list-group-item-action" to={'/auth/dashboard/complaints'}> <AiFillWarning style={{color:'rgb(203, 40, 40)'}}/>Complaints</Link>
}


  {
    isAdmin() &&
  <Link className="list-group-item list-group-item-action" to={'/auth/dashboard/usersList'}> < AiOutlineUsergroupAdd />Customers</Link>
}

<Link className="list-group-item list-group-item-action" to={'/auth/dashboard/about'}> <AiFillInfoCircle/> About Us</Link>

<Link className="list-group-item list-group-item-action" to={'/auth/dashboard/help'}> <AiOutlineQuestionCircle/> help</Link>


</div>
</div>
</div>
  )
}

export default Sidebar