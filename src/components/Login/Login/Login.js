import React from "react";
import Footer from "../../Home/Footer/Footer";
import Navbars from "../../Home/Navbar/Navbars";
import GoogleImg from "../Login/login.png";
const Login = () => {
  return (
    <section>
      <Navbars></Navbars>
      <h2 className="text-center text-info">Login In With Google</h2>
      <div className="g_body">
        <button className="g-button">
          <img className="g-logo" src={GoogleImg} alt="Google Logo" />
          <p className="g-text">Sign in with Google</p>
        </button>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default Login;
