import React, { createContext, useState, useEffect } from "react";
import firebase from "../firebase"
import Spinner from "./../Pages/Spinner/Spinner";
export let AuthContextApi = createContext();


let AuthProvider = ({ children }) => {
    let [IsAuth, setIsAuth] = useState(null);
    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user.emailVerified === true|| user.reauthenticateWithPhoneNumber) {
                setIsAuth(user);
            }
            else {
                setIsAuth(null)
            }
        });
    }, []);
    return (
      <AuthContextApi.Provider value={IsAuth}>
            {/* {IsAuth===null?<Spinner/>: children } */}
            {children}
      </AuthContextApi.Provider>
    );
};
export default AuthProvider;