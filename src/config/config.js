import firebase from "firebase"

const config = {
    apiKey: "AIzaSyDgWmjT7x7zGisRf3GnvsoDjEOj_vAbIZQ",
    authDomain: "miniproject-240311.firebaseapp.com",
    databaseURL: "https://miniproject-240311.firebaseio.com",
    projectId: "miniproject-240311",
    storageBucket: "miniproject-240311.appspot.com",
    messagingSenderId: "324337006078",
    appId: "1:324337006078:web:8d29a2df23e809c3acfcaf",
    measurementId: "G-F0GSH2EJ62"
  };

  
// if( firebase.apps.length === 0)
const fbc = firebase.initializeApp(config)

export const firestore = firebase.firestore();

  export default fbc;