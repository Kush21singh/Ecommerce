import React from 'react';
import './Headers.css';
import { NavLink, useLocation } from 'react-router-dom';
import HeaderButton from './HeaderButton';

function Headers(props) {
  const location = useLocation();
  const isHomePage = location.pathname === '/Home';

  const storeClickHandler = () => {
    // Add any specific logic for store access here if needed
  };

  return (
    <>
      <div className='main-container'>
        <div style={{ flexGrow: "2" }}></div>
        <div style={{ flexGrow: "8" }} className='child2'>
          <div> <NavLink to='Home' className="nav">Home</NavLink></div>
          <div> <NavLink to='Product' onClick={storeClickHandler} className="nav">Store</NavLink></div>
          <div> <NavLink to='About' className="nav">About</NavLink></div>
        </div>
        <div style={{ flexGrow: "2" }} className='childs3'>
          {/* Conditionally render the header button */}
          {!isHomePage && (
            <HeaderButton onClick={props.onShowCart} />
          )}
        </div>
      </div>
      <div className="Genrics">
        <h1>The Generics</h1>
      </div>
    </>
  )
}

export default Headers;
