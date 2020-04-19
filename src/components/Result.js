import './Result.css'
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, FormControl } from 'react-bootstrap';



const qa = [
  'ข้อที่ 1 : ท่านเดินทางหรืออยู่อาศัยในพื้นที่ที่มีรายงานการระบาดต่อเนื่องของโควิด-19 ใน 14 วันที่ผ่านมา  '
  , 'ข้อที่ 2 : ท่านเป็นผู้ที่ประกอบอาชีพที่สัมผัสใกล้ชิดกับนักท่องเที่ยวต่างชาติสัมผัสใกล้ชิดและนานมากกว่า 5 นาที'
  , 'ข้อที่ 3 : มีประวัติใกล้ชิดหรือสัมผัสกับผู้ป่วยเข้าข่ายหรือยืนยันโรคติดเชื้อโควิด-19'
  , 'ข้อที่ 4 : มีผู้ที่อยู่อาศัยร่วมบ้านเดินทางกลับมาจากพื้นที่ที่มีรายงานการ ระบาดของโรคติดเชื้อโควิด-19'
  , 'ข้อที่ 5 : เป็นบุคลากรทางการแพทย์หรือสาธารณสุข ที่สัมผัสกับผู้ป่วยเข้าเกณฑ์สอบสวนติดเชื้อโควิด-19'

]

const Result = (props) => {



  const [state, setState] = useState(false)
  const operation = (() => {
    setState(!state)
  })

  const [LoopArray, setLoopArray] = useState([]);
  // console.log(LoopArray);
  let Percent = 0;
  let number = [];
  let level = 0;
  let description = [];
  let descriptionEng = [];
  LoopArray.map((ans, index) => {
    if (ans === "Yes   ") {
      Percent++;
    }
    number = index + 1;
  })

  Percent = Percent / qa.length * 100;
  if (Percent == 20) {
    level = 1;
    description = 'ล้างมือ สวมหน้ากาก หลีกเลี่ยงที่แออัด ';
    descriptionEng ='Washing hands, wearing masks, avoid crowded';
  }
  else if (Percent == 40) {
    level = 1;
    description = 'ล้างมือ สวมหน้ากาก หลีกเลี่ยงที่แออัด และนอนให้เพียงพอ ';
    descriptionEng ='Washing hands, wearing masks, avoid crowded and get enough sleep';
  }
  else if (Percent == 60) {
    level = 2;
    description = 'ล้างมือ สวมหน้ากาก หลีกเลี่ยงที่แออัด อาจเป็นโรคอื่น ถ้า 2 วัน อาการไม่ดีขึ้นให้ไปพบแพทย์ ';
    descriptionEng ='Washing hands, wearing masks, avoid crowded area In case of the situation is not on well, it might be other diseases.';
  }
  else if (Percent == 80) {
    level = 3;
    description = 'ล้างมือ สวมหน้ากาก หลีกเลี่ยงที่แออัด เนื่องจากท่านมีประวัติอยู่ใกล้ชิดผู้ป่วยยืนยัน COVID-19 ให้ติดต่อเจ้าหน้าที่ควบคุมโรค เพื่อประเมินความเสี่ยง ';
    descriptionEng ='Washing hands, wearing masks, avoid crowded area Due to closely contact to COVID-19 patient, please contact the disease control officer to estimating the risk';
  }
  else if (Percent == 100) {
    level = 4;
    description = 'ล้างมือ สวมหน้ากาก หลีกเลี่ยงที่แออัด ให้ติดต่อสถานพยาบาลทันที ';
    descriptionEng ='Washing hands, wearing masks, avoid crowded area Contact the nearest hospital immediately';
  }


  return (
    <div >

      {LoopArray.length < qa.length ?
        (
          <div className='space'>

            <Button variant="success" onClick={() => setLoopArray([...LoopArray, "Yes   "])}  > Yes </Button>
            <Button variant="danger" onClick={() => setLoopArray([...LoopArray, "No   "])} > No </Button>
            <br />

          </div>
        )
        : null
      }
      <div>
      <h2 className='text'>
      Question {number} <br/>
        {LoopArray}
      </h2>
      </div>
      

      <h1
        style={{ color: "orange" }}
      >{Percent}%</h1>
      <br />

      <div>
        {
          state ?
            (<div className='txstart'>
              <h3 className ='flx'>
              ระดับของคุณ: {level}
              <br />
              คำอธิบาย : {description}
              
              <br />
              Your level : {level}  <br />
              description: {descriptionEng}
              </h3>
              
            </div>
            ) : null
        }<br />
        {/* <h3 className='ans'>Question {number} <br />{LoopArray}   </h3> */}

        <Button variant="outline-dark" onClick={() => operation()}>Result</Button>

      </div>
    </div>

  )

}

export default Result;
