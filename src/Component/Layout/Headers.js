import React, { useContext } from 'react';
import './Headers.css';
import HeaderButton from './HeaderButton';
import { NavLink, useLocation } from 'react-router-dom';
import AuthContext from '../Store/auth-Context';


function Headers(props) {
  const authCtx=useContext(AuthContext);
  const isLogged=authCtx.isLonggedIn

  const longoutHandler=()=>{
    authCtx.longout()
  }
  const location=useLocation()
  const isHomePage = location.pathname === '/Home';
  const isAboutPage=location.pathname === '/About';
  const isContactus=location.pathname==='/ContactUs';
  const storeClickHandler = () => {
    if (!isLogged) {
      alert('Please login before accessing the Store.');
    }
  };
  return (
    <>
    <div className='main-container'>
        <div style={{flexGrow:"2"}}></div>
        <div style={{flexGrow:"8"}} className='child2'>
           <div> <NavLink to='Home' className="nav">Home</NavLink></div>
           <div> <NavLink to='Product' onClick={storeClickHandler} className="nav">Store</NavLink></div>
          <div>  <NavLink to='About' className="nav">About</NavLink></div>
          <div> <NavLink to='ContactUs' className="nav">Contact Us</NavLink></div> 
        </div>
        <div style={{flexGrow:"2"}} className='childs3'>
          {!isLogged && (
           <NavLink to='/auth' className="nav"> Loging</NavLink>
          )}
        {isLogged && (
         <NavLink to="/profile" className="nav"> Profile</NavLink>
        )}
        {isLogged && (
         <NavLink to="/" onClick={longoutHandler} className="nav"> LogOut</NavLink>
        )}
        { !isHomePage && !isAboutPage && !isContactus && isLogged && (
           <HeaderButton onClick={props.onShowCart}/>
        )}
           
        </div>
    </div>
    <div className="Genrics">
          <h1>The Generics</h1>
        </div>
    </>
  )
}

export default Headers