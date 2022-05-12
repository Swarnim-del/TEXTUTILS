import React from "react";
import PropTypes from "prop-types";
import { Dropdown } from "react-bootstrap";
import { DropdownButton } from "react-bootstrap";

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href=""></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
         
            
                <ul className="navbar-nav me-auto mb-2 mb-xxl-1 ">
                  <li className="nav-item " id="heading1">
                    <a className="nav-link " aria-current="page" href="#">
                      TextUtils
                    </a>
                  </li>
                </ul>
            
          
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link " aria-current="page" href="#">
                      {props.title}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#abt">
                      {props.aboutText}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#abt">
                      Login
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#abt">
                      SignUp
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#abt">
                      <img src="../../public/profile.jpg" alt="#" />
                    </a>
                  </li>
                </ul>
              
        
          </div>
        </div>

        {/* -- Login  -->
        {% if user.is_authenticated %}<! */}

        {/* {% else %}
        <a href="login">

            <button type="button" className="btn btn-primary" >
                Login/Signup
            </button>
        </a>
        {% endif %} */}

        {/* <!-- SignUp  --> */}

        {/* <!-- <div className="container"> --> */}
        {/* {% if user.is_authenticated %}
              <a className="navbar-brand" href="/profile">
                <img  id="logo" src="{% static 'pro.jpg' %}" alt="" width="50px" height="50px"/>
              </a>
              {% endif %}
            <!-- </div> -->
          <!-- </nav> --> */}
      </nav>
    </>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Profile",
  aboutText: "About",
  nav: "Nav",
};
