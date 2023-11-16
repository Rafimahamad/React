import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteBillById, fetchBills } from '../Service/Data';
import Bill from './Bill';

const History = () => {


let navigate=useNavigate();
    const [bills, setBills] = useState()

    const user = JSON.parse(sessionStorage.getItem('data'));

    useEffect(() => {
        document.title = 'history';
        async function fetchBillsByUser (){
            try{
            let res= await fetchBills(user.email).then()
            setBills(res.data)
    
            }catch(error){
    toast.error('something went wrong !...')
            }
        }
    
        fetchBillsByUser();

    }, [user])

    const deleteBill = (bill) => {
        deleteBillById(bill.id).then(
            res => {
                
                toast.info('your bill has deleted !..')
               
                setBills(res.data)
                navigate('/auth/dashboard/view')
            }
        ).catch(error => {
            console.log(error)
            toast.error("something went wrong!...")
        })

    }


   
    // const fetchBillsByUser = () => {
    //     fetchBills(user.email).then((res) => {
          
    //         let pendingBills=res.data.filter(b=>b.status===true)
    //         let dt = pendingBills.sort((a, b) => new Date(b.date) - new Date(a.date))
    //         setBills(dt)
            
    //     }).catch(error => {
    //         console.log(error);
    //         alert('something went wrong !')
    //     })



        // const url=`http://localhost:5000/bills?name=${user.email}`
        // console.log(url)

        // fetch(url).then(res=>res.json() ).then(data=> console.log(data))

    // }
    return (
        <>

            <div>
                {
                    bills?.length>0 ? (bills.map(bill => (<Bill bill={bill} key={bill.id} deleteBill={deleteBill} />))) : (
                        <h4>You didn't have  bills </h4>
                    )
                }


                {/* <Bill/> */}
            </div>
        </>
    )
}

export default History