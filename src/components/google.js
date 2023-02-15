import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";
import googleIcon from "../images/google.png";
function Google() {
  var refe = useRef();
  var [isLogIn, setLogIn] = useState(false);
  var [data, setData] = useState({});
  var [data_personal,setPersonal]=useState({})
  const obj = window.gapi;

  var CLIENT_ID =
    "934057497734-2k0sp365v94u0u08ta8mv9b4qodkoal6.apps.googleusercontent.com";
  var API_KEY = "AIzaSyBI57Lt2FHhIiXvRZunhEvuqZhmgZ0lHbk";
    // var CLIENT_ID ="355367033227-g3rr36a02g06lrev47m1fa94nc7k8fle.apps.googleusercontent.com";
    // var API_KEY = "AIzaSyAR18WEx2u15IrGzRRYgXTslGGRKWwTnoM";

  const SCOPES = "https://mail.google.com/ " + 
  " https://www.googleapis.com/auth/user.birthday.read " +
  " https://www.googleapis.com/auth/user.gender.read " +
  " https://www.googleapis.com/auth/user.addresses.read "
  obj.load("client:auth2", async () => {
    obj.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      scope: SCOPES,
      plugin_name: "Grouppo",
    });
  });
  const handleCal = async () => {
    var dov = window.gapi.auth2.getAuthInstance();
    if (isLogIn === false) {
      await dov.signIn().then(async (e) => {
        var db = e.qv;
        await setData(()=>{return db;});
        console.log("data = ");
        console.log(data);
        // console.log(e);
        // console.log(window.gapi.auth2);
        // console.log(e.getAuthResponse());
      });
    }
    const state = await window.gapi.auth2.getAuthInstance().isSignedIn.Oa;
    setLogIn(state);

  await window.gapi.client.load("people","v1",async ()=>{
    var req01=window.gapi.client.people.people.get({
      'resourceName': 'people/me',
            'personFields': 'birthdays,genders,addresses'})
    console.log(req01);
    req01.execute(async (e)=>{
    console.log("data1 = ");
    console.log(data);
    await setPersonal(
      {
        birthday:e.birthdays[0].date,
        gender:e.genders[0].value});
  })
  console.log(data);
  console.log(data_personal)

  })
   
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
        {/* <p>First Name :{data.BZ}</p>
    <p>Last Name :{data.RX}</p>
    <p>email :{data.dw}</p>
    <p>Profile Link :{data.yO}</p> */}
      </button>
    </>
  );
}

export default Google;
