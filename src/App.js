import React, { useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Animation.css'
import Auth from './components/Auth'
import List from './components/List'
const App = () => {
  const [LoopArray, setLoopArray] = useState([]);
  console.log(LoopArray);
  const [login, setLogin] = useState(false);
  
  const Display = (
    <div>
      {login }
    </div>
  )
  return (
    <div>
      <Auth className='App' setLogin={setLogin} />
    
    
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
