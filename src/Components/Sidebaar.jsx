import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineHome,AiOutlineFire,AiOutlineLogin} from 'react-icons/ai'
import {BiMoviePlay,BiLogOutCircle} from 'react-icons/bi'
import {BsFileEarmarkMusic,BsFillJournalBookmarkFill} from 'react-icons/bs'
import { auth } from '../firebase'
const Sidebaar = () => {
  const handleSignOut = async () => {
    await auth.signOut();
}
  return (
    <div className='pl-4 sticky left-0 flex flex-col gap-3 bar top-20 pr-[150px]'>
        <div className='flex items-center gap-3'>
        <AiOutlineHome className='text-[30px]'/>
        <Link className='block text-red-500 text-[23px] logo_text' to='/'>Home</Link>
        </div>
        <div className='flex items-center gap-3'>
        <BiMoviePlay className='text-[30px]'/>
        <Link className='block text text-[23px] logo_text' to='/'>movie</Link>
        </div>
        <div className='flex items-center gap-3'>
        <AiOutlineFire className='text-[30px]'/>
        <Link className='block text text-[23px] logo_text' to='/'>trends</Link>
        </div>
        <div className='flex items-center gap-3'>
        <BsFileEarmarkMusic className='text-[30px]'/>
        <Link className='block text text-[23px] logo_text' to='/'>Music</Link>
        </div>
        <div className='flex items-center gap-3'>
        <BsFillJournalBookmarkFill className='text-[30px]'/>
        <Link className='block text text-[23px] logo_text' to='/'>Books</Link>
        </div>
        <hr className='text-black'/>
        <div className='flex items-center gap-3'>
        <AiOutlineLogin className='text-[30px]'/>
        <Link className='block text text-[23px] logo_text' to='/Register'>Login</Link>
        </div>
        <div onClick={handleSignOut} className='flex items-center gap-3'>
        <BiLogOutCircle className='text-[30px]'/>
        <Link className='block text text-[23px] logo_text' to='/'>logout</Link>
        </div>

    </div>
  )
}

export default Sidebaar