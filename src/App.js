import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/home";
import signUp from "./components/signup";
import login from "./components/login";
import FindADoc from "./components/findADoc";
import Services from "./components/services";
import Profile from "./components/profile";


import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route path="/signUp" Component={signUp} />
          <Route path="/login" Component={login} />
          <Route path="/FindADoc" Component={FindADoc} />
          <Route path="/Services" Component={Services} />
          <Route path="/profile" Component={Profile} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
