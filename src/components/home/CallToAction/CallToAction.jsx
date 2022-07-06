import React from 'react'
import './CallToAction.css'

const CallToAction = () => {
  return (
    <>
  <h1 className="cta-title mt-5">NALA SAAXIIB</h1>

 
  <div className="card mb-3 cardc">
  <div className="row no-gutters">
    <div className="col-md-6">
    <form className='formInput'>

    
    
    <div class="group">      
      <input type="text" placeholder='Enter your Email' required  className='inputs'/>
      <span class="highlight"></span>
      
    </div>


    
      
    
  
  






</form>
    </div>
    <div className="col-md-6">
      <div className="card-body">
       <button className='btn btn-wide btn-outline-light mb-1 mb-sm-0 mybtn'> Subscribe</button>
      </div>
    </div>
  </div>
</div>
  
                </>
           
  )
}

export default CallToAction