import React, { useState } from 'react';
import { validateEmail } from '../../assets/utils/helpers';
import contactImage from '../../assets/images/contact-img.jpg';

function ContactForm() {
    
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                if (!e.target.value.length) {
                  setErrorMessage(`${e.target.name} is required.`);
                } else {
                  setErrorMessage('');
                }
              }
            }
          if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
          }
      };

      function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
      };
    
    // JSX
    return (
        <section class="flex-row" id="contact">
        <img src={contactImage} className="my-2" style={{ width: "30%" }} alt="contact" />
          
          <form id="contact-form" class="d-flex justify-content-center" onSubmit={handleSubmit}>
          <div>
            <h1>Contact</h1>
            <label htmlFor="name">Name:</label>
            <input type="text" defaultValue={name} onChange={handleChange} name="name" />
          </div>
          <div>
            <label htmlFor="email">Email address:</label>
            <input type="email" defaultValue={email} name="email" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
          </div>
          {errorMessage && (
                <div>
                <p className="error-text">{errorMessage}</p>
                </div>
            )}
          <button type="submit">Submit</button>
          </form>
        </section>
      )
    }
    
    export default ContactForm;