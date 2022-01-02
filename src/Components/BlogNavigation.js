import React from 'react'
import '../styles/BlogNavigation.css';
import { Link } from 'react-router-dom'
import AuthItems from './AuthItems';
import Items from './Items';

const BlogNavigation = () => {
    const token = localStorage.getItem('token')

    let style = {}
    const urlPathname = window.location.pathname;

    if (urlPathname === "/blog") {
        style.color = '#fff'
    } else {
        (style.color = '#2E2E2E') && 
        (style.backgroundColor = '#f8f8ff') &&
        (style.zIndex = '1')
    }

    return (
        <nav className="nav_container_blog" style={style}>
            <h3><Link to="/blog">Oscar's Blog</Link></h3>

            {token ? <AuthItems/> : <Items/>}
        </nav>
    )
}

export default BlogNavigation
