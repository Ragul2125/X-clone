import React from 'react'
import Left from './left'
import Middle from './middle'
import Right from './right'
import { useState } from 'react'
import '../css/layoutcss/left.css'
import Postpg from '../components/post.jsx'

const layout = () => {
  const[postTrue,setPostTrue]=useState(false);
  const [formData, setFormData] = useState({
    image: null,
    url: '',
    about:"",
    hashtag:""
  });
  const [detialArray,setDetialArray]=useState([])

  
  return (
    <>
    <div className="lay">
    {postTrue && (<Postpg setPostTrue={setPostTrue} setFormData={setFormData} formData={formData } setDetialArray={setDetialArray} detialArray={detialArray}/>)}
      <div className="layout"> 
        <Left />
        <Middle  setPostTrue={setPostTrue} formData={formData} detialArray={detialArray}/>
        <Right/>
     </div>
     </div>
    </>
  )
}

export default layout
