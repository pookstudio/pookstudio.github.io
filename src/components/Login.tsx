import React from "react";
import { Box, Container, CssBaseline, Grid } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/app";
import { useAuth } from "../contexts/AuthContext";
import app from "../firebase";
import { Copyright } from "./Layout";

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
      <Container>
        <CssBaseline />
        <Grid container justify="space-around">
          <Grid item xs={10} lg={6}>
            <p>Please sign-in:</p>
            <StyledFirebaseAuth
              uiConfig={uiConfigApp}
              firebaseAuth={app.auth()}
            />
          </Grid>
        </Grid>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
}

export default AppLogin;
