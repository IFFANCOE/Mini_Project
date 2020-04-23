import React, { Component, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import List from './List'
import './Auth.css'
import axios from 'axios'
import { green } from 'color-name';


const Auth = props => {
  const { setLogin } = props;
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [api, setApi] = useState({});
  
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
    axios.get('https://coronavirus-tracker-api.herokuapp.com/v2/locations')
      .then(function (response) {
        console.log(response.data);
        const { latest } = response.data
        setApi({ confirmed: latest.confirmed, deaths: latest.deaths })
      })
      .catch(function (error) {
        console.log(error);
      })

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
                <div className='cen'>
                  <img style={{ width: 550, height: 300, borderRadius: 10 }}
                    src="https://static.posttoday.com/media/content/2020/02/27/87A54544442C131C93466FB39F0F9628.jpg" />
                </div>
                <div className='flxde'>
                  <div>
                    <div className='flxde'>
                      <div className='latest'>
                        <h5> สถานการณ์ปัจจุบัน</h5> ได้รับการยืนยันแล้ว:<h4> {api.confirmed} </h4> การเสียชีวิต:<h4>{api.deaths}</h4>
                      </div>
                      <div className='latest'> <h5> Current situation</h5> confirmed: <h4> {api.confirmed} </h4> deaths:<h4>{api.deaths}</h4> </div>
                    </div>
                    <img src="https://storage.googleapis.com/techsauce-prod/ugc/uploads/2020/3/covid19worldmap-546.jpg" style={{ padding: 10, borderRadius: 50,width:500 ,height:300}} />
                  </div>
                  <div className='login'>
                    Please login with
                     <div >
                      <StyledFirebaseAuth
                        uiConfig={uiConfig}
                        firebaseAuth={firebase.auth()} />
                    </div>
                  </div>
                  <div >
                    <img style={{borderRadius:20,marginTop:80,width:400,height:250}}
                    src="https://intelligence.businesseventsthailand.com/files/blog/feature_image/65215813559471.jpg" />
                  </div>


                </div>
              </div>
            </div>
          )
      }
    </div>
  )
}
export default Auth;
