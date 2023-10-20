import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
function Footer() {
  return (
    <div className='footer'>
        <div className='footerChild'>
            <h1>The Generics</h1>
        </div>
        <div className='footerChild1'>
        <a href='https://www.youtube.com/'><FontAwesomeIcon icon={faYoutube} size='2x'  className='icon fa-bounce' rotation={180} style={{color:"red",borderColor:"red"}} /></a>
        <a href='https://accounts.spotify.com/en/login'><FontAwesomeIcon icon={faSpotify} size="2x" className='icon fa-bounce'/></a>
        <a href='https://www.facebook.com/login/'> <FontAwesomeIcon icon={faFacebookF} size="2x" className='icon fa-bounce' rotation={180} style={{color:""}} /></a>
        </div>

    </div>
  )
}

export default Footer