import React from "react";
import { Redirect } from "react-router-dom";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import { useAuth } from "../contexts/AuthContext";
import app from "../firebase";

// Configure FirebaseUI.
const uiConfigApp = {
  // Popup signin flow rather than redirect flow.
  // signInFlow: "popup",
  // We will display Google , Facebook , Etc as auth providers.
  signInSuccessUrl: "/",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

function AppLogin() {
  const { authenticated } = useAuth();
  if (authenticated) return <Redirect to="/" />;
  else
    return (
      <div className="container">
        <p>Please sign-in:</p>
        <StyledFirebaseAuth uiConfig={uiConfigApp} firebaseAuth={app.auth()} />
      </div>
    );
}

export default AppLogin;
