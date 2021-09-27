import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'

const AuthItems = () => {
    // eslint-disable-next-line
    const {isAuthenticated, setIsAuthenticated} = useContext(AuthContext)
    const urlPathname = window.location.pathname;
    let id = window.location.pathname.slice(11)
    let token = localStorage.getItem('token')

    const logout = (e) => {
        e.preventDefault()
        localStorage.removeItem("token");
        setIsAuthenticated(false)
        window.location.reload()
    }

    return (
        <ul>
            <li style={{cursor: "pointer"}}><h4><a href="/submit">Submit</a></h4></li>
            {(urlPathname.includes("/blog/post") && token) ?
            <li style={{cursor: "pointer"}}><h4><a href={`/blog/edit/${id}`}>Edit Post</a></h4></li> : ""
            }
            <li style={{cursor: "pointer"}} onClick={e => logout(e)}><h4>Logout</h4></li>
        </ul>
    )
}

export default AuthItems
