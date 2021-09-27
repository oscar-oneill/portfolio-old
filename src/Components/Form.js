import React, {useState} from 'react'
import '../styles/Form.css'
import axios from 'axios'
import BlogConnection from '../API/BlogConnection'

const Form = () => {
    const [title, setTitle] = useState("");
    const [blogger, setBlogger] = useState("");
    const [text, setText] = useState("");
    const [bgImage, setBgImage] = useState("");
    const [description, setDescription] = useState("");

    const [countTitle, setCountTitle] = useState(0);
    const [countDescription, setCountDescription] = useState(0);


    const calculateTitle = (e) => {
        setCountTitle(e.target.value.length)
    }

    const calculateDescription = (e) => {
        setCountDescription(e.target.value.length)
    }

    const submitPost = async (e) => {
        e.preventDefault();
        const post_title = title;
        const post_text = text;
        const background_image = bgImage

        try {   
            BlogConnection.post('/posts/add', {
                post_title, post_text, blogger, background_image, description
            })
            .then(res => {
                window.location.href = '/blog'
            })
        } catch (err) {
            console.error("Error: ", err.message);
        }
    }

    return (
        <form className="form_container" onSubmit={submitPost}>
            <div className="form_input">
                <label>Post Title: {countTitle}/150</label>
				<input value={title} onChange={(e) => {setTitle(e.target.value); calculateTitle(e)}} name="title" type="text" placeholder="Post Title" required/>
            </div>

            <div className="form_input">
				<input value={blogger} onChange={(e) => setBlogger(e.target.value)} name="blogger" type="text" placeholder="Author" required/>
			</div>

            <div className="form_input">
				<input value={bgImage} onChange={(e) => setBgImage(e.target.value)} name="image" type="text" placeholder="Background Image" required/>
			</div>

            <div className="form_input">
                <label>Description: {countDescription}/200</label>
				<textarea id="description" value={description} onChange={(e) => {setDescription(e.target.value); calculateDescription(e)}} name="description" type="text" placeholder="Description" required/>
            </div>

            <div className="form_input">
				<textarea value={text} onChange={(e) => setText(e.target.value)} name="Blog Text" type="text" placeholder="Insert Text Here" required/>
			</div>

            <div className="form_button">
                <button className="form_submit">Submit</button>
            </div>
        </form>
    )
}

export default Form