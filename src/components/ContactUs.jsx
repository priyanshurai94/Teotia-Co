import React, { useEffect } from 'react'
import ContactForm from './ContactForm'
import emailjs from "emailjs-com";

const ContactUs = () => {
  useEffect(() => {
    emailjs.init("4TyeH8cJYE7Jcq0zj");
  }, []);

  return (
    <div>
  
      <ContactForm/>

    </div>
  )
}

export default ContactUs
