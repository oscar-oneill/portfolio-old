import React from 'react';
import emailjs from 'emailjs-com';
import '../components/Contact.css';

const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('aol', 'template_a5le116', e.target, 'user_SGW7m0gfsrn2z0f25DeBi')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    }

    return (
        <div className="contact__container" id="contact">
            <div className="container__header">Contact Me</div>
            <div className="container__content">

                <div className="form">
                    <form onSubmit={sendEmail} className="contact__form">
                        <input placeholder="Name" type="text" name="name" required/>

                        <input placeholder="Email Address" type="text" name="email" required/>

                        <input placeholder="Subject" type="text" name="subject" required/>

                        <textarea placeholder="Your Message Here" type="text" name="message" required/>

                        <button className="submit" type="submit">Submit</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Contact