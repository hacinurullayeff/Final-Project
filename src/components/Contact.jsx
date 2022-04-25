import React from 'react'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zdmdbgg', 'template_jlczcsj', form.current, 'oE30-NcKBlw6OyDDK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset()
  };

  return (
    <div className='contacts'>
        <div className="text-center">
            <h1>Contact Us</h1>
            <p>Please fill out the form..</p>
        </div>

        <div className="container">
            <form ref={form} onSubmit={sendEmail}>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        {/* Name input */}
                        <div className="text-center">
                            <input 
                            type="text"
                            className='form-control'
                            placeholder='Name'
                            name='name' 
                            />
                            <div className="line"></div>
                        </div>

                        {/* Phone Input */}

                        <div className="text-center">
                            <input 
                            type="text"
                            className='form-control'
                            placeholder='Enter your number'
                            name='phone' 
                            />
                            <div className="line"></div>
                        </div>

                        {/* Email Input */}

                        <div className="text-center">
                            <input 
                            type="email"
                            className='form-control'
                            placeholder='youremail@example.com'
                            name='email' 
                            />
                            <div className="line"></div>
                        </div>

                        {/* Subject Input*/}

                        <div className="text-center">
                            <input 
                            type="text"
                            className='form-control'
                            placeholder='Enter your subject'
                            name='subject' 
                            />
                            <div className="line"></div>
                        </div>


                    </div>

                    <div className="col-md-6 col-xs-12">
                        {/* Message input */}

                        <div className="text-center">
                            <textarea
                             type="text" 
                             className='form-control'
                             placeholder='Describe your need'
                             name='message'
                             />
                             <div className="line"></div>
                        </div>
                        <button type="submit" className='btn btn-outline-success'>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact