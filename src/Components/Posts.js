import React from 'react'
import '../styles/Posts.css'

const Posts = ({title, blogger, bgImage, description, created, id}) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const timestamp = created;
    const date = new Date(timestamp);
    const convertedDate = date.toLocaleDateString("en-US", options);

    const style = {
        backgroundImage: `linear-gradient(to bottom, rgba(36, 36, 36, 0.39) 0%, rgb(24, 20, 20) 100%), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
    }

    return (
        <div className="post_container" style={style}>
            <h1>{title}</h1>
            <h4>by {blogger} on {!convertedDate ? "" : convertedDate}</h4>
            <h4><em>{description}</em></h4>

            <button className="form_submit">
                <a href={`/blog/post/${id}`}>Read Blog</a>
            </button>
        </div>
    )
}

export default Posts
