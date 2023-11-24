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
      <header className="header">
        <div className="navbar">
          <div className="logo">
            <p className="med-care">
              <Link to="/" className="plusSign">+</Link>
              <Link to="/" className="SiteTitle">Dr.Point</Link>
            </p>
          </div>

          <div className="left-menu">
            <div className="sepration-box">
              <div className="sepration">
                <Link to="/findADoc" className="find-a-doc"> Find A Doctor </Link>
                <Link to="/services" className="services"> Services </Link>
              </div>
            </div>
          </div>

          {
            !auth &&
            <button className="button">
              <button className="logInbtn" >
                <Link to="/login" className="LogIn">Log In</Link>
              </button>
            </button>
          }
          {
            auth &&
            <div className="user">
              <button onClick={toggleDropdown} className="userBtn">{userName.name}</button>
              {isDropdownOpen && (
                <ul className="dropdown">
                  
                  <li><Link to="/MyProfile" className="myProfile">My Profile</Link></li>

                  <li><Link className="LogOutBtn" onClick={() => logoutUser()}>Logout</Link></li>
                </ul>
              )}
            </div>
          }
        </div>
      </header>
    </div>
  </>


  );
};

export default Navbar;
