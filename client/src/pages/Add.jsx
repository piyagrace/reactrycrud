import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Add = () => {
    const [post,setPost] = useState ({
        title: "",
        content: "",
    });

    const navigate = useNavigate()

    const handleChange = (e) => {
        setPost((prev) => ({...prev, [e.target.name]: e.target.value}));
    };

    const handleClick = async e => {
        e.preventDefault()
        try{
            await axios.post("http://localhost:8800/post", post)
            navigate("/")
        }catch(err){
            console.log(err)
        }
    }

    console.log(post)
    return (
        <div className='form'>
            <h1>Add New Post</h1>
            <input type="text" placeholder="title" onChange={handleChange} name="title"/>
            <input type="text" placeholder="content" onChange={handleChange} name="content"/>
            <button className="formButton" onClick={handleClick}>Add post</button>
        </div>
    )
}

export default Add