import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import GoogleLogin from "./GoogleLogin";
const AccessYourAccount = () => {
  const HandleSubmit = () => {};
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
