import React, { Component } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import { Button, Carousel } from 'react-bootstrap';
import { Router, Route,  IndexRoute } from "react-router"
// import  list  from './components/list'
import { render } from "react-dom"

firebase.initializeApp({
  apiKey: "AIzaSyDgWmjT7x7zGisRf3GnvsoDjEOj_vAbIZQ",
  authDomain: "miniproject-240311.firebaseapp.com",
  projectId: "miniproject-240311"
})

class App extends Component {


  state = { isSignedIn: false }

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
      this.setState({ isSignedIn: !!user })
    })
  }

  render() {
    return (
      <div className='App'>
        {this.state.isSignedIn ? (
          <span >
           <div> This sign  </div> 
            {/* <Router>
              <Route exact path={"/"} component={list} />
            </Router> */}

            <Button variant="outline-primary" onClick={() => firebase.auth().signOut()}>sign out </Button>

          </span>

        ) : (
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()} />
          )}

      </div>
    )
  }
}

export default App;
