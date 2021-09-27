import React, { useState } from 'react';
import '../styles/Login.css'
import axios from 'axios'
import BlogConnection from '../API/BlogConnection'

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        try {
            BlogConnection.post('/auth/login', {
                username, password
            }).then(res => {
                console.table(res)
                localStorage.setItem("token", res.data.data.token)
                setUsername("")
                setPassword("")
                window.location.href = '/blog'
            })
        } catch (err) {
            console.error("Error: ", err.message);
        }
    }

    return (
        <form className="access_container" onSubmit={handleSubmit}>
            <input value={username} onChange={e => setUsername(e.target.value)} name="Username" type="text" placeholder="Username" required></input>
            <input value={password} onChange={e => setPassword(e.target.value)} name="Password" type="password" placeholder="Password" required></input>
            <button className="submit-form" type="submit">Submit</button>
        </form>
    )
}

export default Login