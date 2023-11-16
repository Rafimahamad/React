import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteUserById, getData } from '../../Service/Data'
import {AiFillDelete }from "react-icons/ai";

const UsersList = () => {


    const [users, setUsers] = useState();
let navigate=useNavigate()
    useEffect(() => {
        document.title='customers'
      getUserList() 
    }, [])


   const getUserList=()=>{
        getData().then((res) => {
            
          const normal= res.data.filter(user=>user.role==='user')
            console.log(normal)
            setUsers(normal)
        })
    }



    const deleteUser=(user)=>{
        deleteUserById(user.id).then((res)=>{
        toast.success('user deleted successfullY !...'+user.id)
        navigate("/auth/dashboard/view")
        }).catch(error=>toast.error('something went wrong !...'));
        }

const generateBillforThisUser=(user)=>{
    navigate(`/auth/dashboard/generateBill/${user.email}`)

}


    return (

        <div>
            <div className="card" style={{width:'100%'}}>
                <div className="card-body">

                    <div className="table-responsive">
                        <table className="table table-hover" aria-describedby="mydesc">

                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">user Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">email</th>
                                    <th scope="col">Phone No.</th>
                                    <th scope="col">location</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    users && users.map((user,index) => {
                                     return(
                                            <tr key={index}>
                                                <td>{user.id}</td>
                                                <td>{user.firstName + ' ' + user.lastName}</td>
                                                <td>{user.email}</td>
                                                <td>{user.phone}</td>
                                                <td>{user.location}</td>
                                                <td>
                                                    <button  onClick={()=>generateBillforThisUser(user)} className="btn btn-primary" >generateBill</button>
                                                    {/* <button onClick={()=>deleteUser(user)}  className="btn btn-danger mr-4">delete</button> */}
                                                    <AiFillDelete  className='m-2' onClick={()=>deleteUser(user)} color='red' size='25px' />
                                                </td>
                                            </tr>
                                            )
                                        
                                    })
                                }




                            </tbody>

                        </table>


                    </div>
                </div>
            </div>


        </div>
    )
}

export default UsersList