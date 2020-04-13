import React, { Component, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import { Button, Carousel } from 'react-bootstrap';
import List from './List'
import './Auth.css'

firebase.initializeApp({
  apiKey: "AIzaSyDgWmjT7x7zGisRf3GnvsoDjEOj_vAbIZQ",
  authDomain: "miniproject-240311.firebaseapp.com",
  projectId: "miniproject-240311"
})

const Auth = props => {

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

    firebase.auth().onAuthStateChanged(user => 
      {
      setIsSignedIn(!!user)
    })
  }, [])

  return (
    
    <div  >
     
      {
        isSignedIn ?
       (
        <span >
          
          <List/>
        <div> <Button variant="outline-primary" onClick={() => firebase.auth().signOut()}>sign out </Button></div>
        </span>
        ) : 
      
      (
        <div className='backgr'>
         Please login with

           <StyledFirebaseAuth   
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()} />
        </div>
         
        )
        
        }
    </div>
  )

}

export default Auth;
