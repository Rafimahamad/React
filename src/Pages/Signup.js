import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validateForm } from './ValidateForm';
import Base from '../Components/Base';
import { saveData, getData, LocationsData } from '../Service/Data';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';



const Signup = () => {

    const genderoptions = ['male', 'female', 'others'];
    let Locations = LocationsData;

   let navigate= useNavigate();

    const [users, setUsers] = useState();

    useEffect(() => {
        document.title = 'SignUp';

async function getDatafromServer(){
   try{
    let response= await getData().then()
    setUsers(response.data)
    console.log(response.data)
   }catch(error){
    toast.error('something went wrong !...')
   }
}

        // getData().then((res) => {
        //     let newData = res.data;
        //     setUsers(newData)
        // }).catch(error =>'something went Wrong !...  '+error.message)

        getDatafromServer()     
    }, [])

    return (
        <div>
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    gender: '',
                    password: "",
                    location: '',
                    confirmPassword: ""
                }}
               
                validationSchema={validateForm}
               
                onSubmit={(values) => {
                    console.log("form values ==>", values)
             
                    if (users.find(user => user.email === values.email)) {
                       
                        toast.error('user already exist')
                        return 
                    }
                    else if( values.email==='rafi@virtusa.com'){
                       values.role='admin'
                    }
                    else{
                        values.role='user'
                    }
                    values.id=Math.floor(Math.random()*900000)
                     saveData(values).then(res => {
                            // alert('registered Successfully !');
                            toast.success('registered Successfully !..')

                            navigate('/login');
                        }).catch(
                            error => toast.error('Something went wrong !..  '+error.message)
                        )

                    }
                }
            >


                {({ touched, errors }) =>
                (
                    <Base>
                        <div className="container" style={{color:'black'}}>
                            <div className="row">
                                <div className="col-sm-4 offset-sm-4 ">

                                
                                <div className='card p-3 border-2 mt-3' >
                                    <Form>
                                    
                                    <h3 className="text-center">SignupForm</h3>
                                        <div className="form-group">
                                            <label htmlFor="firstName">firstName</label>
                                            <Field
                                                type="text"
                                                name="firstName"
                                                placeholder="Enter firstName"
                                                autoComplete="off"
                                                className={`mt-2 form-control
                            ${touched.firstName && errors.firstName ? "is-invalid" : ""}`}
                                            />
                                            <ErrorMessage
                                                component="div"
                                                name="firstName"
                                                className="invalid-feedback"
                                            />
                                        </div>
                                        {/*    lastName   */}
                                        <div className="form-group">
                                            <label htmlFor="lastName">lastName</label>
                                            <Field
                                                type="text"
                                                name="lastName"
                                                placeholder="Enter lastName"
                                                autoComplete="off"
                                                className={`mt-2 form-control
                            ${touched.lastName && errors.lastName ? "is-invalid" : ""}`}
                                            />
                                            <ErrorMessage
                                                component="div"
                                                name="lastName"
                                                className="invalid-feedback"
                                            />
                                        </div>


                                        {/*  email  */}
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <Field
                                                type="email"
                                                name="email"
                                                placeholder="Enter email"
                                                autoComplete="off"
                                                className={`mt-2 form-control
                            ${touched.email && errors.email ? "is-invalid" : ""}`}
                                            />

                                            <ErrorMessage
                                                component="div"
                                                name="email"
                                                className="invalid-feedback"
                                            />
                                        </div>
                                        {/*  gender  */}
                                        <div className="form-group">
                                            <label htmlFor="gender"> Gender </label>
                                            <Field
                                                as="select" name="gender"
                                                autoComplete="off"
                                                className={`mt-2 form-control
                        ${touched.gender && errors.gender ? "is-invalid" : ""}`}
                                            >
                                                <option value={''}>please select</option>
                                                {
                                                    genderoptions.map((g, index) => {
                                                        return <option key={index} value={g}>{g}</option>
                                                    })
                                                }
                                            </Field>
                                            <ErrorMessage
                                                component="div"
                                                name="gender"
                                                className="invalid-feedback"
                                            />
                                        </div>



                                        {/*  phone  */}
                                        <div className="form-group">
                                            <label htmlFor="phoneNo">Phone Number</label>
                                            <Field
                                                type="text"
                                                name="phone"
                                                placeholder="Enter phoneNo"
                                                autoComplete="off"
                                                className={`mt-2 form-control
                            ${touched.phone && errors.phone ? "is-invalid" : ""}`}
                                            />

                                            <ErrorMessage
                                                component="div"
                                                name="phone"
                                                className="invalid-feedback"
                                            />
                                        </div>

                                        {/*  location  */}
                                        <div className="form-group">
                                            <label htmlFor="location"> Location </label>
                                            <Field
                                                as="select" name="location"
                                                autoComplete="off"
                                                className={`mt-2 form-control
                        ${touched.location && errors.location ? "is-invalid" : ""}`}
                                            >
                                                <option value={''}>please select</option>
                                                {
                                                    Locations.map((l, index) => {
                                                        return <option key={index} value={l}>{l}</option>
                                                    })
                                                }
                                            </Field>
                                            <ErrorMessage
                                                component="div"
                                                name="location"
                                                className="invalid-feedback"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="password" className="mt-3">
                                                Password
                                            </label>
                                            <Field
                                                type="password"
                                                name="password"
                                                placeholder="Enter password"
                                                className={`mt-2 form-control
                            ${touched.password && errors.password
                                                        ? "is-invalid"
                                                        : ""
                                                    }`}
                                            />
                                            <ErrorMessage
                                                component="div"
                                                name="password"
                                                className="invalid-feedback"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="confirmPassword" className="mt-3">
                                                confirm Password
                                            </label>
                                            <Field
                                                type="password"
                                                name="confirmPassword"
                                                placeholder="Enter password"
                                                className={`mt-2 form-control
                            ${touched.confirmPassword && errors.confirmPassword
                                                        ? "is-invalid"
                                                        : ""
                                                    }`}
                                            />
                                            <ErrorMessage
                                                component="div"
                                                name="confirmPassword"
                                                className="invalid-feedback"
                                            />
                                        </div>

                                        <div className="text-center">
                                            <button
                                                type="submit"
                                                className="btn btn-primary  mt-4"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                        
                                    </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </Base>

                )
                }




            </Formik>
        </div>







    );
}




export default Signup;