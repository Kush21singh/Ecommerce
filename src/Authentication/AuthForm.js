import React, { useContext, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import classes from './AuthForm.module.css'
import AuthContext from '../Component/Store/auth-Context';

function AuthForm() {
    const navigate=useNavigate()
    const [isLogin,Setloging]=useState(false)

   const authCtx= useContext(AuthContext)
    
    const emailInputRef=useRef()
    const passwordInputRef=useRef()
    const [isLoading, setLoading]=useState(false);
    const switchAuthModeHandler=()=>{
        Setloging((preState)=>!preState)
    }

    const submitHandler=(event)=>{
      event.preventDefault();
      const enterEmail=emailInputRef.current.value;
      const enterpassword=passwordInputRef.current.value;
      /// add validatiiom optional

      setLoading(true)
      let url;
     if(isLogin){
      url="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDQAAm1nVm5f2Naqp44clnc_rju81_meX8"
     }else{
      url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDQAAm1nVm5f2Naqp44clnc_rju81_meX8'
  
     }
     fetch(
      url,
     {
       method:"POST",
       body:JSON.stringify({
         email:enterEmail,
         password:enterpassword,
         returnSecureToken:true,
       }),
       headers:{
        'Content-Type': 'application/json'
       }
     }
     ).then(res=>{
       setLoading(false)
       if(res.ok){
        return res.json()
       }else{
         return res.json().then((data=>{
           let errormassage="Authentication failed";
          // if(data && data.error && data.error.message){
          //  errormassage=data.error.message
          // }
  
            throw new Error(errormassage)
         }))
  
       }
     }).then((data)=>{
        
        authCtx.login(data.idToken)
        localStorage.setItem("email",enterEmail)
        navigate("/")
      console.log(data)
     }).catch((err)=>{
      alert(err.message)
     })
  
    }
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required ref={passwordInputRef}
          />
        </div>
        <div>
       {!isLoading && <button style={{padding:"8px"}}>{isLogin ? "Login" : "Create Account"}</button>}
       {isLoading && <p>send request</p>}
        </div>
        <div className={classes.actions}>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  )
}

export default AuthForm