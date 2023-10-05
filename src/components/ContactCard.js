import React from 'react'
import userImage from '../images/userImage.png'
import { useNavigate } from 'react-router-dom';


function ContactCard(props) {
    console.log('props', props);
    const navigateTo = useNavigate();
    const { id, Name, ContactNumber, Email } = props.contact;
    

    return (
        <div>
            <div className='card_contact pt-3'>
                <div onClick={() => navigateTo(`/contact/${id}`, { state: { contact: props.contact } })}>
                    <img className='rounded mx-auto d-block' src={userImage} alt="user" style={{ width: '150px', height: '150px' }} />
                    <h5 className='p-2 pt-3 text-dark d-flex'>Name:&nbsp;<h5 className='text-primary'>{Name}</h5></h5>
                    <h5 className='p-2 text-dark d-flex'>Contact Number:&nbsp;<h5 className='text-primary'>{ContactNumber}</h5></h5>
                    <h5 className='p-2 text-dark d-flex'>Email:&nbsp;<h5 className='text-primary'>{Email}</h5></h5>
                </div>
                <div>
                    <i className="fa fa-trash fa-lg text-danger me-3 mt-3" onClick={() => props.clickHandler(id)} style={{ float: 'right' }} aria-hidden="true"  ></i>
                </div>
                <i onClick={() => { navigateTo(`/edit/${id}`, { state: { contacts: props.contact } }) }} className="fas fa-edit fa-lg text-dark me-3 mt-3" style={{ float: 'right' }} aria-hidden="true"  ></i>

            </div>
        </div>

    )


}

export default ContactCard
