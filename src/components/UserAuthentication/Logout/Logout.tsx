

import React from 'react'

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { rootState } from '../../../redux/reducers';

import { userLogout } from '../../../redux/Actions/userActions';

import { GoogleLogout } from "react-google-login";
const clientId =
    "624124788792-7lvlb0c79gub1jbf027bnja0of5aa0d4.apps.googleusercontent.com";


export default function Logout() {

    const dispatch = useDispatch();
    const { showLogoutButton } = useSelector((state: rootState) => state.userReducer)


    return (

        <div className="logout">
            {showLogoutButton ? (
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={() => dispatch(userLogout("true"))}
                ></GoogleLogout>
            ) : null}
        </div>

    );
}

