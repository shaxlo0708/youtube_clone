import React from "react";
import { NavLink } from "react-router-dom";
import Sidebaar from "./Sidebaar";
import { auth } from "../firebase";
import { Link } from 'react-router-dom'
import {AiOutlineHome,AiOutlineFire,AiOutlineLogin} from 'react-icons/ai'
import {BiMoviePlay,BiLogOutCircle} from 'react-icons/bi'
import {BsFileEarmarkMusic,BsFillJournalBookmarkFill} from 'react-icons/bs'
const Home = ({ videos }) => {
  const handleSignOut = async () => {
    await auth.signOut();
}
  return (
    <div className=" home mt-[80px]">
      <div className="flex items-start">
      <Sidebaar/>
      <div className="flex flex-wrap justify-center gap-2">
      {videos.map((video, index) => (
        <NavLink className='m-auto block' key={index} to={`/playlist/vidio/${video.id.videoId}`}>
          <div className="rounded m-auto block" key={index}>
            <img
              className="border-16 m-auto block"
              src={video.snippet.thumbnails.medium.url}
              alt=""
            />
            <div>
            <h2 className="max-w-[300px] text-left">{video.snippet.title}</h2>
            </div>
          </div>
        </NavLink>
      ))}
      </div>
      </div>
      <div className="bottom_bar fixed z-10 b_bar w-full items-center justify-between h-[70px] bottom-0">
      <div className=' items-center flex flex-col '>
        <BsFileEarmarkMusic className='text-[33px]'/>
        <Link className=' text text-[23px] ' to='/'>music</Link>
        </div>
        <div className=' items-center flex flex-col '>
        <BsFillJournalBookmarkFill className='text-[33px]'/>
        <Link className=' text text-[23px] ' to='/'>book</Link>
        </div>
        <hr className='text-black'/>
        <div className=' items-center flex flex-col '>
        <AiOutlineLogin className='text-[33px]'/>
        <Link className=' text text-[23px] ' to='/Register'>login</Link>
        </div>
        <div onClick={handleSignOut} className='  flex flex-col '>
        <BiLogOutCircle className='text-[33px]'/>
        <Link className=' text text-[23px] ' to='/'>logut</Link>
        </div>

      </div>
    </div>
  );
};

export default Home;
