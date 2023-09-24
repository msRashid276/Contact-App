import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

function AddContact({ addContactHandler }) {
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const navigate=useNavigate();

  const add = (e) => {
    e.preventDefault();
    if (name === "" || contactNumber === "" || email === "") {
      alert("All the fields are mandatory");
      return;
    }else{

    const newContact = {
      Name: name,
      ContactNumber: contactNumber,
      Email: email,
    };

    addContactHandler(newContact);
    setName("");
    setContactNumber("");
    setEmail("");
    alert("Contact Added Successfully")
    navigate("/")
  }
  };

  return (
    <div>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <h1 className="text-center">Add Contact</h1>
          <form
            action=""
            className="mt-3 border border-5 p-5"
            style={{ borderRadius: "20px" }}
            onSubmit={add}
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
              <button className="btn btn-success btn-lg mt-5">Add</button>
            </div>
          </form>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default AddContact;
