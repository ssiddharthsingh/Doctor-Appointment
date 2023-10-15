import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../css/navbar.css";


const Navbar = () => {
  const [auth, setAuth] = useState();
  const navigate = useNavigate();

  var userName = JSON.parse(localStorage.getItem("userInfo"));

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    let userData = JSON.parse(localStorage.getItem('userInfo'));
    setAuth(userData);
    if (userData) {
      setAuth(userData)
      // localStorage.setItem("userInfo",JSON.stringify(userData))
      // navigate('/',{replace:true});
    }
    else {
      localStorage.clear('userInfo');
    }
  }, [navigate])

  const logoutUser = () => {
    localStorage.removeItem('userInfo');
    window.location.reload();
  }




  return (<>
    <div className="box">
      <div className="navbar">
        <p className="med-care">
          <Link to="/" className="plusSign">+</Link>
          <Link to="/" className="SiteTitle">MediCare</Link>
        </p>
        <div className="left-menu">
          <Link to="/findADoc" className="find-a-doc"> Find A Doctor </Link>
          <Link to="/services" className="services"> Services </Link>
        </div>
        <div className="right-menu">
          {/* <div className="sign-inbtn">
            <div className="SignInBtn">
              <Link to="/signUp" className="SignUptxt"> Sign Up </Link>
            </div>
          </div> */}
          {
            !auth &&
            <div className="log-inbtn">
              <Link to="/login" className="LogInBtn"> Log In </Link>
            </div>
          }
          {
            auth &&
            <div className="user">
              <button onClick={toggleDropdown} className="userBtn">{userName.name}</button>
              {isDropdownOpen && (
                <ul className="dropdown">
                  <li><Link to="/Profile" className="myProfile">My Profile</Link></li>
                  <li><Link className="LogOutBtn" onClick={() => logoutUser()}>Logout</Link></li>
                </ul>
              )}
            </div>
          }
        </div>
      </div>
    </div>
  </>


  );
};

export default Navbar;
