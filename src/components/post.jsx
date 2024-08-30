import React, { useState } from "react";
import "../css/post.css";
import cross from "../assets/svg/cross.svg";
import logo from "../assets/images/X_logo.png";

const createacc = ({ setPostTrue ,setFormData,formData,setDetialArray,detialArray}) => {
    
     const handleImage=(e)=>{
        const file = e.target.files[0];
        setFormData((prevFormData) => ({
            ...prevFormData,
            image: file,
            url:URL.createObjectURL(file),
          }));
     }
     const arrAppend=()=>{
      setDetialArray((prev) => [...prev, formData]);
     }
    
    
  return (
    <div className="post-pg">
      <div className="form">
        <header>
          <div className="xarrow">
            <img
              src={cross}
              alt="cross"
              onClick={() => {
                setPostTrue(false);
              }}
            />
          </div>
          <div className="heading">
            <h1>Post</h1>
          </div>
        </header>
        
        <form>
          <input type="text" placeholder="About" onChange={(e)=>{setFormData({...formData,about : e.target.value})}}/>
          <input type="text" placeholder="Hashtag" onChange={(e)=>{setFormData({...formData,hashtag:e.target.value})}}/>
          <input type="file" className="file" onChange={handleImage}/>
        </form>
        <div className="button">
          <button onClick={() => {
                setPostTrue(false);
                arrAppend();
              }}>Post</button>
        </div>
      </div>
    </div>
  );
};

export default createacc;
