import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { getProfileData, LocationsData, updateProfileByUserId } from '../Service/Data';

const EditProfile = () => {

    // let { email } = useParams();
    let data = JSON.parse(sessionStorage.getItem('data'))

    let navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState()

    let Locations = LocationsData;
    const [errors, setErrors] = useState({})

    useEffect(() => {
 getCurrentProfileData();
    }, [])


    const getCurrentProfileData = () => {
        getProfileData(data.email).then((res) => {
            let currentData = res.data;
            console.log(currentData)
            currentData.map(data => setCurrentUser({...data,confirmPassword:''}))

        }).catch(errors=>console.log(errors));
    }

    const HandleChanges = (e, property) => {
        setCurrentUser({ ...currentUser, [property]: e.target.value })
    }

    const updatedata = (event) => {
        event.preventDefault();
        let errors = {}
        if (currentUser.confirmPassword !== currentUser.password) {
            errors.confirmPassword = " password must match";
        }

        if (!currentUser.firstName || !currentUser.firstName.trim()) {
            errors.firstName = 'first Name is required';
        }
        else if (!currentUser.firstName.length > 3) {
            errors.firstName = 'first name should be morethan 3-characters';
        }
        if (!currentUser.lastName || !currentUser.lastName.trim()) {
            errors.lastName = 'last Name is required';
        }
        else if (!currentUser.lastName.length > 3) {
            errors.lastName = 'last name should be morethan 3-characters';
        }


        if (!currentUser.phone) {
            errors.phone = 'phone Number is required';
        }
        else if (!/[6-9]{1}[0-9]{9}/.test(currentUser.phone)) {
            errors.phone = 'Invalid phone Number';
        }


        if (!currentUser.password) {
            errors.password = 'password is required';
        }
        setErrors(errors);

        setErrors(errors)
        if (Object.entries(errors).length === 0) {
            updateProfileByUserId(currentUser, currentUser.id).then((res) => {
                console.log(res.data);
                // alert('Profile Updated successfully !');
                toast.success("Profile Updated successfully !...")
                navigate('/auth/dashboard/profile')

                console.log(currentUser);
            }).catch(error => {
                // alert('Something went wrong !')
                toast.error('Something went wrong !..')
                console.log(error)
            })


        }



    }


    const form = () => {

        return (
            <div className="container mt-4" style={{color:'black'}}>
                <div className="row justify-content">
                    <div className='col-md-6 offset-md-3' >

                        <div className='card  p-4 border-0' >
                            <form onSubmit={updatedata} >

                                <h4 className="text-center mt-2" style={{color:'darkmagenta'}}> Edit Your Profile  </h4>


                                <div className='form-group '>
                                    <label>firstName</label>
                                    <input type="text"
                                        id='firstName'
                                        className='form-control'
                                        name='firstName'
                                        defaultValue={currentUser.firstName}
                                        onChange={(e) => HandleChanges(e, 'firstName')}

                                    />
                                    <div className='text-danger' >
                                        {errors.firstName && <span >{errors.firstName}</span>}
                                    </div>
                                </div>




                                <label>last Name</label>
                                <div className='form-group'>

                                    <input type="text"
                                        id='latName'
                                        className='form-control'
                                        placeholder='please enter lastName here'
                                        name='lastName'
                                        defaultValue={currentUser.lastName}
                                        onChange={(e) => HandleChanges(e, 'lastName')}
                                    />
                                    <div className='text-danger' >
                                        {errors.lastName && <span >{errors.lastName}</span>}
                                    </div>
                                </div>


                                <label>Gender</label>
                                <div className='form-group'>
                                    <input className='form-control'
                                        value={currentUser.gender} readOnly />
                                </div>

                                <label>phone No</label>
                                <div className='form-group'>

                                    <input type="text"
                                        id='phone'
                                        placeholder='please enter phoneNo here'
                                        name='phone'
                                        className='form-control'
                                        defaultValue={currentUser.phone}
                                        onChange={(e) => HandleChanges(e, 'phone')}
                                    />
                                    <div className='text-danger' >
                                        {errors.phone && <span >{errors.phone}</span>}
                                    </div>
                                </div>


                                <label>Location</label>

                                <div className='form-group'>
                                    <select defaultValue={currentUser.location}
                                        className='form-control'
                                        onChange={(e) => HandleChanges(e, 'location')}>
                                        <option defaultValue={currentUser.location}>{currentUser.location}</option>

                                        {
                                            Locations.map((loc, index) => {
                                                return <option key={index} value={loc}>{loc}</option>
                                            })
                                        }

                                    </select>

                                </div>

                                <label >Password</label>

                                <div className='form-group'>
                                    <input type="password"
                                        placeholder='enter password here'
                                        name='password'
                                        id='password'
                                        className='form-control'
                                        defaultValue={currentUser.password}
                                        onChange={(e) => HandleChanges(e, 'password')}
                                    />
                                    <div className='text-danger' >
                                        {errors.password && <span >{errors.password}</span>}
                                    </div>
                                </div>

                                <label >Confirm Password</label>

                                <div className='form-group'>

                                    <input type="password"
                                        placeholder='enter password here'
                                        name='confirmPassword'
                                        className='form-control'
                                        id='confirmPassword'
                                       value={currentUser.confirmPassword}
                                        onChange={(e) => HandleChanges(e, 'confirmPassword')}
                                    />
                                    <div className='text-danger' >
                                        {errors.confirmPassword && <span >{errors.confirmPassword}</span>}
                                    </div>
                                </div>

                                <div className='text-center'>
                                    <button className='btn btn-info m-3' type='submit'>Proceed</button>
                                </div>

                            </form>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>

            {
                currentUser && form()
            }
        </div>
    )
}

export default EditProfile;