import React, { useState, useEffect } from 'react';
import { firestore } from '../index'
import Menu from './Menu'
import './Menu.css'
import './List.css'

const questions =[
  {
    question : ''
  },
  {

  },
  {

  },

]

const List = () => {

  const [menus, setMenus] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    retriveData();
  }, [])

  const retriveData = () => {
    firestore.collection("menus").onSnapshot((snapshot) => {
      console.log(snapshot.docs)

      let mymenu = snapshot.docs.map(d => {
        const { id, name } = d.data()
        console.log(id, name)
        return { id, name }
      })
      setMenus(mymenu)
    })
  }


  const deleteMenu = (id) => {
    firestore.collection("menus").doc(id + "").delete()
  }

  const editMenu = (id) => {
    firestore.collection("menus").doc(id + "").set({ id, name })
  }

  const renderMenu = () => {
    if (menus && menus.length) {
      return menus.map((menu, index) => {
        return (
          <Menu key={index} menu={menu}
            deleteMenu={deleteMenu}
            editMenu={editMenu}

          />
        )
      })
    }
    else { return (<li>  No answer </li>) }

  }

  const addMenu = () => {
    let id = (menus.length === 0) ? 1 : menus[menus.length - 1].id + 1;

    firestore.collection("menus").doc(id + "").set({ id, name })
  }

  return (

    <div className='flex'>
      
     
    <div>  <h5>พื้นที่ที่มีรายงานการระบาดต่อเนื่อง <br/>
     ของโรคติดเชื้อไวรัสโคโรนา 2019 หรือโควิด-19
      </h5>
   <ol> 
     <li>สาธารณรัฐประชาชนจีน (+ฮ่องกง มาเก๊า) </li>
     <li>ญี่ปุ่น</li>
     <li>เกาหลีใต้  </li>
     <li>อิตาลี </li>
     <li>อิหร่าน  </li>
     <li>ฝรั่งเศส </li>
     <li>เยอรมนี  </li> 
     <li>สหรัฐอเมริกา </li> 
     <li>สวิตเซอร์แลนด์ </li>
     <li>นอร์เวย์  </li>
     <li>เดนมาร์ก</li>  
     <li>เนเธอร์แลนด์ </li>
     <li>สวีเดน  </li>
     <li> อังกฤษ</li>
     </ol>  
      </div>

     <div className='top'>
        <h1 >Your answer</h1>

        <div> <input type='text' name="name" onChange={(e) => { setName(e.target.value) }} />  </div>
        <div><button onClick={addMenu}>Summit</button> </div>


      </div>

      <div className="dis">
        {renderMenu()}
      </div>

    </div>
  );

}

export default List;