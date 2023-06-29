import React, { useState } from 'react';

const ContactForm = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });
      setStatus(response.ok ? 'SUBMIT_SUCCESS' : 'SUBMIT_ERROR');
    } catch (error) {
      setStatus('SUBMIT_ERROR');
    }
  };

  return (
    <div id="contact-form" className="shadow-green p-4 bg-dark">
      <h2 className="text-green mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} action="https://formspree.io/f/xjvpbrkq" method="POST">
        <div className="mb-4">
          <label className="block text-green text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input className="shadow-green appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" name="name" required />
        </div>
        <div className="mb-4">
          <label className="block text-green text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input className="shadow-green appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" name="_replyto" required />
        </div>
        <div className="mb-4">
          <label className="block text-green text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea className="shadow-green appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline" id="message" name="message" rows="5" required></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-green hover:bg-green-dark text-dark font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Send
          </button>
          {status === 'SUBMIT_SUCCESS' && <p className="text-green">Thanks for your submission!</p>}
          {status === 'SUBMIT_ERROR' && <p className="text-red-500">Oops! There was a problem.</p>}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;