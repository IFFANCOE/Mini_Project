import React from 'react'
import { CLIENT_RENEG_LIMIT } from 'tls'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,  } from 'react-bootstrap';
export default props => {
    const {  question, editAnswer, deleteAnswer ,index} = props
    const { id, answer } = question
   
    
    return (
        <div className ='bor'>
     <li >
            <div className="id">
                {index}  
            </div>
            <div className="answer">
                {answer}
            </div>
            
            <div className="container">
            <Button variant="outline-info" onClick={() => deleteAnswer(id)}>Delete</Button>
            <Button variant="outline-warning" onClick={() => editAnswer(id)}>Edit</Button>
            </div>
            
        </li>
        </div>
   
    )
}