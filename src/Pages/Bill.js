import React from 'react';

const Bill = ({ bill ,deleteBill}) => {



  return (

    <div>
      <div className="container">
        <div className="card m-2" style={{ 'backgroundColor': '#f2f2f2',color:'black' }}>
          <div className="card-header">
            your previous bills
          </div>
          <div className="card-body text-center">
            <h5 className="card-title">Name : {bill.name}</h5>
            <h6>Bill Number : {bill.billNo}</h6>
            <p>Amount : {bill.amount}</p>
            <p>date : {bill.date}</p>
<h5 className='text-success'>status : done</h5>
          </div>
          <div className="card-footer ">
           This is the previously generated bill fetching from json-server

           <div className="text-end">
           <button onClick={()=>deleteBill(bill)} className="btn btn-primary me-md-2" type="button" >delete</button>

            </div>
         
          </div>
        </div>
      </div>

    </div>
  )
}

export default Bill