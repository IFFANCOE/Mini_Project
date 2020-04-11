import React, { useState, useEffect } from 'react';
import { firestore } from '../index'
import Menu from './Menu'
import './Menu.css'
import './List.css'

const questions =[ 
  'ข้อที่ 1 : ท่านเดินทางหรืออยู่อาศัยในพื้นที่ที่มีรายงานการระบาดต่อเนื่องของโควิด-19 ใน 14 วันที่ผ่านมา '
, 'ข้อที่ 2 : ท่านเป็นผู้ที่ประกอบอาชีพที่สัมผัสใกล้ชิดกับนักท่องเที่ยวต่างชาติสัมผัสใกล้ชิดและนานมากกว่า 5 นาที'
, 'ข้อที่ 3 : มีประวัติใกล้ชิดหรือสัมผัสกับผู้ป่วยเข้าข่ายหรือยืนยันโรคติดเชื้อโควิด-19'
, 'ข้อที่ 4 : มีผู้ที่อยู่อาศัยร่วมบ้านเดินทางกลับมาจากพื้นที่ที่มีรายงานการ ระบาดของโรคติดเชื้อโควิด-19'
, 'ข้อที่ 5 : เป็นบุคลากรทางการแพทย์หรือสาธารณสุข ที่สัมผัสกับผู้ป่วยเข้าเกณฑ์สอบสวนติดเชื้อโควิด-19'

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

    <div>
      
    <div >  
      
      
      <h5>พื้นที่ที่มีรายงานการระบาดต่อเนื่อง <br/>
     ของโรคติดเชื้อไวรัสโคโรนา 2019 หรือโควิด-19
      </h5>
      
      <div className='flex'>
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
      
     <div className='bodorques'> 
    {
      questions.map( question => <dix>
        <tr>
        <td>{question}<br/><br/> </td>
        </tr>
       
        
        </dix>)
    }
    
      </div>
  
       </div>
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