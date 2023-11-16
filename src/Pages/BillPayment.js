import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { fetchBillById, fetchBills, saveBill, updateBillStatus } from '../Service/Data';
import debitCard from '../assets/card.png'
import { useParams } from 'react-router-dom';

const BillPayment = () => {

  let { id } = useParams();

  const [bill, setBill] = useState();

  const [card, setCard] = useState({
    cardNo: '',
    pin: ''
  });

  const [errors, setErrors] = useState({
    cardNo: '',
    pin: ''
  });


  useEffect(() => {
    document.title = 'payBill'
    fetchBill()
  }, [])


  const fetchBill = () => {
    fetchBillById(id).then((res) => {
      console.log(res.data)
      setBill(res.data)
    }).catch(error => {
      console.log(error);
      alert('something went wrong !')
    })
  }

  const HandleChanges = (e, property) => {
    setCard({ ...card, [property]: e.target.value });
    setBill({ ...bill, status: true });
  }


  const HandlePayment = (event) => {
    event.preventDefault();
    let errors = {}

    if (!card.cardNo || !card.cardNo.trim()) {
      errors.cardNo = '* card Number is required';
    }
    else if (!/[0-9]{12}/.test(card.cardNo) || !card.cardNo.length === 12) {
      errors.cardNo = '* Invalid Number';

    }
    if (!card.pin || !card.pin.trim()) {
      errors.pin = '* pin is required'
    }
    else if(!card.pin.length===4){
      errors.pin='invalid pin '
    }

    setErrors(errors)
    if (Object.keys(errors).length === 0) {
      console.log(bill);
     updateBillStatus(bill.id,bill).then((r)=>{
      toast.success('your payment has done !...')
     }).catch(error=>toast.error('something went wrong, Try again !...'))

    }


  }

  return (
    bill &&
    <div>


      <div className="container mt-4" style={{color:'black'}}>
        <div className="row justify-content">
          <div className='col-md-6 offset-md-3' >

            <div className='card  border-0'  >
              <div className="text-center">
                <img src={debitCard} className="card-img-top" alt='card' style={{ width: '250px' }} />
              </div>
              <div className="card-body">
                <h5 className='card-title'> userName : {bill.name} </h5>
                <p>Bill number : {bill.billNo}</p>
                <p>Amount      : {bill.amount}</p>

                <div className="container text-center ">
                  <form onSubmit={HandlePayment}>

                    <div className="form-group">
                      <label >Enter your debit/credit card Number</label>
                      
                        <input type='text'
                         name='cardNo' 
                         placeholder='enter your 12-digit card number'
                          className='from-control' 
                       onChange={(e)=>HandleChanges(e,'cardNo')}
                          
                          />
                      <div className='text-danger' >
                        {errors.cardNo && <span >{errors.cardNo}</span>}
                      </div>
                    </div>

                    <div className="form-group">
                     <div>
                        <label htmlFor='pin'>Enter your pin</label>
                        </div>
                      <input type='text' 
                      name='pin'
                       placeholder='enter your pin' 
                       className='from-control'
                       onChange={(e)=>HandleChanges(e,'pin')}
                        />
                      <div className='text-danger' >
                        {errors.pin && <span >{errors.pin}</span>}
                      </div>
                    </div>

                    <div className='text-center mt-3'>
                      <button className='btn btn-outline-primary'>pay</button>
                    </div>
                  </form>

                </div>
              </div>


            </div>
          </div>
        </div>
      </div>


    </div>

  )
}

export default BillPayment