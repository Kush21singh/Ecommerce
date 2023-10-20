import React from 'react'
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';


function Home() {
  return (
   <>
   <header className='home'>
    <h1 className='headerhome'>The Generics</h1>
    <div className='home_latestpage'>Get Our Latest Album</div>
    <div>
    <FontAwesomeIcon icon={faPlay} size="2x" color="red" className='plybtn' />
    </div>
   </header>
   <section>
    <h2 className='tour'>Tours</h2>
    <div className='main-containers'>
        <div className='content'>
            <div>JULY 16</div>
            <div>DEdivON ,MI</div>
            <div>DTE ENERGY MUSIC THEATRE</div>
            <div className='buy'>BUY TICKET</div>
        </div>
        <div className='content'>
            <div>JULY 19</div>
            <div>TORONTO, ON</div>
            <div>BUDWEISER STAGE</div>
            <div className='buy'>BUY TICKET</div>
        </div>
        <div className='content'>
            <div>JULY 22</div>
            <div>BRISTOW,VA</div>
            <div>JIGGY LUBE LIVE</div>
            <div className='buy'>BUY TICKET</div>
        </div>
        <div className='content'>
            <div>JULY 29</div>
            <div>PHOENIX ,AZ</div>
            <div>AK-CHIN PAVALION</div>
            <div className='buy'>BUY TICKET</div>
        </div>
        <div className='content'>
            <div>AUG 2</div>
            <div>LAS VEGAS,NV</div>
            <div>T-MOBILE AREA</div>
            <div className='buy'>BUY TICKET</div>
        </div>
        <div className='content'>
            <div>AUG 7</div>
            <div>CONCORD ,CA</div>
            <div>CONCORD PAVILION</div>
            <div className='buy'>BUY TICKET</div>
        </div>
        
    </div>
   </section>
   </>
  )
}

export default Home