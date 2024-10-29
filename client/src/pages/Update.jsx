import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'

const Update = () => {
    const [post,setPost] = useState ({
        title: "",
        content: "",
    });

    const navigate = useNavigate()
    const location = useLocation()

    const postId = location.pathname.split("/")[2]

    console.log(location.pathname.split("/")[2])

    const handleChange = (e) => {
        setPost((prev) => ({...prev, [e.target.name]: e.target.value}));
    };

    const handleClick = async e => {
        e.preventDefault()
        try{
            await axios.put("http://localhost:8800/post/"+ postId, post)
            navigate("/")
        }catch(err){
            console.log(err)
        }
    }

    console.log(post)
    return (
        <div className='form'>
            <h1>Update Post</h1>
            <input type="text" placeholder="title" onChange={handleChange} name="title"/>
            <input type="text" placeholder="content" onChange={handleChange} name="content"/>
            <button className="formButton" onClick={handleClick}>Update</button>
        </div>
    )
}

export default Update;