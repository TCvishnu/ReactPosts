import "./Styles.css";

import React from 'react';
import { Link } from "react-router-dom";
import goToPostsIcon from './images/goToPosts.png';

export default function LoadingPage() {
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center
      gap-8 loadPage relative'>
        <h1 className='text-black text-9xl fontShadow'>FaceGram</h1>
        <p className='text-white text-3xl fontShadow'>Connect, Share, Thrive: Where Every Post Tells a Story.</p>

        <Link to="/posts">
        
            <img src={goToPostsIcon} alt="Go to Posts" className="fixed h-12 w-12 bottom-16 right-1/2 goToPostsShadow
            hover:-translate-y-2 hover:rotate-45 duration-1000"/>
        
        </Link>
    </div>
  )
}
