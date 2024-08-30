import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./components/login.jsx";
import Layout from "./components/layout.jsx";
import Post from "./components/post.jsx";
import { Route, Routes, useNavigate, BrowserRouter as Router } from "react-router-dom";

function App() {
  const [loginn, setLoginn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const login = localStorage.getItem("login");
    if (login === "true") {
      setLoginn(true);
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={loginn ? <Layout /> : <Login />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}


export default App;
