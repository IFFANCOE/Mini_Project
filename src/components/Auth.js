import React, { Component, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import { Button, Carousel } from 'react-bootstrap';
import List from './List'
import './Auth.css'
import { CLIENT_RENEG_LIMIT } from 'tls';

firebase.initializeApp({
  apiKey: "AIzaSyDgWmjT7x7zGisRf3GnvsoDjEOj_vAbIZQ",
  authDomain: "miniproject-240311.firebaseapp.com",
  projectId: "miniproject-240311"
})

const Auth = props => {
  const { setLogin } = props;
  const [isSignedIn, setIsSignedIn] = useState(false)


  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccess: () => false
    }
  };
  useEffect(() => {

    firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user)
    })
  }, [])
  console.log(isSignedIn);

  return (

    <div  >

      {
        isSignedIn ?
          (
            <div>
              <List />
              <span >
              </span>
            </div>

          ) :
          (
            <div >
              <div >
                <img 
                src="https://static.posttoday.com/media/content/2020/02/27/87A54544442C131C93466FB39F0F9628.jpg" />
              <br/>
                Please login with
           <StyledFirebaseAuth
                  uiConfig={uiConfig}
                  firebaseAuth={firebase.auth()} />

              </div>


            </div>

          )

      }
    </div>
  )

}

export default Auth;
