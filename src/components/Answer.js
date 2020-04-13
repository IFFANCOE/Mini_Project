import React from 'react'
import { CLIENT_RENEG_LIMIT } from 'tls'

export default props => {
    const {  question, editAnswer, deleteAnswer ,index} = props
    const { id, answer } = question
   
    
    return (
        <div>
     <li >
            <div className="id">
                {index}  
            </div>
            <div className="name">
                {answer}
            </div>
            
            <div className="container">
            <button onClick={() => deleteAnswer(id)}>Delete</button>
            <button onClick={() => editAnswer(id)}>Edit</button>
            </div>
            
        </li>
        </div>
   
    )
}