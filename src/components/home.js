import React from 'react'
import { Link } from "react-router-dom";
// import Navbar from './navbar';
import "../css/home.css";

import Doc1 from "../img/Doc1.png";
import Doc2 from "../img/Doc2.png";

import BG from "../img/BG.png";
import BG_1 from "../img/BG-1.png";
import BG_2 from "../img/BG-2.png";

import about_img from "../img/about-img.png";
import AboutIcon1 from "../img/AboutIcon.png";
import AboutIcon2 from "../img/AboutIcon2.png";

// import { ImageIcon } from "./ImageIcon";



const Home = () => {

  return (<>


    <div className="hero-section">

      <div className="tagline-container">
        <p className="tagline-text">
          Your Health,
          <br />
          Your Schedule
          <br />
          Book Doctor Appointments with Ease!
        </p>

        <p className="sub-heading">
          Seamless Health Management: Book, Confirm, and Stay Healthy! Our website simplifies doctor appointments,
          putting you in control of your well-being.
        </p>
      </div>

      
      <Link to="/findADoc" className="book-appointment-button">Book An Appointment</Link>
     

      <img className="doctor-image-1" alt="Doc" src={Doc1} />
      <img className="doctor-image-2" alt="Doc" src={Doc2} />

      <div className="overlap-group">
        <div className="statistics-section">

          <div className="experience-stat">
            <div className="experience-number">30+</div>
            <div className="experience-description">Years Of Experience</div>

          </div>

          <div className="locations-stat">
            <div className="locations-number">15+</div>
            <div className="text-wrapper-5">Clinic Locations</div>

          </div>

          <div className="overlap-3">
            <div className="text-wrapper-6">100%</div>
            <div className="text-wrapper-7">Patient Satisfaction</div>

          </div>

          {/* About Section */}

        </div>

        <div className="about-section">
          <div className="about-heading">
            <div className="about-content">
              <div className="about-div">
                <div className="about-heading-2">
                  <p className="about-text-wrapper">The Heart And Science Of Medicate Test</p>
                  <div className="about-sub-text">
                    <div className="about-about-us">ABOUT US</div>
                  </div>
                </div>
                <p className="about-capitalize-on-low">
                  Capitalize on low hanging fruit to identify a ballpark value
                  <br />
                  added activity to beta test. Override the digital divide with information highway will close.
                </p>
              </div>
              <div className="about-div-2">
                <div className="about-element">
                  <div className="about-icon">
                    <img className="about-icn" alt="Icon" src={AboutIcon1} />
                  </div>
                  <div className="about-text-wrapper-2">Multi Speciality Pharma Treatment</div>
                </div>
                <div className="about-element-2">
                  <div className="about-icon">
                    <img className="about-icn-2" alt="Icon" src={AboutIcon2} />
                  </div>
                  <div className="about-text-wrapper-3">24 Hours Medical Service</div>
                </div>
              </div>
              <button className="about-button">More About Us</button>
            </div>
          </div>
        </div>

        <div className="about-image">
          {/* <ImageIcon className="image-icon-instance" size="default" sizeDefault="image-icon.png" /> */}
          <img
            className="about-img"
            alt="About"
            src={about_img}
          />
        </div>
      </div>


      {/* Search Bar */}
      {/* <div className='doc-search'>
        <div className='search-overlap'>
          <div className='find-a-doctor'>Find a Doctor</div>
          <div className='name-textbox'>
            <input className="name" placeholder="Name" type="text" />
          </div>
          <div className='speciality-textbox'>
            <input className="speciality" placeholder="Speciality" type="text" />
          </div>
          <button type='submit' className="search-button">Search</button>
        </div>

      </div> */}

      {/* Footer Section */}

      <div className="footers">
        <div className="overlap-5">

          <div className="footer-content">

            <div className="company-section">
              <div className="text-wrapper-8">Company</div>
              <div className="text-wrapper-9">About</div>
              <div className="text-wrapper-10">Contact us</div>
              <div className="text-wrapper-11">Careers</div>
              <div className="text-wrapper-12">Blog</div>
            </div>

            <div className="support-section">
              <div className="text-wrapper-8">Support</div>
              <div className="text-wrapper-9">Getting started</div>
              <div className="text-wrapper-10">Help center</div>
              <div className="text-wrapper-11">Server status</div>
              <div className="text-wrapper-13">Report a bug</div>
            </div>

            <div className="social-media-section">
              <div className="text-wrapper-8">Follow us</div>
              <div className="facebook">
                <div className="social-media-icon">
                  <img className="facebook-2" alt="Facebook" src="facebook.svg" />
                </div>
                <div className="text-wrapper-14">Facebook</div>
              </div>
              <div className="twitter">
                <div className="twitter-wrapper">
                  <img className="twitter-2" alt="Twitter" src="twitter.svg" />
                </div>
                <div className="text-wrapper-15">Twitter</div>
              </div>
              <div className="instagram">
                <div className="instagram-wrapper">
                  <img className="instagram-2" alt="Instagram" src="instagram.svg" />
                </div>
                <div className="text-wrapper-14">Instagram</div>
              </div>
              <div className="linked-in">
                <div className="linked-in-wrapper">
                  <img className="linked-in-2" alt="Linked in" src="linked-in.svg" />
                </div>
                <div className="text-wrapper-14">LinkedIn</div>
              </div>
            </div>
          </div>

          <p className="Footer-med-care">
            <span className="span">+</span>
            <span className="text-wrapper-16">Dr.Point</span>
          </p>
        </div>
      </div>
      <div className="testimonials">
        <div className="overlap-6">
          <div className="overlap-group-2">
            <div className="text-wrapper-17">Testimonial</div>
            <p className="testimonial">
              Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero
              accumsan.
            </p>

          </div>
          <div className="testimonials-cards">
            <img className="testimonial-card" alt="Testimonial" src={BG} />
            <img className="testimonial-2" alt="Testimonial" src={BG_1} />
            <img className="testimonial-3" alt="Testimonial" src={BG_2} />
          </div>
        </div>
      </div>
      <div className="meet-our-doc">
        <div className="overlap-7">
          <div className="overlap-group-3">
            <div className="doc-heading">Meet our Doctors</div>
            <p className="doc-sub-heading">
              Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat gravida malesuada quam commodo id integer
              nam.
            </p>

          </div>
          <div className="doc-card-group">
            <img className="doc-card" alt="Doc" src="doc-card1.png" />
            <img className="doc-2" alt="Doc" src="doc-card2.png" />
            <img className="doc-3" alt="Doc" src="doc-card3.png" />
            <img className="doc-4" alt="Doc" src="doc-card4.png" />
            <img className="doc-5" alt="Doc" src="doc-card5.png" />
            <img className="doc-6" alt="Doc" src="doc-card6.png" />
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Home