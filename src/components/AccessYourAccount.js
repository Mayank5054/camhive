import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faSwimmer } from "@fortawesome/free-solid-svg-icons";



import GoogleLogin from "./GoogleLogin";
const AccessYourAccount = () => {
  const HandleSubmit = () => {};
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSwimmer } from "@fortawesome/free-solid-svg-icons";



const AccessYourAccount = () => {


  var [combine,setCombine]=useState({Email:null,Password:null});

  const HandleSubmit = () => {

  };
  const handleEmail = (e) => {
    setCombine({
      ...combine,
      Email:e.target.value
    })
    if (e.target.value === "") {
      setCombine({
        ...combine,
        Email:null
      })
    }
  };
  const handlePassword = (e) => {
    setCombine({
      ...combine,
      Password:e.target.value
    })
    if (e.target.value === "") {
      setCombine({
        ...combine,
        Password:null
      })
    }
  };
  return (
    <div className="compartment02">
      <div className="compartment02_subpart01">
        <div className="compartment02_subpart02 compartment02_general compartment02_subpart02_login">
          <div className="compartment02_general compartment02_title compartment02_title_login">
            <p>Access Your Account</p>
          </div>
          <div className="compartment02_body_login">
            <div className="compartment02_general login_form_divison">
              <div className="login_form">
                <div className="login_form_subpart">
                  <form onSubmit={HandleSubmit} id="form">
                    <div className="field_common email_field">
                      <input type="text" className="email_input"></input>
                      <div className="placeholder_div">
                        <p>E-Mail Address</p>
                      </div>
                    </div>
                    <div className="field_common password_field">
                      <input type="text" className="password_input"></input>
                      <div className="placeholder_div_password">
                        <p>Password</p>
                      </div>
                      <input
                        type="email"
                        className="email_input"
                        id="email_input"
                        value={combine.Email}
                        onChange={handleEmail}
                      ></input>
                      {combine.Email === null && (
                        <div
                          className="placeholder_div"
                          id="placeholder_email"
                        >
                          <p>E-Mail Address</p>
                        </div>
                      )}
                    </div>
                    <div className="field_common password_field">
                      <input
                        type="password"
                        value={combine.Password}
                        className="password_input"
                        id="password_input"
                        onChange={handlePassword}
                      ></input>
                      {combine.Password === null && (
                        <div
                          className="placeholder_div_password"
                          id="placeholder_password"
                        >
                          <p>Password</p>
                        </div>
                      )}
                    </div>
                    <div className="field_common login_button">
                      <div class="captcha_div">
                        {/* captcha code should be added here */}
                      </div>
                      <div className="compartment02_general login_button_container">
                        <button className="btn_login">Login</button>
                      </div>
                      <div className="needhelp_container">
                        <p>Need Any Help?</p>
                        <Link to="/help" id="link_for_help">
                          <p>Click Here</p>
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="OR_sign">
                <div className="OR_sign_subpart">
                  <div className="vertical_line"></div>
                  <div className="OR_circle">OR</div>
                </div>
              </div>
              <div className="social_media_login">
                <div className="social_media_login_subpart">
                  <div className="general_social_media google_login">
                    <GoogleLogin />
                  </div>
                  <div className="general_social_media facebook_login">
                    <button class="facebook_button">
                      <i className="fa fa-facebook"></i>
                      <p>Login With Facebook</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" compartment02_button compartment02_button_login">
            <p>Oops ! Don't Have An Account ?</p>
            <Link to="/signup" id="link_for_signup">
              <p>&nbsp;Join Us Now</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AccessYourAccount;
