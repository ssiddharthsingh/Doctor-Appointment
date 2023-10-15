import React from "react";
import { Link } from "react-router-dom";

import "../css/navbar.css";


const Navbar = () => {
  // const navigate = useNavigate();

  // const { totalQnty } = useContext(CartContext);
  // const [user, setUser ]= useState(auth.currentUser);



  return (<>
    <div className="box">
      <div className="navbar">
        <p className="med-care">
          <Link to="/" className="plusSign">+</Link>
          <Link to="/" className="SiteTitle">MediCare</Link>
        </p>
        <div className="left-menu">
          <Link to="findADoc" className="find-a-doc"> Find A Doctor </Link>
          <Link to="services" className="services"> Services </Link>
        </div>
        <div className="right-menu">
          <div className="sign-inbtn">
            <div className="overlap-group">
              <Link to="signUp" className="SignInBtn"> Sign In </Link>
            </div>
          </div>
          <div className="log-inbtn">
            <Link to="login" className="LogInBtn"> Login </Link>
          </div>
        </div>
      </div>
    </div>
  </>


  );
};

export default Navbar;
