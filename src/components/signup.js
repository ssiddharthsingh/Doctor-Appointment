import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/signUp.css";
import axios from "axios";
import Signupimg from "../img/Signupimg.png";

const Signup = () => {
  const [name, setName] = useState('');
  const [addres, setAddress] = useState('');
  const [userEmail, setUseremail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [second_address, setSecond_address] = useState('');
  const navigate = useNavigate();


  const checkEmail = async () => {
    // let emails = [];
    // if(emails.includes(email)) {
    //   return 1;
    // } 
    // else return 0;
  }

  const signUp = async (e) => {
    e.preventDefault();
    if (name === '' || !name) {
      alert('Name is missing');
      return;
    }
    else if (userEmail === '' || !userEmail) {
      alert('Email is missing');
      return;
    }
    else if (password === '' || !password) {
      alert('Any of the password field cannot be empty');
      return;
    }

    var result = await checkEmail();
    if (result === 1) {
      alert('Email you are trying to use is in use, please select another');
      return;
    }

    if (password) {
      let body = {
        "name": name,
        "address": addres,
        "userEmail": userEmail,
        "password": password,
        "phone": phone,
        "second_address": second_address,
      }

      await axios.post("http://localhost:4500/users/createUser", body).then(async (result) => {
        if (result.status === 200 && result.data.message === 'User Data inserted.') {
          alert(result.data.message);
          await axios.get(`http://localhost:4500/users/getUserbyEmail?email=${userEmail}`).then(async (userData) => {
            console.log(userData.data[0], 'userData');
            if (userData.data.length > 0) {
              // localStorage.setItem("userInfo", JSON.stringify(userData.data[0]))
              navigate('/login', { replace: true });
              window.location.reload();
            }
            else {
              alert(result.data.message);
              navigate('/signup', { replace: true });
              window.location.reload();
            }
          })
        }
        else {
          alert(result.data.message);
          navigate('/signup', { replace: true });
          window.location.reload();
        }
        console.log(result.data.message, result.status);
      })
    }
  }

  useEffect(() => {
    let userData = JSON.parse(localStorage.getItem('userInfo'));

    if (userData) {
      navigate('/', { replace: true });
    }
  }, [navigate])


  return (
    <>
      <div className="signup-page">
        <div className="signup-overlap-wrapper">
          <div className="signup-overlap">
            <img className="Signupimg" alt="signupimg" src={Signupimg} />
            <div className="loginbtn">
              <div className="signup-overlap-group">
                <div className="loginbox" />
                <Link to="/login" className="log-in-txt"> Login </Link>
              </div>
            </div>
            
              <p className="signup-sub-heading">
                Log in for personalized healthcare recommendations and a seamless appointment booking experience tailored
                to your needs
              </p>
              <div className="oneOfUs">One Of Us?</div>
            
            <form autoComplete='off' className="sign-up-form" onSubmit={signUp}>
              <div className="sign-up-part">
                <button type='submit' className="signup-btn">Sign Up</button>

                  <input className="name-box inputbox" placeholder="Enter your name" onChange={(e) => { setName(e.target.value) }} />
             
                  <input className="emailbox inputbox" placeholder="Enter your email" required onChange={(e) => { setUseremail(e.target.value) }} />
                  
                  <input className="passwordbox inputbox" placeholder="Enter your password" onChange={(e) => { setPassword(e.target.value) }} />

                  <input className="address-box inputbox" placeholder="Enter your address" required onChange={(e) => { setAddress(e.target.value) }} />
                  
                  <input className="second-address-box inputbox" placeholder="Enter your second address" onChange={(e) => { setSecond_address(e.target.value) }} />

                  <input className="phone-box inputbox" placeholder="Enter your phone number" required onChange={(e) => { setPhone(e.target.value) }} />

                <div className="sign-up-heading">Sign Up
                </div>
              </div>

            </form>

          </div>
        </div>
      </div>
    </>
  );
}

export default Signup