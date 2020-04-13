import React, { useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import './components/Animation.css'
import Auth from './components/Auth'
import List from './components/List'
const App = () => {
  //มุงเขียนโค้ดโครตมัว
  //อันนี้เป็น  animation
  // กุไม่รู้มุงเขียนยังไงข้อมูลถึงไม่มา
  const [LoopArray, setLoopArray] = useState([]);
  console.log(LoopArray);
  // const questions = [
  //   'ข้อที่ 1 : ท่านเดินทางหรืออยู่อาศัยในพื้นที่ที่มีรายงานการระบาดต่อเนื่องของโควิด-19 ใน 14 วันที่ผ่านมา  '
  //   , 'ข้อที่ 2 : ท่านเป็นผู้ที่ประกอบอาชีพที่สัมผัสใกล้ชิดกับนักท่องเที่ยวต่างชาติสัมผัสใกล้ชิดและนานมากกว่า 5 นาที'
  //   , 'ข้อที่ 3 : มีประวัติใกล้ชิดหรือสัมผัสกับผู้ป่วยเข้าข่ายหรือยืนยันโรคติดเชื้อโควิด-19'
  //   , 'ข้อที่ 4 : มีผู้ที่อยู่อาศัยร่วมบ้านเดินทางกลับมาจากพื้นที่ที่มีรายงานการ ระบาดของโรคติดเชื้อโควิด-19'
  //   , 'ข้อที่ 5 : เป็นบุคลากรทางการแพทย์หรือสาธารณสุข ที่สัมผัสกับผู้ป่วยเข้าเกณฑ์สอบสวนติดเชื้อโควิด-19'

  // ]
  // const Answer []
  // let Percent = 0;
  // let LoopPercent = LoopArray.map((ans, index) => {
  //   if (ans === "YES") {
  //     Percent++;
  //   }
  // })
  // Percent = Percent / questions.length * 100; //กรณีมี5ข้อ
  // console.log(Percent);
  
  const [login, setLogin] = useState(false);
  //ประมาณนี้ มุงไปแต่งเอง ไม่ได้ต่อ firebase ที่มุบอก
  const Display = (
    <div>
      {login 
      //         && (
      //   <div>
      //     <h1 style={{ color: "orange" }}>{Percent}%</h1>
      //     {questions.map((qus, index) => {
      //       return (
      //         <ul key={index}>
      //           <li>
      //             {qus}
      //           </li>
      //         </ul>
      //       )
      //     })}
      //     <p>TEST</p>

      //     {LoopArray.length < questions.length ?
      //       (
      //         <div>
      //           <button onClick={() => setLoopArray([...LoopArray, "YES"])}>YES</button>
      //           <button onClick={() => setLoopArray([...LoopArray, "NO"])}>NO</button>
      //         </div>
      //       )
      //       : alert("ตอบครบทุกข้อเเล้ว")
      //     }

      //   </div>
      // )
      }
    </div>
  )
  return (
    <div>
      <Auth className='App' setLogin={setLogin} />
      {/* <div>
        <div className="bubbles" >
          <div>
          </div>
          <Auth className='App' setLoopArray={setLoopArray} />
          <List LoopArray={LoopArray} />
          <li className='bubblesli'></li>
          <li className='bubblesli'></li>
          <li className='bubblesli'></li>
          <li className='bubblesli'></li>
          <li className='bubblesli'></li>
          <li className='bubblesli'></li>
          <li className='bubblesli'></li>
          <li className='bubblesli'></li>
          <li className='bubblesli'></li>
          <li className='bubblesli'></li>
          <li className='bubblesli'></li>
          <li className='bubblesli'></li>
        </div>
      </div> */}
    
      {Display}
      <div>
        <li className='bubblesli'></li>
        <li className='bubblesli'></li>
        <li className='bubblesli'></li>
        <li className='bubblesli'></li>
        <li className='bubblesli'></li>
        <li className='bubblesli'></li>
        <li className='bubblesli'></li>
        <li className='bubblesli'></li>
        <li className='bubblesli'></li>
        <li className='bubblesli'></li>
        <li className='bubblesli'></li>
        <li className='bubblesli'></li>
      </div>

    </div>
  )

}

export default App;
