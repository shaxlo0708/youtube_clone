import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { CiDark } from "react-icons/ci";
import youtube from '../images/Shape.svg'
import {CgDarkMode} from 'react-icons/cg';
import { Link } from "react-router-dom";


const Navbar = ({ searchVideos }) => {
  const [input, setInput] = useState("");
  const [darked,setDark] = useState(false);
  function setDarkMode() {
    setDark(!darked)
  }
  document.body.className = darked ? 'dark' : '';
  const handleSearch = () => {
    if (input.trim() === "") {
      return;
    }
    searchVideos(input);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className="w-full h-[70px] flex fixed items-center justify-between nav">
      <div className="flex h-full items-center justify-between w-full px-10 pl-4">
        <Link to='/'>
        <div className="flex items-center gap-1">
        <img  src={youtube} alt="" />
        <p className="font-bold youtubeLogo text-[22px]">Youtube</p>
        </div>
        </Link>
       <form
          className="flex items-center justify-between bg-slate-100 px-2 w-[800px] h-[44px] rounded-3xl"
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <input
            className="border-none bg-transparent w-full h-full outline-none"
            type="text"
            placeholder="Search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button type="submit" className="focus:outline-none">
            <BiSearch />
          </button>
        </form>
       <div>
       <CgDarkMode color="red" onClick={setDarkMode} className="text-[50px] pl-[20px]"/>
       </div>
      </div>
    </div>
  );
};

export default Navbar;
