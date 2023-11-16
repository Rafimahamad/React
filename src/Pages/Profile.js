import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getProfileData } from '../Service/Data'

const Profile = () => {
    const [user, setUser] = useState([]);

    let data = JSON.parse(sessionStorage.getItem('data'))

    useEffect(() => {
        document.title = 'profile'
        async function profile() {
            try {
    
                const response = await getProfileData(data.email).then();
                setUser(response.data);
            } catch (error) {
                toast.error('something went wrong !...' + error)
            }
        }
        profile();
    }, [data])

   

    // const profile = () => {
    //     getProfileData(data.email).then((res) => {
    //         let newUser = res.data;
    //         // console.log(res.data)
    //         setUser(newUser)

    //     })
    // }


    return (
        <div>
            <div className="container">
                <div className="row justify-content">
                    <div className='col-md-6 offset-md-3' >

                        <div className='card  p-4 ' >
                            <div className="card-header">
                                <h3 className='text-center' style={{ color: 'darkmagenta' }}>  Profile</h3>
                            </div>
                            <div className="card-body">
                                {
                                    user.map((User, index) => {
                                        return <div key={index}>
                                            <div className="table-responsive-sm">
                                                <table className="table ml-5">

                                                    <tbody>

                                                        <tr>
                                                            <th scope="row">#User Id</th>
                                                            <td >{User.id}</td>

                                                        </tr>
                                                        <tr>
                                                            <th scope="row">First Name</th>
                                                            <td>{User.firstName}</td>
                                                        </tr>


                                                        <tr>
                                                            <th scope="row">Last Name</th>
                                                            <td>{User.lastName}</td>
                                                        </tr>


                                                        <tr>
                                                            <th scope="row">Email</th>
                                                            <td> {User.email}</td>
                                                        </tr>

                                                        <tr>
                                                            <th scope="row">gender</th>
                                                            <td >{User.gender}</td>
                                                        </tr>

                                                        <tr>
                                                            <th scope="row">Phone Number</th>
                                                            <td>{User.phone}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Location</th>
                                                            <td>{User.location}</td>
                                                        </tr>


                                                    </tbody>
                                                </table>

                                                <div className="text-center">
                                                    <Link className='btn btn-outline-primary' to={'/auth/dashboard/editProfile'}>Edit</Link>
                                                </div>

                                            </div>
                                        </div>
                                    })

                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile