import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Base from "../Components/Base"
import { getData, updateProfileByUserId } from "../Service/Data";

const ForgotPassword = () => {

    const [user, setUser] = useState({
        email: '',
        password: '',
        confirmPassword: '',

    })

    const [hasLength, setLength] = useState(false);
    const [hasLowerCase, setLowerCase] = useState(false);
    const [hasUpperCase, setUpperCase] = useState(false);
    const [hasnumber, setNumber] = useState(false);


    const [users, setUsers] = useState()

    const [errors, setErrors] = useState({
        email: '',
        password: '',
        confirmPassword: ''

    })

    useEffect(() => {
        getDatafromServer()
    }, [])

    const HandleChanges = (e, property) => {
        setUser({ ...user, [property]: e.target.value })
    }

    const handlePassword = (e) => {
        const value = e.target.value;
        setUser({ ...user, password: e.target.value })
        console.log(user.password)
        setLength(value.length >= 6);
        setUpperCase(/[A-Z]/.test(value));
        setLowerCase(/[a-z]/.test(value));
        setNumber(/[0-9]/.test(value));

    }

    async function getDatafromServer() {
        try {
            let response = await getData().then()
            setUsers(response.data)
        } catch (error) {
            toast.error('something went wrong !...' + error.message)
        }
    }

    const handleData = (event) => {
        event.preventDefault();
        let errors = {}
        if (!user.email || !user.email.trim()) {
            errors.email = '* user Name is required';
        }
        if (!user.password || !user.password.trim()) {
            errors.password = '* password is required';
        }
       else if (!hasLength || !hasLowerCase || !hasUpperCase || !hasnumber) {
            errors.password = '* your password does not meet the requirement ';

        }
        if (user.confirmPassword !== user.password) {
            errors.confirmPassword = '* password  must be match';
        }
        setErrors(errors)
        if (Object.keys(errors).length === 0) {
              
           
            try {
                let data = users.find(u => u.email === user.email)

                if (data) {
                    data.password = user.password
                    updateProfileByUserId(data, data.id).then(res => {
                        toast.success('Password updated Successfully !...')

                    }).catch(error => {
                        toast.error('something went wrong !..' + error.message)
                    })

                }
                else
                    toast('user nor exist with this email Id, please signup')

            } catch (error) {
                toast('unable to fetch data from server !')

            }

        }

    }
    return (
        <Base>
            <div className="container mt-4" style={{ color: 'black' }} >
                <div className="row justify-content">
                    <div className='col-md-4 offset-md-4' >

                        <div className='card p-3 border-2 shadow-2' >
                            <form onSubmit={handleData} >

                                <h2 className="text-center mt-2">  forgot password ! </h2>

                                <div className='form-group '>
                                    <label>User Name</label>
                                    <input type="text"
                                        id='email'
                                        className='form-control'
                                        placeholder='please enter username here'
                                        name='email'
                                        value={user.email}
                                        onChange={(e) => HandleChanges(e, 'email')}

                                    />
                                    {/* <span>&#10003;</span> */}
                                    <div className='text-danger' >
                                        {errors.email && <span > {errors.email}</span>}
                                    </div>
                                </div>



                                <div className='form-group mt-2'>
                                    <label >Password</label>
                                    <input type="password"
                                        placeholder='enter password here'
                                        name='password'
                                        id='password'
                                        className='form-control'
                                        value={user.password}
                                        // onChange={(e) => HandleChanges(e, 'password')}
                                        onChange={(e) => handlePassword(e)}
                                    />
                                    <div className='text-danger'>
                                        {errors.password && <span >{errors.password}</span>}

                                    </div>
                                    <ul>
                                        <li>{hasLength ? <span className="text-success">&#10003; password must be 6 chars</span> :
                                            <span className="text-danger">&#10005; password must be 6 chars</span>}</li>
                                        <li>{hasUpperCase ? <span className="text-success">&#10003; atleat one UpperCase Letter</span> :
                                            <span className="text-danger">&#10005; atleat one UpperCase Letter</span>}</li>
                                        <li>{hasLowerCase ? <span className="text-success">&#10003; atleat one LowerCase Letter</span> :
                                            <span className="text-danger">&#10005; atleat one LowerCase Letter</span>}</li>

                                        <li>{hasnumber ? <span className="text-success">&#10003; atleat one number </span> :
                                            <span className="text-danger">&#10005; atleat one number</span>}</li>

                                    </ul>

                                </div>
                                <div className='form-group mt-2'>
                                    <label >Confirm Password</label>
                                    <input type="password"
                                        placeholder='enter password here'
                                        name='confirmPassword'
                                        id='confirmPassword'
                                        className='form-control'
                                        value={user.confimPassword}
                                        onChange={(e) => HandleChanges(e, 'confirmPassword')}
                                    />
                                    <div className='text-danger'>
                                        {errors.confirmPassword && <span >{errors.confirmPassword}</span>}

                                    </div>

                                </div>
                                <div className="text-center">
                                    <button type="submit"  className="btn btn-primary m-3 ">Proceed</button>

                                </div>

                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </Base>
    )
}

export default ForgotPassword;