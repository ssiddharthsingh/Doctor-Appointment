import React, { useEffect, useState } from "react";


import "../css/findADoc.css";
import DocCrewcover from "../img/docCrewCover.png";
import DocCrewcover2 from "../img/DocCrewCover2.png";
import bookAppo from "../img/bookAppo.png";
import axios from "axios";



const FindADoc = () => {
  const [docOf, setDoc] = useState('');
  const [doctorData, setDoctorData] = useState('')
  var docData = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    if (doctorData) {
      console.log('Updated Doctor Data:', doctorData);
    }
  }, [doctorData]);



  const getDoc = async (param) => {
    console.log(param);
    try {
      let docdata = await axios.get('http://localhost:4500/users/getDoctors?docof${param}');
      console.log('Data from the server:', docdata.data);
      setDoctorData(docdata.data.doctors);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  }

  return (<>
    <div className="team">
      <div className="div">
        <div className="banner">
          <div className="team-overlap-group">
            <div className="text-wrapper">Find A Doctor</div>
            <img className="DocCrewcover" src={DocCrewcover} alt="dc1" />
            <img className="DocCrewcover2" src={DocCrewcover2} alt="dc2" />
          </div>
        </div>

        {/* Search Bar */}
        <div className='doc-search'>
          <div className='search-overlap'>
            <div className='find-a-doctor'>Find a Doctor</div>
            <form autoComplete='off' className="search-form" onSubmit={(e) => { e.preventDefault(); getDoc(docOf); }}>

              <div className="speciality-option-tab">
                <select className="DocOf" value={docOf} onChange={(e) => { setDoc(e.target.value) }}>
                  <option value="" disabled hidden>Select Speciality</option>
                  <option value="Surgon" >Surgon</option>
                  <option value="Phy" >Physician</option>
                  <option value="dent" >Dentist</option>
                </select>

              </div>
              <button type='submit' className="search-button" >Search</button>
            </form>
          </div>

        </div>
        {Array.isArray(doctorData) && doctorData.map((doc, index) => (
          <div key={index} className="doc-team">
            <div className="row">
              <div className="doc">
                <div className="doc-content">
                  <div className="image">
                    <img className="img" src={doc.image} alt="Doctor" />
                  </div>
                  <div className="text">
                    <div className="text-wrapper-2">{doc.name}</div>
                    <div className="text-wrapper-3">{doc.docof}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}




        {/* appoint book */}

        <div className="CTA">
          <div className="overlap">
            <div className="CTA-background" />
            <div className="CTA-text">
              <div className="CTA-title">
                <div className="CTA-content">
                  <div className="CTA-heading-wrapper">
                    <div className="CTA-heading">
                      <div className="ctasub-text">
                        <div className="team-text-wrapper-5">BOOK AN APPOINTMENT</div>
                      </div>
                      <div className="our-medical-team-is-wrapper"> <p className="our-medical-team-is"> Our Medical Team is <br />
                        Ready to Help You. </p>
                      </div>
                    </div>
                  </div>
                  <div className="CTA-button">
                    <button className="button">
                      <div className="bookan-appointment">Book an Appointment</div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="CTA-image">
                <img className="image-2" alt="Image" src={bookAppo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default FindADoc
