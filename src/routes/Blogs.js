import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Posts from '../Components/Posts'
import BlogNavigation from '../Components/BlogNavigation'
import BlogConnection from '../API/BlogConnection'
import Loading from '../Hooks/Loading'


const Blogs = () => {
    const [blogs, setBlogs] = useState("")
    const [loaded, setLoaded] = useState(false)

    document.title = "Oscar O'Neill | Blog";

    useEffect(() => {
        getBlogs()
    }, [])

    const getBlogs = () => {
        try {
            BlogConnection.get('/posts/all')
            .then(res => {
                setBlogs(res.data)
                setLoaded(true)
            })
        } catch (err) {
            console.error(err.message)
        }
    }

    if (!loaded) {
        return (
            <div className="main_container">
                <div className="gif_container">
                    <span style={{ fontFamily: 'sans-serif' }}>Loading Posts...</span>
                </div>
            </div>
        )
    }   else {  
            return (
                <div>
                    <BlogNavigation/>
                    <div className="main_container">
                        {blogs && blogs.map((blog) => (
                            <Posts
                                key={blog._id}
                                id={blog._id}
                                title={blog.post_title}
                                blogger={blog.blogger}
                                bgImage={blog.background_image}
                                description={blog.description}
                                created={blog.created}
                            />
                        ))}
                    </div>
                </div>
            )
        }
    }

export default Blogs
