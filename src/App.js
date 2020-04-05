import React from 'react';
import { useState,useEffect } from 'react';
import {firestore} from './index'
import Menu from './components/Menu'
import './components/Menu.css'
function App() {
  const [menus, setMenus] = useState([])
    const [name,setName] =useState('')
    const [img,setImg] =useState([])

    useEffect( ()=>{
      retriveData()
    },[])

    const retriveData =() =>{
      firestore.collection("menus").onSnapshot( (snapshot) =>{
        console.log(snapshot.docs)

    let mymenu= snapshot.docs.map( d =>{
          const {id,name,img} = d.data()
          console.log(id,name,img)
          return {id,name,img}
        } )
        setMenus(mymenu)
      })
    }

    const photo = (e) => {
      img.push(e);
      setImg([...img]);
  }
    const deleteMenu = (id) =>{
    firestore.collection("menus").doc(id+"").delete()
    }

    const editMenu = (id) => {
      firestore.collection("menus").doc(id+"").set({id,name,img})
    }

  const renderMenu = () => {
  

    if (menus && menus.length) {
      return menus.map((menu, index) => {
        return (
         <Menu key ={index} menu={menu}
         deleteMenu={deleteMenu}
         editMenu={editMenu}
         photo = {photo}
         />
        )
      })
    }
    else{ return (<li> No Menu </li>) }
      
  }
  const addMenu = () =>{ 
    let id = (menus.length === 0)?1:menus[menus.length-1].id +1 ;

    firestore.collection("menus").doc(id+"").set( {id, name,img} )
  }
  
  return (
    <div className='inpt'>
      <h1>Menu</h1>
      
    <div> <input type='text' name="name" onChange={ (e) =>{setName(e.target.value)}}/>  </div> 
     
      <input type='file' accept='image/*'onChange={ (e) =>{setImg(e.target.value)}}/>
      
      <div><button onClick={addMenu}>Summit</button> </div>
      
     <div className="dis">{renderMenu()}</div> 

    </div>
  );
}

export default App;
