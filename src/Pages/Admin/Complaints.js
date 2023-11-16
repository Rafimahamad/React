import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { getBills } from '../../Service/Data';

const Complaints =() =>{
   
    const [bills, setBills] = useState();

    useEffect(()=>{
        document.title='complaints'
        getBills().then((res)=>{
     
       let pendingBills=res.data.filter(b=>b.status===false);
 

      let complaints=pendingBills.sort((a,b)=> new Date(b.date) - new Date(a.date) )
       setBills(complaints)
           
        }).catch(err=>toast.error('unable to fetch data !..'))
    },[])

  return (
    <div>
            <div className="card" style={{width:'100%'}}>
                <div className="card-body">

                    <div className="table-responsive">
                        <table className="table table-hover" aria-describedby="mydesc">

                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">userName</th>
                                    <th scope="col">bill Number</th>
                                    <th scope="col">units</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Bill Generated Date</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    bills && bills.map((bill,index) => {
                                     return(
                                            <tr key={index}>
                                                <td>{bill.name}</td>
                                                <td>{bill.billNo}</td>
                                                <td>{bill.units}</td>
                                                <td>{bill.amount}</td>
                                                <td>{bill.date}</td>
                                                <td className='text-danger'>Pending</td>
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

export default Complaints;