import React from 'react'
// import Navbar from './navbar';
import "../css/home.css";

import Doc1 from "../img/Doc1.png";
import Doc2 from "../img/Doc2.png";
import headingHighlightUnderline from "../img/headingHighlightUnderline.png";
import expUnderline from "../img//expUnderline.png";
import Location_Underline from "../img/Location_Underline.png";
import PatientSatis_Underline from "../img/PatientSatis_Underline.png";
import TestimonialHighlightUnderline from "../img/TestimonialHighlightUnderline.png";
import findaDocHighlightUnderline from "../img/findaDocHighlightUnderline.png";
import BG from "../img/BG.png";
import BG_1 from "../img/BG-1.png";
import BG_2 from "../img/BG-2.png";


// import { ImageIcon } from "./ImageIcon";



const Home = () => {

  return (<>
    {/* <div className="hero">
      <div className="hero-section">
        <div className="overlap">
        <div className="book-an-appo-btn">
        <div className="BANbtn">
          <div className="book-an-appointment">Book An Appointment</div>
        </div>
      </div>
          <div className="tagline">
            <p className="tagline-text">
              Your Health,
              <br />
              Your Schedule
              <br />
              Book Doctor Appointments with Ease!
            </p>
          </div>
          <img className="doc1img" alt="Doc" src={Doc1} />
          <img className="doc2img" alt="Doc" src={Doc2} />
          <p className="sub-heading">
            Seamless Health Management: Book, Confirm, and Stay Healthy! Our website simplifies doctor appointments,
            putting you in control of your well-being.
          </p>
          <div className="clinic-location-div">
            <div className="statHead">15+</div>
            <div className="statText">Clinic Locations</div>
          </div>
          <div className="patient">
            <div className="statHead">100%</div>
            <div className="statText">Patient Satisfaction</div>
          </div>
          <div className="expdiv">
            <div className="statHead">30+</div>
            <div className="statText">Years Of Experience</div>
          </div>
        </div>
      </div>
    </div> */}

    <div className="hero-section">

      <div className="overlap">
        <p className="tagline-text">
          Your Health,
          <br />
          Your Schedule
          <br />
          Book Doctor Appointments with Ease!
        </p>
        <img className="heading-highlight" alt="Heading highlight" src={headingHighlightUnderline} />
        <p className="sub-heading">
          Seamless Health Management: Book, Confirm, and Stay Healthy! Our website simplifies doctor appointments,
          putting you in control of your well-being.
        </p>
      </div>

         <button className="book-an-appointment">Book An Appointment </button>
      {/* <div className="book-an-appo-btn">
      </div> */}

      <img className="doc1img" alt="Doc" src={Doc1} />
      <img className="doc2img" alt="Doc" src={Doc2} />

      <div className="overlap-group">
        <div className="stat">

          <div className="div">
            <div className="text-wrapper-2">30+</div>
            <div className="text-wrapper-3">Years Of Experience</div>
            <img className="exp-underline" alt="Exp underline" src={expUnderline} />
          </div>

          <div className="overlap-2">
            <div className="text-wrapper-4">15+</div>
            <div className="text-wrapper-5">Clinic Locations</div>
            <img className="location-underline" alt="Location underline" src={Location_Underline} />
          </div>

          <div className="overlap-3">
            <div className="text-wrapper-6">100%</div>
            <div className="text-wrapper-7">Patient Satisfaction</div>
            <img className="patientsatis" alt="Patientsatis" src={PatientSatis_Underline} />
          </div>

          {/* About Section */}

        </div>
        <div className="about-section">
          <div className="overlap-4">

            <p className="about-headings">You have lots of reasons to choose us</p>
            <p className="about-sub-heading">
              Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.
            </p>

            <div className="button-set">
              <button className="master-primary-button" type="button">
                Get started
              </button>
              <button className="master-secondary-button" type="button">
                Talk to sales
              </button>
            </div>

            <div className="about-img">
              {/* <ImageIcon className="image-icon-instance" size="default" sizeDefault="image-icon.png" /> */}
            </div>
          </div>
        </div>
      </div>

{/* Search Bar */}
      <div className='doc-search'>
        <div className='search-overlap'>
          <div className='find-a-doctor'>Find a Doc</div>
          <div className='name-textbox'>
            <input className="name" placeholder="Name" type="text"/>
          </div>
          <div className='speciality-textbox'>
            <input className="speciality" placeholder="Speciality" type="text"/>
            </div>
            <button type='submit' className="search-button">Search</button>
        </div>

      </div>

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
            <span className="text-wrapper-16">MedCare</span>
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
            <img className="heading-highlight-2" alt="Heading highlight" src={TestimonialHighlightUnderline} />
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
            <img className="heading-highlight-3" alt="Heading highlight" src={findaDocHighlightUnderline} />
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