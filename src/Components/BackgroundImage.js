import './Styles/BackgroundImage.css';
import image4 from '../assets/img4.jpg'
import React from 'react'
import { Link } from 'react-router-dom';

const BackgroundImage = () => {
  return (
    <div className='Background'>
        <div className='img'>
            <img className='img4'
            src={image4} alt='image4'/>
        </div>
        <div className='content'>
            <p>Welcome to my personal webpage!</p> 
            <h1>Frontend Developer.</h1>
            <div className='btn'>
                <Link to='/Projects'>Project</Link>
            </div>
            <div className='btn-light'>
                <Link to='/Contact'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default BackgroundImage
