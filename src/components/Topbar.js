import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import React, { Component } from 'react';
import './Auth.css';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import './Topbar.css'


const Topbar = () => {

    return (

        <div>

            <div className="navbar bgtop">

        <img src="https://www.phuket.psu.ac.th/wp-content/uploads/2019/03/cropped-PSU_PHUKET-EN.png" style={{width:200 ,height:80}} />
                <img src="https://static.posttoday.com/media/content/2020/02/27/87A54544442C131C93466FB39F0F9628.jpg" className='imgpage' />


                <div id="navbarSupportedContent" >
                    
                    <div className='topright'>
                    
                        <img alt='profile picture' className='img'  src={firebase.auth().currentUser.photoURL} />
                                <span className='Email'>{firebase.auth().currentUser.email}</span>                           
                                                      
                            <span >
                                <Button variant="outline-danger" onClick={() => firebase.auth().signOut()}>Logout</Button>
                            </span>
                            </div>
                </div>

            </div>
        </div>
    );

}

export default Topbar;