import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Components/Navbar";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import ViewVideo from "./Components/ViewVideo";
import { auth } from "./firebase";
import Register from "./Components/Register";
import Login from "./Components/Login";

function App() {
  const [user, setUser] = useState()
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    })
    return unsubscribe;
  })
  const [dark, setDark] = useState(false);
  const [input, setInput] = useState("");
  const [videos, setVideos] = useState([]);

  const options = {
    method: "GET",
    url: "https://youtube-v31.p.rapidapi.com/search",
    params: {
      q: input,
      part: "id,snippet",
      type: "video",
      maxResults: "50",
    },
    headers: {
      'X-RapidAPI-Key': '8d72235ac6msh7115468d05e6f98p15e962jsneb9daaa1f4bd',
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  const fetchVideos = async () => {
    try {
      const response = await axios.request(options);
      setVideos(response.data.items);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const searchVideos = (searchInput) => {
    setInput(searchInput);
  };

  useEffect(() => {
    fetchVideos();
  }, [input]);

  const handleSearch = () => {
    if (input.trim() === "") {
      return;
    }

  };

  return (
    <BrowserRouter>
      <div
        className="w-full h-screen">
        <Navbar
          searchVideos={searchVideos}
        />
        <div className="h-full w-full flex items-start  paramVideo">
          <Routes className="rounded-md">
            <Route path="/" element={<Home videos={videos} />} />
            <Route path="/register" element={user ? <Navigate to='/' /> : <Register />} />
            <Route path="/login" element={user ? <Navigate to='/' /> : <Login />} />
            <Route
              path="/playlist/vidio/:id"
              element={<ViewVideo videos={videos} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
