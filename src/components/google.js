import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";
import googleIcon from "../images/google.png";
function Google() {
  var refe = useRef();
  var [isLogIn, setLogIn] = useState(false);
  var [data, setData] = useState({});
  const obj = window.gapi;

  var CLIENT_ID =
    "934057497734-2k0sp365v94u0u08ta8mv9b4qodkoal6.apps.googleusercontent.com";
  var API_KEY = "AIzaSyBI57Lt2FHhIiXvRZunhEvuqZhmgZ0lHbk";

  const SCOPES = "https://mail.google.com/";
  obj.load("client:auth2", async () => {
    obj.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      scope: SCOPES,
      plugin_name: "Demo",
    });
  });
  const handleCal = async () => {
    var dov = window.gapi.auth2.getAuthInstance();
    if (isLogIn === false) {
      await dov.signIn().then((e) => {
        var db = e.qv;
        setData(() => {
          return db;
        });
        console.log(data);
        console.log(e);
        console.log(window.gapi.auth2);
        console.log(e.getAuthResponse());
      });
    }
    const state = await window.gapi.auth2.getAuthInstance().isSignedIn.Oa;
    setLogIn(state);
  };
  // logout functions for expermintal purpose
  // const out =()=>{
  //   window.gapi.auth2.getAuthInstance().signOut().then(()=>{
  //     console.log(window.gapi.auth2.getAuthInstance().isSignedIn);
  //   });
  // }
  return (
    <>
      <button className="google_button" onClick={handleCal}>
        <img src={googleIcon} className="google_login_button_img"></img>
        <p>Login With Google</p>
      </button>
    </>
  );
}

export default Google;
