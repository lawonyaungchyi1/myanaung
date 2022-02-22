import { useState, useEffect } from "react";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Members from "./pages/Members/Members";
import Navbar from "./components/Navbar/Navbar";
import Overlay from "./components/Overlay/Overlay";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Post from "./pages/Posts/Post";
import Thank from "./pages/Thank/Thank";
import ScrollToTop from "./ScollToTop/ScollToTop-reactrouter";
import BackToTop from "./BackToTop/BackToTop";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(() => !open);
  };

  return (
    <>
      <Router>
        {open ? (
          <Overlay handleOpen={handleOpen} open={open} />
        ) : (
          <>
            <Navbar handleOpen={handleOpen} open={open} />
            <ScrollToTop />
            <Routes>
              <Route path="/myanaung" element={<Home />} />
              <Route path="/myanaung/members" element={<Members />} />
              <Route path="/myanaung/posts" element={<Post />} />
              <Route path="/myanaung/thank" element={<Thank />} />
              <Route path="/myanaung/login" element={<Login />} />
              <Route path="/myanaung/register" element={<Register />} />
            </Routes>
            <BackToTop />
          </>
        )}
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
