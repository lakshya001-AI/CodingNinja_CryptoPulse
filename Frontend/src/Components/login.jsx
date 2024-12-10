import React from 'react';
import Style from "../App.module.css";
import { Link } from "react-router-dom";
import { GoogleLogin } from '@react-oauth/google'; // Import GoogleLogin component

function Login() {
  const handleGoogleLogin = (response) => {
    console.log(response); // Handle Google login response here
    // You can send the response to your backend for further processing
  };

  return (
    <>
      <div className={Style.mainDiv}>
        <div className={Style.loginDivMain}>
          <div className={Style.NavBarLoginDiv}>
            <h1>CRYPTOPULSE</h1>
            <Link className={Style.createAccountLink} to="/createAccount">Create Account</Link>
          </div>
          <div className={Style.loginDiv1}>
            <div className={Style.loginContentDiv}>
              <h1 className={Style.loginContentDivHeading}>Sign in to CryptoPulse</h1>
              <p className={Style.loginContentDivPara}>Your go-to platform for live cryptocurrency prices and customized favorites.</p>
              <div className={Style.InputContentDiv}>
                <p className={Style.paraInput}>Email</p>
                <input type="text" placeholder='Your email address' className={Style.emailInput} />
              </div>
              <div className={Style.InputContentDiv1}>
                <p className={Style.paraInput}>Password</p>
                <input type="text" placeholder='Your Password' className={Style.emailInput} />
              </div>
              <div className={Style.loginBtnDiv}>
                <button className={Style.loginBtn}>Sign In</button>
              </div>
              <div className={Style.orParaDiv}>
                <p>OR</p>
              </div>
              <div className={Style.googleSignINDiv}>
                <div className={Style.googleSignINDiv1}>
                <GoogleLogin
                  onSuccess={handleGoogleLogin}
                  onError={() => console.log('Login Failed')}
                  useOneTap
                  className={Style.googleLoginBtn}  // Add className here
                />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
