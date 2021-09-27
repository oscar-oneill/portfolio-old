import React from 'react'
import '../styles/SinglePost.css'
import loading from '../media/images/loading.gif'

const SinglePost = ({title, blogger, bgImage, description, created, text}) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const timestamp = created;
    const date = new Date(timestamp);
    const convertedDate = date.toLocaleDateString("en-US", options);

    document.title = `${title} by ${blogger}`;

    if (!created) {
        return (
            <div className="gif_container">
                <img className="loadingGIF" src={loading} alt="loading"/>
            </div>
        )
    } else {
        return (
            <div className="sp_container">
                <div id="data_container">
                    <h1>{title}</h1>
                    <h3>{description}</h3>
                </div>

                <img id="main_image" src={bgImage} alt={description}/>
                <h4 className="post_info">Posted by {blogger}</h4>
                <h4 className="post_info">{convertedDate}</h4>
                <article id="text_container" dangerouslySetInnerHTML={{__html: text}}></article>
            </div>
        )
    }
}

export default SinglePost
