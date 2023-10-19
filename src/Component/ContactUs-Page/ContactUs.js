
import React, { useState } from 'react'
import './ContactUs.css';

function ContactUs() {
    const [enterName,SetName]=useState("")
    const [enterEmail,SetEmail]=useState("");
    const [PhoneNumber,SetPhoneNumber]=useState("")
    const [enterText,SetText]=useState()


    const NameChangeHandler=(event)=>{
      SetName(event.target.value)
    }
    const EmailChangeHandler=(event)=>{
     SetEmail(event.target.value)
    }
   
    const NumberChangeHandler=(event)=>{
    SetPhoneNumber(event.target.value)
    }

    const TextChangedHandler=(event)=>{
        SetText(event.target.value)
    }
  
    const SubmitHandler= async(event)=>{
        
        event.preventDefault();

        const contactData = {
          name: enterName,
          email: enterEmail,
          phone: PhoneNumber,
          text: enterText,

        }
        try {
            const response = await fetch("https://eccomrce-website-default-rtdb.firebaseio.com/contactus.json", {
              method: "POST",
              body: JSON.stringify(contactData),
              headers: {
                "Content-Type": "application/json",
              },
            });
      
            if (!response.ok) {
              throw new Error("Failed to store data in Firebase.");
            }
      
            const data = await response.json();
            console.log('Response:', data);
      
            // Reset the form after successful submission
            SetName("");
            SetEmail("");
            SetPhoneNumber("");
            SetText("");
          } catch (error) {
            console.error("Error:", error);
          }
        };


  return (
    <div >
    <form className='bikash' onSubmit={SubmitHandler}> 
        <div>
           <label htmlFor="fname">Full Name:-</label><br/>
         <input type="text" id="fname" value={enterName} placeholder="Your name.." onChange={NameChangeHandler} required/>
      </div>
     
      <div>
         <label htmlFor="email">Email :-</label><br/>
          <input type="email" id="lname" value={enterEmail} placeholder="Your Email.." onChange={EmailChangeHandler} required/>
      </div>
       <div>
          <label htmlFor="Pnumber">Phone Number :-</label><br/>
         <input type="number" id="Pname" value={PhoneNumber} placeholder="Your Phone Number.." onChange={NumberChangeHandler} required/>
      </div>
      <div>
         <label htmlFor="email">Your Massage :-</label><br/>
         <textarea   rows="4" cols="50" value={enterText} placeholder="Your Text.." onChange={TextChangedHandler} required/>
      </div>
      <div>
         <input type="submit" value="Submit"/>
      </div>
    </form>
  </div>
  )
}

export default ContactUs