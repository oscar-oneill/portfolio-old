import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../styles/BlogPage.css'
import SinglePost from '../Components/SinglePost'
import BlogNavigation from '../Components/BlogNavigation'
import BlogConnection from '../API/BlogConnection'

const BlogPage = () => {
    const id = window.location.pathname.slice(11);
    
    const [data, setData] = useState("");

    useEffect(() => {
        BlogConnection.get(`/posts/${id}`)
        .then(res => {
            setData(res.data)
        })
    }, [id])

    return (
        <div>
            <BlogNavigation/>
            <div className="pg_container">
                <SinglePost
                    title={data.post_title} 
                    blogger={data.blogger} 
                    bgImage={data.background_image} 
                    description={data.description} 
                    text={data.post_text}
                    created={data.created}
                />
            </div>
        </div>
    )
}

export default BlogPage
