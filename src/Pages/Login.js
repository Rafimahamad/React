
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { doLogin } from "../auth";
import Base from "../Components/Base";

const Login = () => {
   
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });


    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })

    useEffect(()=>{
        document.title='Login'

    },[])
   

    const navigate = useNavigate();

    const HandleChanges = (e, property) => {
        setLoginData({ ...loginData, [property]: e.target.value });
    }



    const handleLoginData = (event) => {
        event.preventDefault();
        let errors = {}
        if (!loginData.email || !loginData.email.trim()) {
            errors.email = '* user Name is required';
        }
        if (!loginData.password || !loginData.password.trim()) {
            errors.password = '* password  is required';
        }
        setErrors(errors)
        if (Object.keys(errors).length === 0) {
           
        
            axios.get('http://localhost:5000/user').then(
                res=>{
                    const userData=res.data;
                    console.log(userData)
                    let user=userData.find(user=>user.email===loginData.email && user.password===loginData.password )
                   if(user ){
                    doLogin(user);
                    toast.success('login Successfully !..')
                    navigate('/auth/dashboard/view');

                   }
                   
                   else{
              toast.error('Invalid Credentials !..')
                   }
                 
                }
            ).catch(error=>toast.error('Something went wrong !...  '+error.message))

           
            }

    }

    return (

        <Base>
     
            <div className="container mt-4" style={{color:'black'}} >
                <div className="row justify-content">
                    <div className='col-md-4 offset-md-4' >

                        <div className='card p-3 border-2 shadow-2' >
                            <form onSubmit={handleLoginData} >

                                <h2 className="text-center mt-2">  Login </h2>

                                <div className='form-group '>
                                    <label>User Name</label>
                                    <input type="text"
                                        id='firstName'
                                        className='form-control'
                                        placeholder='please enter username here'
                                        name='email'
                                        value={loginData.email}
                                        onChange={(e) => HandleChanges(e, 'email')}

                                    />
                                    <div className='text-danger' >
                                        {errors.email && <span >{errors.email}</span>}
                                    </div>
                                </div>



                                <div className='form-group mt-2'>
                                    <label >Password</label>
                                    <input type="password"
                                        placeholder='enter password here'
                                        name='password'
                                        id='password'
                                        className='form-control'
                                        value={loginData.password}
                                        onChange={(e) => HandleChanges(e, 'password')}
                                    />
                                    <div className='text-danger'>
                                        {errors.password && <span >{errors.password}</span>}

                                    </div>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary m-3 ">Login</button>
                                
                                </div>
                                <p>not registerd ?
                            <Link to={'/signup'}> signup here</Link>
                            <span>
                                <Link to='/forgot'>forgotPassword</Link>
                            </span>
                            </p>

                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </Base>



    );
}
export default Login;