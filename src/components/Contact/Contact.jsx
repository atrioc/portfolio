import React, { useRef } from 'react';
import "./contact.css"
import emailjs from '@emailjs/browser';
import c_doodle from "./c-doodle.svg"

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  

  emailjs.sendForm('service_0ir0hd9', 'template_tr1zvnn', form.current, 'tIa8E6czQb7KLxxlG')
      .then((result) => {
          alert("your message was sent");
      }, (error) => {
        alert("try again");
      });}
      return (
        <section id='contact'>
          <div className='c-left'>
            
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input className="btn-submit" type="submit" value="Submit" />
    </form>
          </div>
          <div className='c-right'>
            
            Contact Me
          </div>
          <img className="c-doodle"src={c_doodle} alt=""></img>
    </section>
  )
  
};

export default Contact