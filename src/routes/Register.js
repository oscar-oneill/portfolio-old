import React, { useState } from 'react';
import '../styles/Login.css'
import axios from 'axios'
import BlogConnection from '../API/BlogConnection'

const Register = () => {
    const [first, setFirst] = useState("")
    const [last, setLast] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    let token = localStorage.getItem('token')

    const handleSubmit = (e) => {
        e.preventDefault()

        let first_name = first;
        let last_name = last;

        try {
            BlogConnection.post('/auth/register', {
                first_name, last_name, username, password
            }).then(res => {
                console.log(res)
                setFirst("")
                setLast("")
                setUsername("")
                setPassword("")
            })
        } catch (err) {
            console.error("Error: ", err.message);
        }
    }

    if (!token) {
        window.location.href = '/blog'
    } else {
        return (
            <form className="access_container" onSubmit={handleSubmit}>
                <input value={first} placeholder="First Name" onChange={e => setFirst(e.target.value)} type="text" required/>
                <input value={last} placeholder="Last Name" onChange={e => setLast(e.target.value)} type="text" required/>
                <input value={username} placeholder="Username" onChange={e => setUsername(e.target.value)} type="text" required/>
                <input value={password} placeholder="Password" onChange={e => setPassword(e.target.value)} type="password" required/>
                <button className="submit-form" type="submit">Submit</button>
            </form>
        )
    }
}

export default Register
