import "./Styles.css";
import Header from "./Header";
import Post from "./Post";
import { useState, useEffect } from "react";

import React from 'react'

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [showPosts, setShowPosts] = useState([]);

    const fetchPosts = () => {
        fetch("http://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
            setPosts(json);
            setShowPosts(json.slice(0, 5));   
        })
    }
    useEffect(()=>{
        fetchPosts();
    },[]);

    const handleScrolling = (eventObject) => {
        if (eventObject.target.scrollTop + eventObject.target.clientHeight >= eventObject.target.scrollHeight){
            setShowPosts(prev => [...prev, ...posts.slice(prev.length, prev.length+5)]);
        }
    }

  return (
    <div className='w-screen h-screen flex flex-col justify-start items-center gap-12'>
        <Header />

        <div className="w-10/12 h-2/3 bg-white flex flex-col justify-start items-center 
         overflow-auto rounded-md gap-8" onScroll={handleScrolling}>
            {showPosts.map((post, index) => {
                return <Post header={post.title} body={post.body} key={index} postId={index+1}/>;
            })}
        </div>

        
    </div>
  )
}
