import React, { useState } from "react";
import "../css/layoutcss/middle.css";
import gallery from "../assets/svg/gallery.svg";
import gif from "../assets/svg/gif.svg";
import poll from "../assets/svg/poll.svg";
import emoji from "../assets/svg/emoji.svg";
import schedule from "../assets/svg/schedule.svg";
import user from "../assets/images/user.jpeg";
import like from '../assets/svg/likes.svg'
import comment from '../assets/svg/comment.svg'
import share from '../assets/svg/share.svg'


const middle = ({setPostTrue,detialArray}) => {
  const [post,setPost]=useState({
    id:"Ragul2125",
    Name:"Ragul",
    about:"A hashtag is a metadata tag that is prefaced by the hash symbol, On social media, hashtags are used on microblogging and photo-sharing services such as Twitter or Tumblr as a form of user-generated tagging that enables cross-referencing of content by topic or theme",
    hashtag:"#style #happy #photo #life #nature #insta #cute #viral #likesforlike #model #music #travel #memes #explorepage #liker #girl #explore #selfie #india #beauty #k #lfl #trending ",
  })
  
  const Post=()=>{
    setPostTrue(true);
    
  }
  return (
    <div className="middle">
      
      <header>
        <div className="foryou">
          <p>For You</p>
        </div>
        <div className="Following">
          <p>Following</p>
        </div>
      </header>
      <div className="to-post">
        <div className="up">
          <img src={user} alt="logo" className="logo" />
          <input type="text" placeholder="What is happening?!" />
        </div>
        <div className="bottom">
          <div className="icons">
            <img src={gallery} alt="gallery" />
            <img src={gif} alt="gif" />
            <img src={poll} alt="poll" />
            <img src={emoji} alt="emoji" />
            <img src={schedule} alt="schedule" />
          </div>
          <div className="button">
            <button onClick={Post}>Post</button>
          </div>
        </div>
      </div>
      {/* creating post */}
      {detialArray.map((item,index)=>(
        <div className="posts" key={item.index}>
        <div className="header">
          <div className="header-img">
            <img src={user} alt="logo" className="logo" />         
           </div>
          <div className="about">
            <div className="id">
              <div className="user-name"><h3>{post.Name}</h3></div>
              <div className="user-id"><p>@{post.id}</p></div>
            </div>
            <div className="about-post">
              <p>{item.about}</p>
            </div>
            <div className="hashtag">
              <p>{item.hashtag}</p>
            </div>
          </div>
        </div>
        <div className="body">
        <img src={item.url} alt="logo" className="logo" />
        </div>
        <div className="likes">
          <div className="icons">
            <img src={like} alt="likes" />
            <img src={comment} alt="comment" />
            <img src={share} alt="share" />
          </div>
        </div>
      </div>
      ))}
      

    </div>

  );
};

export default middle;
