import React from 'react';
import { useState,useEffect } from 'react';
import {firestore} from './index'
import Menu from './components/Menu'
import './components/Menu.css'
function App() {
  const [menus, setMenus] = useState([])
    const [name,setName] =useState('')

    useEffect( ()=>{
      retriveData()
    },[])

    const retriveData =() =>{
      firestore.collection("menus").onSnapshot( (snapshot) =>{
        console.log(snapshot.docs)

    let mymenu= snapshot.docs.map( d =>{
          const {id,name} = d.data()
          console.log(id,name)
          return {id,name}
        } )
        setMenus(mymenu)
      })
    }
    const deleteMenu = (id) =>{
    firestore.collection("menus").doc(id+"").delete()
    }

    const editMenu = (id) => {
      firestore.collection("menus").doc(id+"").set({id,name})
    }
  const renderMenu = () => {
  

    if (menus && menus.length) {
      return menus.map((menu, index) => {
        return (
         <Menu key ={index} menu={menu}
         deleteMenu={deleteMenu}
         editMenu={editMenu}
         />
        )
      })
    }
    else{ return (<li> No Menu </li>) }
      
  }
  const addMenu = () =>{ 
    let id = (menus.length === 0)?1:menus[menus.length-1].id +1 ;

    firestore.collection("menus").doc(id+"").set( {id, name} )
  }
  
  return (
    <div >
      <h1>Menu</h1>
      <input type='text' name="name" onChange={ (e) =>{setName(e.target.value)}}/>
      <button onClick={addMenu}>Summit</button>
     <ul className="dis">{renderMenu()}</ul> 

    </div>
  );
}

export default App;
