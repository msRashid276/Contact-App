import React from 'react'
import { useLocation } from 'react-router-dom';
import userImage from '../images/userImage.png'


function ContactDetails(props){
  const location = useLocation();
 const  contactDetails  = location.state.contact;
console.log('props in contact details',props,'location->',location.state);
  
    const { id, Name, ContactNumber, Email } = contactDetails;
  return (
    <div>
      <div className="row my-4">
        <div className="col mt-5">
            <h2 className='text-center fw-bold'><i class="fa-solid fa-id-badge fa-bounce text-primary me-2"></i>{Name} </h2>
            <h2 className='text-center fw-bold'><i class="fa-solid fa-phone fa-bounce text-primary me-2"></i>{ContactNumber}</h2>
            <h2 className='text-center fw-bold'><i class="fa-solid fa-envelope fa-bounce text-primary me-2"></i>{Email} </h2>
        </div>  
        <div className="col">
            <img src={userImage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default ContactDetails;
