/* eslint-disable react/jsx-no-undef */
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Posts = () => {

    const [posts,setPosts] = useState([])

    useEffect(()=>{
        const fetchAllPosts = async ()=>{
            try{
              const res = await axios.get("http://localhost:8800/post")
              setPosts(res.data);
            }catch(err){
                console.log(err)
            }
        }
        fetchAllPosts()
    },[])

const handleDelete = async (id)=>{
    try{
        await axios.delete("http://localhost:8800/post/"+id)
        window.location.reload()
    }catch(err){
        console.log(err)
    }
}

    return (
        <div>
        <h1>List of Posts:</h1>
        <div className="post">
            {posts.map((post) => (
                <div className ="post">
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                <button className="delete" onClick={()=>handleDelete(post.id)}>Delete</button>
                <button className="update"><Link to={`/update/${post.id}`}>Update</Link></button>
                </div>
            ))}
        </div>
        <button><Link to="/add">Add new post</Link></button>
        </div>
    )
}

export default Posts