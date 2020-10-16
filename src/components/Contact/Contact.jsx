import React from 'react';
import '../Contact/Contact.css';

const contact = () => {
    return (
        <div className="contact__container" id="contact">
            <div className="container__header">Contact Me</div>
            <div className="container__content">
                <div className="form">
                    <form className="contact__form" action="" method="post" name="contact__form">
                        <input placeholder="Name" type="text" required/>

                        <input placeholder="Email Address" type="text" required/>

                        <input placeholder="Message" type="text" required/>

                        <button className="submit" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default contact