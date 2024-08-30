import React, { useState } from "react";
import "../css/createacc.css";
import cross from "../assets/svg/cross.svg";
import logo from "../assets/images/X_logo.png";
import { useNavigate } from "react-router-dom";

const createacc = ({ setOpen }) => {
  const [data, setData] = useState({
    UserName: "",
    Name: "",
    Email: "",
    Password: "",
  });
  const [username, setusername] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  function save() {
    localStorage.setItem("user", username);
    localStorage.setItem("Name",name)
    localStorage.setItem("login", true);
    navigate("/");
  }

  return (
    <div className="create-pg">
      <div className="form">
        <header>
          <div className="xarrow">
            <img
              src={cross}
              alt="cross"
              onClick={() => {
                setOpen(false);
              }}
            />
          </div>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </header>
        <h1>Create Your Account</h1>
        <form>
          <input
            type="text"
            placeholder="UserName"
            // onChange={(e) => {
            //   setData({ ...data, UserName: e.target.value });

            // }}
            onChange={(e) => {
              setusername(e.target.value);
              setData({ ...data, UserName: e.target.value });
            }}
          />
          <input
            type="email"
            placeholder="Name"
            onChange={(e) => {
                 setName(e.target.value);
                 setData({ ...data, Name: e.target.value });
             }}
          />
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => {
              setData({ ...data, Email: e.target.value });
            }}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => {
              setData({ ...data, Password: e.target.value });
            }}
          />
        </form>
        <div className="button">
          <button onClick={save}>Create</button>
        </div>
      </div>
    </div>
  );
};

export default createacc;
