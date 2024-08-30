import React from 'react'
import '../css/layoutcss/right.css'
import search from '../assets/svg/search.svg'
import user from '../assets/images/user.jpeg'

const right = () => {
  return (
    <div className='right'>
      <div className="top">
        <div className="search">
          <input type="text" placeholder='search' />
          <img src={search} alt="search" />
        </div>
      </div>
      <div className="bottom">
        <div className="div">
            <div className="logo">
                <img src={user} alt="user-profile" />
            </div>
            <div className="user">
                <p className='username'>Ragul</p>
                <p className="id">ragul@2125</p>
            </div>
            <button>Follow</button>
        </div>
        <div className="div">
            <div className="logo">
                <img src={user} alt="user-profile" />
            </div>
            <div className="user">
                <p className='username'>Ragul</p>
                <p className="id">ragul@2125</p>
            </div>
            <button>Follow</button>
        </div>
        <div className="div">
            <div className="logo">
                <img src={user} alt="user-profile" />
            </div>
            <div className="user">
                <p className='username'>Ragul</p>
                <p className="id">ragul@2125</p>
            </div>
            <button>Follow</button>
        </div>
        <div className="div">
            <div className="logo">
                <img src={user} alt="user-profile" />
            </div>
            <div className="user">
                <p className='username'>Ragul</p>
                <p className="id">ragul@2125</p>
            </div>
            <button>Follow</button>
        </div>
        
      </div>
    </div>
  )
}

export default right
