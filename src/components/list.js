import React, { useState, useEffect } from 'react';
import { firestore } from '../index'
import Answer from './Answer'
import './Answer.css'
import './List.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,  } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import firebase from "firebase"

const qa = [
  'ข้อที่ 1 : ท่านเดินทางหรืออยู่อาศัยในพื้นที่ที่มีรายงานการระบาดต่อเนื่องของโควิด-19 ใน 14 วันที่ผ่านมา  '
  , 'ข้อที่ 2 : ท่านเป็นผู้ที่ประกอบอาชีพที่สัมผัสใกล้ชิดกับนักท่องเที่ยวต่างชาติสัมผัสใกล้ชิดและนานมากกว่า 5 นาที'
  , 'ข้อที่ 3 : มีประวัติใกล้ชิดหรือสัมผัสกับผู้ป่วยเข้าข่ายหรือยืนยันโรคติดเชื้อโควิด-19'
  , 'ข้อที่ 4 : มีผู้ที่อยู่อาศัยร่วมบ้านเดินทางกลับมาจากพื้นที่ที่มีรายงานการ ระบาดของโรคติดเชื้อโควิด-19'
  , 'ข้อที่ 5 : เป็นบุคลากรทางการแพทย์หรือสาธารณสุข ที่สัมผัสกับผู้ป่วยเข้าเกณฑ์สอบสวนติดเชื้อโควิด-19'

]

const qaEng = [
  'question 1: You have traveled or resided in an area that reported continuous outbreaks of Covid-19 in the past 14 days.',
  'question 2: You are a person who works closely with foreign tourists, stays in touch for more than 5 minutes.',
  'question 3: Having a close history or contact with patients under the scope of or confirming the Covid-19 infection',
  'question 4: There are co-residents returning from the reporting area. Covid-Infection Outbreak',
  'question 5: Are medical or public health personnel Who contacted the patient into questioning the investigation of the Covid-19 infection',
]
const List = (props) => {
  // const { LoopArray } = props;
  const [questions, setQuestions] = useState([]);
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    retriveData();
  }, [])

  let datas = []

  const retriveData = () => {
    firestore.collection("questions").onSnapshot((snapshot) => {
      console.log(snapshot.docs)

      let myanswer = snapshot.docs.map(d => {
        const { id, answer } = d.data()
        console.log(id, answer)
        datas.push([...datas, answer])
        return { id, answer }
      })
      setQuestions(myanswer)
    })
  }


  const deleteAnswer = (id) => {
    firestore.collection("questions").doc(id + "").delete()
  }

  const editAnswer = (id) => {
    firestore.collection("questions").doc(id + "").set({ id, answer })
  }

  const renderAnswer = () => {
    if (questions && questions.length) {
      return questions.map((question, index) => {

        if(index < 5 ){
          return (
            <Answer key={index} question={question}
              deleteAnswer={deleteAnswer}
              editAnswer={editAnswer}
              index={index + 1}
            />
          )
        }
        
        
      })
    }
    else { return (<li>  No answer  </li>) }
  }


  // const addMenu = () => {
  //   let id = (questions.length === 0) ? 1 : questions[questions.length - 1].id + 1;

  //   firestore.collection("questions").doc(id + "").set({ id, answer })

  // }
const i =0 ;
  const addAnswer1 = () => {
    let id = (questions.length === 0) ? 1 : questions[questions.length - 1].id + 1;
    if(id <=5){ 
      datas.push('yes')
      firestore.collection("questions").doc(id + "").set({ id, answer: 'yes' })
      
    }
    
  }
  
  const addAnswer2 = () => {
    let id = (questions.length === 0) ? 1 : questions[questions.length - 1].id + 1;
    if(id <=5){
      datas.push('no')
      firestore.collection("questions").doc(id + "").set({ id, answer: 'no' })
    }
   
  }



  const [LoopArray, setLoopArray] = useState([]);
  console.log(LoopArray);
  let Percent = 0;
  let LoopPercent = LoopArray.map((ans, index) => {
    if (ans === "YES") {
      Percent++;
    }
  })
  Percent = Percent / qa.length * 100; //กรณีมี5ข้อ
  console.log(Percent);

  return (

    <div>
      <div>
      </div>
      <h3>ระดับความเสี่ยงและคำแนะนำในการปฏิบัติตน COVID-19 <br/>
          Risk levels and recommendations for self assessment during COVID-19 </h3>
          <div> <Button variant="outline-primary" onClick={() => firebase.auth().signOut()}>sign out </Button></div>
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
                  <p>ให้ตอบ ใช่/ไม่ใช่ <br /> Yes or No </p>
                </InputGroup.Text>
              </InputGroup.Prepend>
            </div>

            <div className='marginques' >
              {

                qa.map(qa =>
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      {qa}<br />
                    </InputGroup.Text><br /><br />
                  </InputGroup.Prepend>
                )
              }
            </div>

            <div className='marginques2' >
              {

                qaEng.map(qaEng =>
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      {qaEng}<br />
                    </InputGroup.Text><br /><br />
                  </InputGroup.Prepend>)
              }
            </div>

          </div>


        </div>
      </div>
      <div className='top'>
        <h1 >Your answer</h1>

        <div>
          <h1 style={{ color: "orange" }}>{Percent}%</h1>

          <p>TEST</p>

          {LoopArray.length < qa.length ?
            (
              <div>
                <button onClick={() => setLoopArray([...LoopArray, "YES"])}>YES</button>
                <button onClick={() => setLoopArray([...LoopArray, "NO"])}>NO</button>
              </div>
            )
            : alert("ตอบครบทุกข้อเเล้ว")
          }
<br/>
        </div>

       
       <Button  variant="danger" onClick={() => addAnswer1("YES")}>Yes</Button >      
        <Button  variant="success" onClick={() => addAnswer2("NO")}>No</Button >
      </div>


      <div className="dis">
        {renderAnswer()}
      </div>


    </div>
  );

}

export default List;