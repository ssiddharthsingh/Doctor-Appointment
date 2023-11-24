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
  const [role, setrole] = useState('');
  const [docOf, setDoc] = useState('');
  const [files, setFiles] = useState([]);
  const navigate = useNavigate();

  // const handlerole = (event) => {
  //   setrole(event.target.value);
  // };

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

    const images = new FormData();
    for (let i = 0; i < files.length; i++) {
      images.append("files", files[i]);
    }

    if (password) {

      await axios.post("http://localhost:4500/upload", images).then(async (res) => {
        console.log("images", res);
        let body = {
          "name": name,
          "address": addres,
          "userEmail": userEmail,
          "password": password,
          "phone": phone,
          "second_address": second_address,
          "role": role,
          "pic": res.data.body.files[0],
          "docOf": docOf,
        };
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
            });
          }
          else {
            alert(result.data.message);
            navigate('/signup', { replace: true });
            window.location.reload();
          }
          console.log(result.data.message, result.status);
        });
      })
        .catch((err) => {
          alert(err);
          navigate("/signup", { replace: true });
          window.location.reload();
        });
    }
  };

  // handle file inputs
  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      let files = e.target.files;
      let x = [];
      for (let i = 0; i < files.length; i++) {
        x.push(files[i]);
      }
      setFiles(x);
      console.log("files:", x);
    }
  };


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

                <input className="name-box inputbox" placeholder="Name" onChange={(e) => { setName(e.target.value) }} />

                <input className="emailbox inputbox" placeholder="Email" required onChange={(e) => { setUseremail(e.target.value) }} />

                <input className="passwordbox inputbox" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />

                <input className="address-box inputbox" placeholder="Address" required onChange={(e) => { setAddress(e.target.value) }} />

                <input className="second-address-box inputbox" placeholder="Secondary Address" onChange={(e) => { setSecond_address(e.target.value) }} />

                <input className="phone-box inputbox" placeholder="Phone Number" required onChange={(e) => { setPhone(e.target.value) }} />

                <div className="option-tab">

                  <select className="role" value={role} onChange={(e) => { setrole(e.target.value) }}>

                    <option value="" selected disabled hidden>Select Role</option>

                    <option value="Doctor" >Doctor</option>
                    <option value="Patient" >Patient</option>
                  </select>
                </div>

                <div className="doc_of-option-tab">

                  <select className="Specialiaty" value={docOf} onChange={(e) => { setDoc(e.target.value) }}>

                    <option value="" selected disabled hidden>Select Specialiaty</option>

                    <option value="Surgon" >Surgon</option>
                    <option value="Phy" >Physican</option>
                    <option value="dent" >Dentist</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="files" className="file">
                    <input
                      className="text"
                      type="file"
                      id="files"
                      name="files"
                      multiple
                      onChange={handleFileChange}
                      accept="image/png, image/jpg, image/jpeg"
                    />
                  </label>
                </div>


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