 
  import React, { Component } from 'react';
import './Menu.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import { Button, Carousel } from 'react-bootstrap'; 

firebase.initializeApp({
  apiKey: "AIzaSyDgWmjT7x7zGisRf3GnvsoDjEOj_vAbIZQ" ,
  authDomain : "miniproject-240311.firebaseapp.com",
  projectId: "miniproject-240311"
}) 

class login extends Component {
  
  
 state  = { isSignedIn : false}

 uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccess: () => false
  }
};
componentDidMount = () => {
  
  firebase.auth().onAuthStateChanged(user => {
    this.setState( { isSignedIn :!! user } )
  })
}

 render()  {
   return(
     <div >
       {this.state.isSignedIn ? (
         <span> 
         
           <Button  variant="outline-primary" onClick = {() => firebase.auth().signOut() }>sign out </Button>
           
         </span>
         
       ) : ( 
         <StyledFirebaseAuth 
         uiConfig = {this.uiConfig}
         firebaseAuth = {firebase.auth()} />
       ) }

     </div>
   )
 }
}

export default login;
