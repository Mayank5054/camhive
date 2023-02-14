import React,{useState} from "react";
import { Link } from "react-router-dom";
const HandleSubmit = () =>{

}
const CreateaNewAccount = () =>{
    var [combine,setCombine]=useState({Email:null,Password:null,confirmPassword:null});
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
      const handleConfirm = (e) => {
        setCombine({
          ...combine,
          confirmPassword:e.target.value
        })
        if (e.target.value === "") {
          setCombine({
            ...combine,
            confirmPassword:null
          })
        }
      };
    return (
        <div className="compartment02">
          <div className="compartment02_subpart01">
            <div className="compartment02_subpart02 compartment02_general compartment02_subpart02_login">
              <div className="compartment02_general compartment02_title compartment02_title_login">
                <p className="">Create A New Account</p>
              </div>
              <div className="compartment02_body_login">
                <div className="compartment02_general login_form_divison">
                  <div className="login_form">
                    <div className="login_form_subpart">
                      <form onSubmit={HandleSubmit} id="form">
                        <div className="field_common_signup email_field">
                          <input
                            type="email"
                            className="email_input_signup"
                            id="email_input"
                            value={combine.Email}
                            onChange={handleEmail}
                          ></input>
                          {combine.Email === null && (
                            <div
                              className="placeholder_div"
                              id="placeholder_email">
                              <p>E-Mail Address</p>
                            </div>
                          )}
                        </div>
                        <div className="field_common_signup password_field">
                          <input
                            type="password"
                            value={combine.Password}
                            className="email_input_signup"
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
                        <div className="field_common_signup password_field">
                          <input
                            type="password"
                            value={combine.confirmPassword}
                            className="email_input_signup"
                            id="password_input"
                            onChange={handleConfirm}
                          ></input>
                          {combine.confirmPassword === null && (
                            <div
                              className="placeholder_div_password"
                              id="placeholder_password"
                            >
                              <p>Confirm Password</p>
                            </div>
                          )}
                        </div>
                        <div className="field_common login_button">
                          <div className="compartment02_general login_button_container">
                            <button className="btn_login">CREATE</button>
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
                <p>Wow ! Already Have An User Account ? </p>
                <Link to="/login" id="link_for_signup">
                  <p>&nbsp;Skip To Login</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
}
export default CreateaNewAccount