import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useLocation } from "react-router-dom";

function EditContact({ updateContactHandler }) {

 
  const navigate=useNavigate();
  const location=useLocation()
  const editDetails=location.state.contacts
  console.log("edited contact",editDetails);


  const [name, setName] = useState(editDetails.Name);
  const [contactNumber, setContactNumber] = useState(editDetails.ContactNumber);
  const [email, setEmail] = useState(editDetails.Email);



  const updateContact = {
    id:editDetails.id,
    Name: name,
    ContactNumber: contactNumber,
    Email: email,
  };

  const update = (e) => {
    e.preventDefault();
    if (name === "" || contactNumber === "" || email === "") {
      alert("All the fields are mandatory");
      return;
    }

      const shouldUpdate = window.confirm("Are you sure you want to update the contact?");

      if (shouldUpdate) {
        updateContactHandler(updateContact);
        setName("");
        setContactNumber("");
        setEmail("");
        alert("Contact Updated Successfully");
       navigate('/')
      }
    };

  return (
    <div>
      <div className="row my-4">
        <div className="col"></div>
        <div className="col">
          <h1 className="text-center text-primary">Edit Contacts</h1>
          <form
            action=""
            className="mt-3 border border-5 border-info p-5"
            style={{ borderRadius: "20px" }}
            onSubmit={update}
          >
            <label htmlFor="" className="addcontact_form_label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="" className="addcontact_form_label">
              Contact Number
            </label>
            <input
              type="text"
              className="form-control"
              name="contactnumber"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
            <label htmlFor="" className="addcontact_form_label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="text-center">
              <button className="btn btn-success btn-lg mt-5">Update</button>
            </div>
          </form>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default EditContact;
