
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import img from "../images/pricing.jpg"
import Back from "../common/Back"
import "./contact.css"

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p2sscrl', 'template_3enw4vr', form.current, '_db9ER-6BVuOwQN14')
      .then((result) => {
          console.log(result.text);
          alert("submited");
      }, (error) => {
          console.log(error.text);
      });
      e.target.rese();
  };
  return (
    
    <>
      <section className='contact mb'>
        <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
        <div className='container'>
          <form className='shadow' ref={form} onSubmit={sendEmail}>
            <h4>Fillup The Form</h4> <br />
            <div>
              <input type='text' placeholder='Name'  name="name"/>
              <input type='text' placeholder='Email'  name="email"/>
            </div>
            <input type='text' placeholder='Subject' name="subject" />
            <textarea cols='30' rows='10' name="message"></textarea>
            <button>Submit Request</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
