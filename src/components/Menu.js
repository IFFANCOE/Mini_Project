import React from 'react'

export default props => {
    const { menu, editMenu, deleteMenu } = props
    const { id, name } = menu
    return (
        <li >
            <div className="id">
                {id}
            </div>
            <div className="name">
                {name}
            </div>
            
            <div className="container">
            <button onClick={() => deleteMenu(id)}>Delete</button>
            <button onClick={() => editMenu(id)}>Edit</button>
            </div>
            
        </li>
    )
}