import {  Outlet } from 'react-router-dom';
import Base from '../Components/Base';
import Sidebar from '../Components/Sidebar';

const Dashboard = () =>{

  return (
    <Base>
    <div>
      <div className="row">
        <div className="col-md-2 ">
        <Sidebar/>
        </div>

<div className="col-md-10">
  <Outlet></Outlet>
</div>

      </div>
       
    </div>
    </Base>
  )
}

export default Dashboard;