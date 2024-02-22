import React from 'react';
import menuIcon from './images/menu.png';

export default function Header() {

    return (
    <div className='w-full h-1/6 flex flex-col items-center justify-center headerShadow rounded-md relative'>
            <h1 className='font-shadow text-5xl'>FaceGram</h1>
            <p className="font-shadow text-lg">Connect, Share, Thrive: Where Every Post Tells a Story.</p>
            <button>
              <img src={menuIcon} className="h-8 2-8 fixed right-6 top-6 hover:rotate-90 hover:scale-125 duration-500" alt="Menu" />
            </button>
    </div>
  )
}
