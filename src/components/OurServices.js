import './ourServices.css';
import React from 'react';
// import PropTypes from 'prop-types';

export default function OurServices(props) {
  return (
    <>

      <div  className="col-md-10 footer-box">
        <form onsubmit="sendEmail(); reset(); return false;">
			          <p id='p'>SUBSCRIBE PLEASE!</p>
			         <input type="email" id="email" class="form-control my-3" placeholder="Your Email" required/>
			         <input type="Number" class="form-control my-2" placeholder="Phone Number" required />
			         <textarea class="form-control" placeholder="Message" required></textarea>
			         <button type="submit"  class="btn btn-warning my-1">Subscribe</button>
			          </form>
                
        </div>     
			        	
			        </>
      
    
   
  )
}

