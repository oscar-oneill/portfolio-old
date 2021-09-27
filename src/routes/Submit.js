import React from 'react'
import '../styles/Submit.css'
import Form from '../Components/Form'

const Submit = () => {
    let token = localStorage.getItem('token')

    document.title = 'Submit A New Blog Post';

    if (!token) {
        window.location.href = '/'
    } else {
        return (
            <div className="submit_container">
                <h2 className="submit_header">Submit A Blog Post</h2>
                <Form/>
            </div>
        )
    }
}

export default Submit
