import React from 'react'
import ContactCard from './ContactCard'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react';

function ContactList(props) {
  console.log("searchKey", props);


  const navigate = useNavigate()
  const inputElement = useRef("")




  const deleteContactHandler = (id) => {
    console.log('entering deletehandler', id);
    props.getContactId(id);
  }

  const renderContactCard = props.contacts.map((contact) => {

    return (
      <div className='col-md-4 pt-4'>
        <ContactCard contact={contact} clickHandler={deleteContactHandler} ></ContactCard>
      </div>
    )
  })

  const getSearchTerm = () => {
    props.searchKeyword(inputElement.current.value)
  }


  return (

    <div className='container'>



      <div className='d-flex justify-content-end'>
        <button onClick={() => { navigate('/add') }} className='btn btn-outline-success btn-lg mt-3' ><i class="fa-solid fa-user-plus fa-beat me-2"></i>Add Contact</button>
      </div>

      <div className="input-group mt-3">
        <input ref={inputElement} type="text" className="form-control" placeholder="Search Contacts" value={props.term} onChange={getSearchTerm}/>
        {/* <div class="input-group-append">
          <button class="btn btn-secondary" type="button">
            <i class="fa fa-search"></i>
          </button>
        </div> */}
      </div>

      <div className='row'>
        {renderContactCard.length > 0 ? renderContactCard : "No Contacts Available"}
      </div>


    </div>
  )
};

export default ContactList
