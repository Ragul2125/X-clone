import React from 'react'
import '../css/layoutcss/left.css'
import home from '../assets/svg/home.svg'
import message from '../assets/svg/message.svg'
import notification from '../assets/svg/notification.svg'
import profile from '../assets/svg/profile.svg'
import logo from '../assets/images/X_logo.png'
import user from '../assets/images/user.jpeg'

const left = () => {
  
  return (
    <div className='left'>
     
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="links">
      <div className="link">
        <img src={home}alt="home" />
        <p>Home</p>
      </div>
      <div className="link">
        <img src={message}alt="home" />
        <p>Message</p>
      </div>
      <div className="link">
        <img src={notification}alt="home" />
        <p>Notification</p>
      </div>
      <div className="link">
        <img src={profile}alt="home" />
        <p>Profile</p>
      </div>
      </div>
      <div className="button">
        <button>
            <div className="LOGO">
                <img src={user} alt="user-profile" />
            </div>
            <div className="user">
                <p className='username'>Ragul</p>
                <p className="id">ragul@2125</p>
            </div>

        </button>
      </div>
    </div>
  )
}

export default left
