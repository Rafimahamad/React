import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { isAdmin } from '../auth'
import calc from '../assets/calc.png';
import users from '../assets/users.png';
import complaints from '../assets/complaints.png';
import help from '../assets/help.png';
import pay from '../assets/paydues.png';





const View = () => {

useEffect(()=>{
  document.title='dashboard'
},[])

  return (
    <div className='container mt-3' style={{ color: 'CaptionText' }} >
      <div className="row ">

        {/* card1  */}

        {isAdmin() &&
          <div className="col-sm-6">

            <div className="card" >

              <div className="card-body">

                <table>
                  <tbody>
                    <tr>
                      <td>
                        <img src={calc} className="card-img-top " alt="calc" style={{ width: '200px' }} />
                      </td>
                      <td>
                        <p> generate bills to the customers </p>
                        <Link to={'/auth/dashboard/usersList'} className="btn btn-primary">click here</Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        }

        {/* card 2 */}

        {isAdmin() &&
          <div className="col-sm-6">

            <div className="card" >

              <div className="card-body">

                <table>
                  <tbody>
                    <tr>
                      <td>
                        <img src={complaints} className="card-img-top " alt="calc" style={{ width: '200px' }} />
                      </td>
                      <td>
                        <h6> Complaints </h6>
                        <p>here you can see the customers List who had dues</p>
                        <Link to={'/auth/dashboard/complaints'} className="btn btn-primary">click here</Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        }


        {/* card 3 */}

        {isAdmin() &&
          <div className="col-sm-6">

            <div className="card mt-3" >

              <div className="card-body">

                <table>
                  <tbody>
                    <tr>
                      <td>
                        <img src={users} className="card-img-top " alt="calc" style={{ width: '200px' }} />
                      </td>
                      <td>
                        <h6> Customers List</h6>
                        <Link to={'/auth/dashboard/usersList'} className="btn btn-primary">click here</Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        }

        {!isAdmin() && 
        <div className="col-sm-6">
          <div className="card mt-3" >
            <div className="card-body">
            <table>
                  <tbody>
                    <tr>
                      <td>
                        <img src={pay} className="card-img-top " alt="calc" style={{ width: '200px' }} />
                      </td>
                      <td>
                        <h6 > your Dues</h6>
                        <Link to={'/auth/dashboard/duebills'} className="btn btn-primary">click here</Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
                 </div>
          </div>
        </div>
        }

        {/* last card */}
        <div className="col-sm-6">
          <div className="card mt-3" >
            <div className="card-body">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <img src={help} className="card-img-top " alt="calc" style={{width:'200px'}} />
                    </td>
                    <td>
                      <h6>Service-Desk</h6>
                    <p> contact to help-desk 
                      at any time for any queries</p>
                      <Link to={'/auth/dashboard/help'} className="btn btn-primary">click here</Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>



      </div>
    </div>
  )
}

export default View