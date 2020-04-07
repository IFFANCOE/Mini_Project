import Menu from './components/Menu'
import { useState, useEffect } from 'react';
import {firestore} from './index'
import React from 'react';
import  './components/login'
import {Link} from "react-router-dom"
 const list = ()=> {

 const [menus, setMenus] = useState([]);
 const [name,setName] = useState(''); 

 useEffect(()=>{
    retriveData();
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
   <login/> 
   <div className='top'>   
   <tr>   
 <td>  <h1 >Menu</h1>  </td>
   </tr>
   <tr> 
  <td> <div> <input type='text' name="name" onChange={ (e) =>{setName(e.target.value)}}/>  </div> </td>
   </tr>

  {/* <li> <Link to = {"/App"}>App</Link> </li> */}

  {/* <tr>
 <td><input type='file' accept='image/*'onChange={ (e) =>{setImg(e.target.value)}}/> </td> 
  </tr> */}
   <tr>
   <td><div><button onClick={addMenu}>Summit</button> </div> </td>
   </tr>
  
   </div>
  
  <div className="dis">
  {renderMenu()}
  </div> 

 </div>
);

 }

 export default list;