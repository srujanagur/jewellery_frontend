import React from 'react'

import { useSelector, useDispatch } from 'react-redux';

import { rootState } from '../../../redux/reducers';

import jwt_decode from "jwt-decode"


import { userLogin } from '../../../redux/Actions/userActions';

import { GoogleLogin } from "react-google-login";
import Logout from '../Logout/Logout';

import "./Login.css";
// const facebookClientId = ""
const clientId =
  "624124788792-7lvlb0c79gub1jbf027bnja0of5aa0d4.apps.googleusercontent.com";


export default function Login() {
  const dispatch = useDispatch();
  const { showLoginButton, idtoken } = useSelector((state: rootState) => state.userReducer)
  // const onLoginSuccess = (res: any) => {
  //   console.log("Login Success:", res.tokenObj.id_token);
  //   storingToken(res.tokenObj.id_token)
  //   userLogin("user1")
  // };
  const callingApi = () => {
    // console.log("showloginbutton" + idtoken)
    // console.log("callApi test" + idtoken)

    let x: string = jwt_decode(idtoken)
    // const expTime = jwt_decode(JSON.stringify(idtoken))
    // console.log("time" + parseJwt(idtoken).exp)
    // let currentDate = new Date();
    // let systemTime = currentDate.getTime()
    // console.log("systemtime" + systemTime)
    // let isExpired = false;

    // if (expTime * 1000 < systemTime)
    //   isExpired = true;
    console.log(x)
    // console.log("email" + parseJwt(idtoken).email)


  };
  // const callingApi = () => {
  //   console.log("showloginbutton" + idtoken)
  //   console.log("callApi test" + idtoken)

  //   let x = JSON.stringify(idtoken)
  //   const expTime = parseJwt(idtoken).exp
  //   console.log("time" + parseJwt(idtoken).exp)
  //   let currentDate = new Date();
  //   let systemTime = currentDate.getTime()
  //   console.log("systemtime" + systemTime)
  //   let isExpired = false;

  //   if (expTime * 1000 < systemTime)
  //     isExpired = true;
  //   console.log("parseJwt" + x + isExpired)
  //   console.log("email" + parseJwt(idtoken).email)


  // };


  const onLoginFailure = (res: any) => {
    console.log("Login Failed:", res);
    alert("Login Failed")
  };

  return (

    <div className="login">

      <button>{callingApi()}callApi</button>
      <div>
        {showLoginButton ? (
          <GoogleLogin
            clientId={clientId}
            buttonText="Sign In with Google"
            // onSuccess={(res: any) => dispatch(userLogin(res))}
            onFailure={onLoginFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
          />
        ) : null}
        <Logout />

        {/* {showLogoutButton ? (
          <GoogleLogout
            clientId={clientId}
            buttonText="Sign Out"
            onLogoutSuccess={() => dispatch(userLogout("true"))}
          ></GoogleLogout>
        ) : null} */}
      </div>
      {/* <div>
        {showLoginButton ? (
          <FacebookLogin
            appId={facebookClientId}
            autoLoad={true}
            fields="name,email,picture"
            onClick={(res: any) => dispatch(userLogin(res.tokenObj.id_token))}
            callback={onLoginFailure} />

        ) : null}
      </div> */}

    </div>
  );
}
