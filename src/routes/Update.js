import React, { useState, useEffect } from 'react'
import UpdateForm from '../Components/UpdateForm'
import axios from 'axios'
import BlogConnection from '../API/BlogConnection'

const Update = () => {
    let id = window.location.pathname.slice(11)
    const [data, setData] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    let token = localStorage.getItem('token')

    document.title = 'Editing A Blog Post';

    useEffect(() => {
        getBlog()
    }, [])

    const getBlog = () => {
        BlogConnection.get(`/posts/${id}`)
        .then(res => {
            setData(res.data)
            setIsLoaded(true)
        })
    }

    if (!token) {
        window.location.href = '/blog'
    } else {
        if (!isLoaded) {
            return 'Loading...'
        } else {
            return (
                <div className="submit_container">
                    <h2 className="submit_header">Edit A Blog Post</h2>
                    <UpdateForm
                        id={id}
                        newTitle={data.post_title}
                        newBlogger={data.blogger}
                        newText={data.post_text}
                        newImage={data.background_image}
                        newDescription={data.description}
                    />
                </div>
            )
        }
    }
}

export default Update
