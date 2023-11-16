import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchBills } from '../Service/Data';
import ViewBills from './ViewBills';

const DueBills = () =>{


    let navigate=useNavigate();
    const [bills, setBills] = useState()

    const user = JSON.parse(sessionStorage.getItem('data'));

    useEffect(() => {
        document.title = 'Dues';
        fetchBillsByUser();

    }, [])

   

    

    const fetchBillsByUser = () => {
        fetchBills(user.email).then((res) => {
          
            let pendingBills=res.data.filter(b=>b.status===false)
            let dt = pendingBills.sort((a, b) => b.id - a.id)
            setBills(dt)
            // setBills( res.data)
        }).catch(error => {
            console.log(error);
            toast.error('something went wrong !')
        })
    }

    const payBill=(bill)=>{
        navigate(`/auth/dashboard/paybill/${bill.id}`)
      
    }

    
  return (
    <div>
          <div>
                {
                    bills?.length>0 ? (bills.map(bill => (<ViewBills bill={bill} key={bill.id} payBill={payBill} />))) : (
                        <h4>You didn't have a bills </h4>
                    )
                }


                {/* <Bill/> */}
            </div>
    </div>
  )
}

export default DueBills