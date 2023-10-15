import React from 'react'
// import Navbar from './navbar';
import "../css/home.css";
import Doc1 from "../img/Doc1.png";
import Doc2 from "../img/Doc2.png";


const Home = () => {
 
  return ( 
    <div className="home">
    <div className="hero-section">
      <div className="tagline">
         <p className="tagline-text">
          Your Health,
          <br />
          Your Schedule
          <br />
          Book Doctor Appointments with Ease!
        </p>
      </div>
      <img className="doc" alt="Doc" src={Doc1} />
      <img className="img" alt="Doc" src={Doc2} />
    </div>
  </div>
  )
}

export default Home