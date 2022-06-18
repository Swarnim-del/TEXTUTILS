import React from 'react'
import './signup.css';


export default function footer() {
  return (
    <>
    

<form action="#" id="login-form">
  <div class="heading">Login to Everdwell</div>
  <div class="left">
    <label for="email">Email</label> <br />
    <input type="email" name="email" id="email" /> <br />
    <label for="password">Password</label> <br />
    <input type="password" name="password" id="pass" /> <br />
    <input type="submit" value="Login" />
  </div>
  <div class="right">
    <div class="connect">Connect with</div>
    <a href="" class="facebook">
{/* <!--       <span class="fontawesome-facebook"></span> --> */}
      <i class="fa fa-facebook" aria-hidden="true"></i>
    </a> <br />
    <a href="" class="twitter">
{/* <!--       <span class="fontawesome-twitter"></span> --> */}
      <i class="fa fa-twitter" aria-hidden="true"></i>
    </a> <br />
    <a href="" class="google-plus">
{/* <!--       <span class="fontawesome-google-plus"></span> --> */}
      <i class="fa fa-google-plus" aria-hidden="true"></i>
    </a>
  </div>
</form>  
    
    </>
  )
}
