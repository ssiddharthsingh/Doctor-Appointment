import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/MyProfile.css";

const MyProfile = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState([]);
  var userData = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    var userData = JSON.parse(localStorage.getItem('userInfo'));
    setAuth(userData);
    if (!userData) {
      localStorage.clear('userInfo');
      navigate('/', { replace: true });
    }
  }, [])
  return (
    <>
      {auth.role === 'Doctor' &&
        <div>
          <h1 className="profileTitle">My Profile</h1>
          <div className='profilePic'>
            <div className='profilePicContainer'>
              <img src={`http://localhost:4500/images/${auth.pic}`} alt="pp" />
            </div>
            <div className='username'>
              <h2> Dr. {userData.name}</h2>
            </div>
            <div className='UserInfo'>
              <h2> Name: Dr. {userData.name}</h2>
              <p> Speciality: {userData.docof}</p>
              <h2> Email: {userData.email}</h2>
              <h2> Phone: +91{userData.phone}</h2>
              <h2> Address: {userData.address}</h2>
            </div>
          </div>
        </div>
      }

      {auth.role === 'Patient' &&
         <div>
         <h1 className="profileTitle">My Profile</h1>
         <div className='profilePic'>
           <div className='profilePicContainer'>
             <img src={`http://localhost:4500/images/${auth.pic}`} alt="pp" />
           </div>
           <div className='username'>
             <h2>{userData.name}</h2>
           </div>
           <div className='UserInfo'>
             <h2> Name: {userData.name}</h2>
             <h2> Email: {userData.email}</h2>
             <h2> Phone: +91{userData.phone}</h2>
             <h2> Address: {userData.address}</h2>
           </div>
         </div>
       </div>
      }

    </>
  )
}

export default MyProfile