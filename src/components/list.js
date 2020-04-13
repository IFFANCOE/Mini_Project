import React, { useState, useEffect } from 'react';
import { firestore } from '../index'
import Menu from './Menu'
import './Menu.css'
import './List.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup } from 'react-bootstrap';

const questions = [
  'ข้อที่ 1 : ท่านเดินทางหรืออยู่อาศัยในพื้นที่ที่มีรายงานการระบาดต่อเนื่องของโควิด-19 ใน 14 วันที่ผ่านมา  '
  , 'ข้อที่ 2 : ท่านเป็นผู้ที่ประกอบอาชีพที่สัมผัสใกล้ชิดกับนักท่องเที่ยวต่างชาติสัมผัสใกล้ชิดและนานมากกว่า 5 นาที'
  , 'ข้อที่ 3 : มีประวัติใกล้ชิดหรือสัมผัสกับผู้ป่วยเข้าข่ายหรือยืนยันโรคติดเชื้อโควิด-19'
  , 'ข้อที่ 4 : มีผู้ที่อยู่อาศัยร่วมบ้านเดินทางกลับมาจากพื้นที่ที่มีรายงานการ ระบาดของโรคติดเชื้อโควิด-19'
  , 'ข้อที่ 5 : เป็นบุคลากรทางการแพทย์หรือสาธารณสุข ที่สัมผัสกับผู้ป่วยเข้าเกณฑ์สอบสวนติดเชื้อโควิด-19'

]

const questionsEngs = [
  'question 1: You have traveled or resided in an area that reported continuous outbreaks of Covid-19 in the past 14 days.',
  'question 2: You are a person who works closely with foreign tourists, stays in touch for more than 5 minutes.',
  'question 3: Having a close history or contact with patients under the scope of or confirming the Covid-19 infection',
  'question 4: There are co-residents returning from the reporting area. Covid-Infection Outbreak',
  'question 5: Are medical or public health personnel Who contacted the patient into questioning the investigation of the Covid-19 infection',
]
const List = () => {

  const [menus, setMenus] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    retriveData();
  }, [])

  let datas = []

  const retriveData = () => {
    firestore.collection("menus").onSnapshot((snapshot) => {
      console.log(snapshot.docs)

      let mymenu = snapshot.docs.map(d => {
        const { id, name } = d.data()
        console.log(id, name)
        datas.push([...datas, name])
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

  // const addMenu = () => {
  //   let id = (menus.length === 0) ? 1 : menus[menus.length - 1].id + 1;

  //   firestore.collection("menus").doc(id + "").set({ id, name })

  // }

  const addMenu1 = () => {
    let id = (menus.length === 0) ? 1 : menus[menus.length - 1].id + 1;
    datas.push('yes')
    firestore.collection("menus").doc(id + "").set({ id, name: 'yes' })

  }
  const addMenu2 = () => {
    let id = (menus.length === 0) ? 1 : menus[menus.length - 1].id + 1;
    datas.push( 'no')
    firestore.collection("menus").doc(id + "").set({ id, name: 'no' })

  }

  
  console.log(datas)

let Arrays = [];
  const CLick = () => {
    let id = (menus.length === 0) ? 1 : menus[menus.length - 1].id + 1;
    
    firestore.collection("menus").doc(id + "").set({ id, name: 'yes' }).then(() => {
       Arrays.push("yes")
    }
    
    )

   
  }
  console.log(Arrays)

  return (

    <div>
      <div>
      
    </div>
      <h2>ระดับความเสี่ยงและคำแนะนำในการปฏิบัติตน COVID19 </h2>
      <div >


        <h5>พื้นที่ที่มีรายงานการระบาดต่อเนื่อง <br />
          ของโรคติดเชื้อ(Covid-19)
      </h5>

        <div className='flex'>
          <ol>
            <li>จีน(China)  </li>
            <li>ญี่ปุ่น(Japanese)</li>
            <li>เกาหลีใต้(South Korea) </li>
            <li>อิตาลี(Italy) </li>
            <li>อิหร่าน(Iran)  </li>
            <li>ฝรั่งเศส (France) </li>
            <li>เยอรมนี (Germany)  </li>
            <li>สหรัฐอเมริกา(U.S.) </li>
            <li>สวิตเซอร์แลนด์ (Switzerland )</li>
            <li>นอร์เวย์ (Norway) </li>
            <li>เดนมาร์ก(Denmark) </li>
            <li>เนเธอร์แลนด์ (The Netherlands)</li>
            <li>สวีเดน(Sweden)  </li>
            <li> อังกฤษ(England)</li>
          </ol>
          <div>
            <div className='marginques'>
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <h4>ให้ตอบ ใช่/ไม่ใช่ <br /> Yes or No </h4>
                </InputGroup.Text>
              </InputGroup.Prepend>
            </div>

            <div className='marginques' >
              {

                questions.map(question =>
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      {question}<br />
                    </InputGroup.Text><br /><br />
                  </InputGroup.Prepend>
                )
              }
            </div>

            <div className='marginques2' >
              {

                questionsEngs.map(questionsEng =>
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      {questionsEng}<br />
                    </InputGroup.Text><br /><br />
                  </InputGroup.Prepend>)
              }
            </div>

          </div>


        </div>
      </div>

      <div className='top'>
        <h1 >Your answer</h1>

        {/* <div> <input type='text' name="name" onChange={(e) => { setName(e.target.value) }} />  </div>

        <div><button onClick={addMenu}>Summit</button> </div> */}
        <button onClick={addMenu1}>yes</button>
        <button onClick={addMenu2}>no</button>
        <button onClick={CLick}>555</button>
      </div>

      <div className="dis">
        {renderMenu()}

      </div>

    </div>
  );

}

export default List;