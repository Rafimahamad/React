import React, { useEffect } from 'react'

const AboutUs=()=> {
useEffect( ()=>{
  document.title="About Us"
})

  return (
    <div className='container text-center mt-3'>
        <h3>Welcome to our electricity billing system!</h3> 

        <p className='mt-3'>
        We are dedicated to providing reliable and convenient billing services to our customers.

    Our company was founded with the goal of simplifying the billing process for electricity consumption. We understand that electricity bills can be confusing, and we strive to make it easier for our customers to understand their usage and the charges associated with it.
    
    Our team of experienced professionals is committed to providing the highest level of customer service. We are always available to answer any questions you may have and to help you navigate the billing process. We pride ourselves on our ability to provide personalized solutions to meet the unique needs of each of our customers.
    
    In addition to our commitment to customer service, we are also dedicated to sustainability. We believe that it is our responsibility to do our part to protect the environment, and we are constantly exploring ways to reduce our carbon footprint. We encourage our customers to join us in our efforts to promote sustainable living.
    
    Thank you for choosing our electricity billing system. We look forward to serving you and providing you with the best possible billing experience.
    </p>
    </div>
  )
}

export default AboutUs