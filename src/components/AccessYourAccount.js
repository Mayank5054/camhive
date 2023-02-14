import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const AccessYourAccount = () => {
  var [email, setEmail] = useState(null);
  var [password, setPassword] = useState(null);
  const HandleSubmit = () => {};
  var inputRef = React.createRef();
  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value === "") {
      setEmail(null);
    }
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value === "") {
      setPassword(null);
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
                      <input
                        type="email"
                        className="email_input"
                        id="email_input"
                        value={email}
                        onChange={handleEmail}
                      ></input>
                      {email === null && (
                        <div
                          className="placeholder_div"
                          ref={inputRef}
                          id="placeholder_email"
                        >
                          <p>E-Mail Address</p>
                        </div>
                      )}
                    </div>
                    <div className="field_common password_field">
                      <input
                        type="password"
                        value={password}
                        className="password_input"
                        id="password_input"
                        onChange={handlePassword}
                      ></input>
                      {password === null && (
                        <div
                          className="placeholder_div_password"
                          id="placeholder_password"
                        >
                          <p>Password</p>
                        </div>
                      )}
                    </div>
                    <div className="field_common login_button">
                      <div className="captcha_div">
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
                    <button className="google_button">
                      <i className="fa fa-google"></i>
                      <p>Login With Google</p>
                    </button>
                  </div>
                  <div className="general_social_media facebook_login">
                    <button className="facebook_button">
                      <i className="fa fa-facebook"></i>
                      <p>Login With Facebook</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ccc_button ccc_button_login">
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
