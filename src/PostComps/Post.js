import React from 'react';
import thumbsIcon from './images/post-thumb.png'; 
import { useState, useEffect } from 'react';

export default function Post(props) {

    const [comments, setComments] = useState([]);

    const fetchComments = () =>{
        fetch("http://jsonplaceholder.typicode.com/comments")
        .then(response => response.json())
        .then (json => {
            setComments(json.filter(comment => comment.postId === props.postId));
        })
    }

    useEffect(()=>{
        fetchComments();
    }, []);
  return (
    <div className='w-11/12 min-h-full flex flex-row justify-start items-center'>
        <div className='w-4/12 h-5/6 border-2 border-gray-400 ml-8 rounded-s-md flex flex-col items-center justify-center gap-2'>
            <div className='w-5/6 h-1/3 bg-white rounded-sm flex flex-col justify-center items-center'>
                <h1 className='text-black font-Inika overflow-y-scroll m-4'>
                {props.header}  
                </h1>
            </div>
            <div className='w-5/6 h-3/6 bg-white rounded-sm flex flex-col justify-start items-center relative'>
                <p className='text-black font-RegularInika m-4 text-sm overflow-auto h-28'>{props.body}</p>
                <div className='flex flex-row absolute bottom-4 left-4 gap-2'>
                {/* <button>
                    <img src={thumbsIcon} alt="thumbs up" className='w-8 h-8' />
                </button>

                <button>
                    <img src={thumbsIcon} alt="thumbs up" className='w-8 h-8 rotate-180' />
                </button>

                <input placeholder='Reply' className='text-black w-40 border-b-2 border-black focus:outline-none'/>
                 */}
            </div>
            </div>

            
        </div>

        <div className='w-7/12 h-5/6 border-t-2 border-b-2 border-e-2 border-gray-400 rounded-e-md flex flex-col items-center justify-center'>
            <div className='flex flex-col justify-start items-center gap-4 w-full h-5/6 overflow-y-auto relative'>
                <div className='w-11/12 h-12 bg-white rounded-sm font-Inika sticky top-0'>
                    <h1 className='text-black text-center text-xl'>Comments</h1>
                </div>
            {comments.map(((comment, index )=> {
                return <div key={index} className="w-11/12 rounded-sm bg-white font-RegularInika border-2 border-gray-400" >
                         <p className='text-black m-4 border-b-2 border-black'>{comment.email}</p>
                         <p className='text-black m-4'>{comment.body}</p>

                         {/* <div className='ml-4 flex flex-row gap-2 mb-1'>
                            <button>
                                <img src={thumbsIcon} alt="thumbs up" className='w-8 h-8' />
                            </button>

                            <button>
                                <img src={thumbsIcon} alt="thumbs up" className='w-8 h-8 rotate-180' />
                            </button>

                            <input placeholder='Reply' className='text-black ml-4 border-b-2 border-black focus:outline-none'/>
                         </div> */}
                       </div>
            }))}
            </div>
        </div>

    </div>
  )
}
