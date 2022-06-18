import React from 'react'
import './login.css';


export default function footer() {
  return (
    <>
    

<form action="#" id="login-form">
  <div className="heading">Login to Everdwell</div>

  <div className="left">
    <label for="email">Email</label> <br />
    <input type="email" name="email" id="email" /> <br />
    <label for="password">Password</label> <br />
    <input type="password" name="password" id="pass" /> <br />
    <input type="submit" value="Login" />
  </div>

  <div className="right">
    <div className="connect">Connect with</div>
    <a href="" className="facebook">
{/* <!--       <span className="fontawesome-facebook"></span> --> */}
      <i className="fa fa-facebook" aria-hidden="true"></i>
    </a> <br />
    <a href="" className="twitter">
{/* <!--       <span className="fontawesome-twitter"></span> --> */}
      <i className="fa fa-twitter" aria-hidden="true"></i>
    </a> <br />
    <a href="" className="google-plus">
{/* <!--       <span className="fontawesome-google-plus"></span> --> */}
      <i className="fa fa-google-plus" aria-hidden="true"></i>
    </a>
  </div>
  
</form>  
    
    </>
  )
}
