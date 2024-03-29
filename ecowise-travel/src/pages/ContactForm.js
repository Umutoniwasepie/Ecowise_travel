import React, { useState } from 'react';
import './ContactForm.css'; // Import the CSS file for styling

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Implement logic to handle form submission here (e.g., send email, store data)
    console.log('Form submitted!', { name, email, message });

    // Reset form fields after submission (optional)
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <p>Have any questions or feedback? Feel free to reach out!</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label htmlFor="message">Your Message:</label>
        <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
