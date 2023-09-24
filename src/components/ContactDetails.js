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
      <div className="row">
        <div className="col">
            <h4>Name:{Name} </h4>
            <h4>ContactNumber:{ContactNumber}</h4>
            <h4>Email:{Email} </h4>
        </div>  
        <div className="col">
            <img src={userImage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default ContactDetails;
