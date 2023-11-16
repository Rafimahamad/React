import { text } from '@fortawesome/fontawesome-svg-core';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProfileData, saveBill } from '../../Service/Data';
import calc from '../../assets/calc.png'
import { toast } from 'react-toastify';

const GenerateBill = () => {

    let { email } = useParams();

    const [user, setUser] = useState();

    const [bill, setBill] = useState({
        name: '',
        billNo: Math.floor(Math.random() * 9000000000),
        units: '',
        amount: '',
        date: new Date().toLocaleDateString(),
        status: false
    });

    useEffect(() => {
        getUserData()

    }, [])

    const getUserData = () => {
        getProfileData(email).then(res => {
            console.log(res.data)
            res.data.map(u => setUser(u))

        })
    }


    const handleChanges = (event) => {
        setBill({
            ...bill,
            units: event.target.value,
            amount: event.target.value * 2,
            name: user.email
        })

    }

    const doSubmit = (event) => {
        event.preventDefault();
        let error = {}
        if (!bill.units) {
            toast.error('units required')

        }
        else {
            saveBill(bill).then(
                (res) => {
                    toast.success('bill generated Successfully')
                    console.log(bill);
                }
            ).catch(err => console.log(err))
        }
    }


    return (
        user && <div>
            <div className="container mt-4">
                <div className="row justify-content">
                    <div className='col-md-6 offset-md-3' >

                        <div className='card  p-4 border-0' style={{color:'black'}} >
                            <div className="card-header text-center">
                                <h5>Generate Bill</h5>
                            </div>


                            <div className="text-center">
                                <img src={calc} className="card-img-top " alt="calc" style={{ width: '200px' }} />
                            </div>

                            <div>
                                userName :{user.email}
                            </div>

                            <form onSubmit={doSubmit}>
                                <div className="form-group">
                                    <label >units</label>
                                    <input className='form-control' name='units' id='units' type="text" value={bill.units} onChange={handleChanges} />
                                </div>

                                <div className="form-group">
                                    <label>Amount</label>
                                    <input className='form-control' type="text" name='amount' id='amount' value={bill.units * 2} readOnly />
                                </div>
                                <div className='text-center mt-2'>
                                    <button type='submit' className='btn btn-outline-success' >submit</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default GenerateBill;