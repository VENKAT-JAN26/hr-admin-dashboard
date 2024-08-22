import React from 'react'
import './index.css'
import { logo, logo2 } from '../../constants/images';
import icons from '../../constants/icons';

import {useNavigate } from 'react-router-dom'
const SignInCard = () => {
          const navigate = useNavigate();
  return (
  <div className='SignIn'>
    <div className='signInCard'>
         <div className='signInCard_logo'>
         <img  src={logo} alt='logo'/>
         <h3>Your Logo</h3>
      </div>
      <form className='signinform'>
          <h1>Sign Into</h1>
          <h3>Your Account</h3>
       <div className='signin_input'><span>{icons.companyId}</span><input type='number' placeholder='Company ID'/></div>
       <div className='signin_input'><span>{icons.password}</span><input type='password' placeholder='Password'/></div>
       <div className='signcheckbox'><input type='checkbox'/><span>Remember Me</span></div>  
       <button className='signinbutton' onClick={()=>navigate('/dashboard')}>Sign In</button>
      </form>
   </div>
    <img className='sign_img'src={logo2} alt='loadind...'/>
 </div>

  )
}

export default SignInCard;




