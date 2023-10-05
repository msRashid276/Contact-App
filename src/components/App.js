import React, { useState, useEffect } from 'react';
import { uuid } from 'uuidv4';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import api from '../api/contacts'
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import EditContact from './EditContact';
import Footer from './Footer';


function App() {

  const [contacts, setContacts] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResult,setSearchResult] = useState([])

  //adding contact and to api

  const addContactHandler =async (contact) => {
    // console.log(contact);
    const request={
      id:uuid(),
      ...contact,
    };

    try{
    const response=await api.post("/contacts",request)
    console.log("response",response);
    const fixContacts = ([...contacts,response.data])
    setContacts(fixContacts)
    updateLocalStorage(fixContacts)
    }catch(error){
      console.error("error adding contact:", error);
    }
  }



  const updateContactHandler= async (contact)=>{
   console.log("free trail",contact);
    const response=await api.put(`/contacts/${contact.id}`,contact)
    console.log("magic",response.data);
    const{id, Name, ContactNumber, Email }=response.data
    setContacts(contacts.map((contact)=>{
      return contact.id===id ? {...response.data} : contact;
    }))
  }


  const removeContactHandler =async (id) => {
    const shouldDelete = window.confirm("Are you sure you want to update the contact?");
    if(shouldDelete){
   await api.delete(`/contacts/${id}`)
    const newContactlist = contacts.filter((contact) => {
      return contact.id !== id
    })
    setContacts(newContactlist)
  }
  }

  const searchHandler=(searchTerm)=>{
    setSearchTerm(searchTerm)
    if(searchTerm !== ""){
      const newContactlist=contacts.filter((contact)=>{
       
        return Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase());  

      })
      setSearchResult(newContactlist)
    }else{
      setSearchResult(contacts)
    }
  }




  // fetching data from api

  const retrieveData = async () => {
    const response = await api.get("/contacts")
    return response.data;
  }


  useEffect(() => {

    const getAllContacts = async() => {
      const allContacts = await retrieveData();
      console.log('list',allContacts);
      if (allContacts) setContacts(allContacts);
    }
      getAllContacts();
   
    // const retrieveData = JSON.parse(localStorage.getItem(Local_key));
    // if (retrieveData) {
    //   return setContacts(retrieveData);
    // }

  }, []);




  const updateLocalStorage = (data) => {
    // localStorage.setItem(Local_key, JSON.stringify(data))
  }





    




   return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path='/' exact element={<ContactList contacts={searchTerm.length < 1 ? contacts : searchResult} getContactId={removeContactHandler} term={searchTerm} searchKeyword={searchHandler}/>} />
          <Route path='/add' exact element={<AddContact addContactHandler={addContactHandler} />} />
          <Route path='/contact/:id' exact element={<ContactDetails />} />
          <Route path='/edit/:id' exact element={<EditContact updateContactHandler={updateContactHandler} />} />
        </Routes>

      </Router>
      <Footer/>
    </div>
  );
}

export default App;
