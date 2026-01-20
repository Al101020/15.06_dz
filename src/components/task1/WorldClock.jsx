// Пример:
// import { useState } from 'react';
// export default function App() {
//     const [message, setMessage] = useState('');
//     const [updated, setUpdated] = useState(message);
//     const handleChange = (event) => {
//         setMessage(event.target.value);
//     };
//     const handleClick = () => {
//         // 👇 "message" stores input field value
//         setUpdated(message);
//     };
//     return (
//         <div>
//             <input type="text" id="message" name="message" onChange={handleChange} value={message} />
//             {/* <h2>Message: {message}</h2> */}
//             <h2>Updated: {updated}</h2>
//             <button onClick={handleClick}>Update</button>
//         </div>
//     );
// }

import './worldClock.css';
import { useEffect, useState } from 'react';
import moment from 'moment'; // import moment_timezone from 'moment-timezone';

import AllWc from './AllWc/AllWc';

const clock0 = () => { //(title, timeZone)
  const clockMoment = moment().utcOffset(0).format("HH:mm:ss");
  return clockMoment;
}


function WorldClock() {
  const [title, setTitle] = useState('');
  const [timeZone, setTimeZone] = useState('');
  const [allWClock, setAllWClock] = useState([]);

  function btnAddWc(e) {
    e.preventDefault();
    console.log(title);
    console.log(timeZone);

    const addClock = {
      title: title,
      timeZone: timeZone
    }
    if (!title && !timeZone) {
      setAllWClock(addClock);
    }
    
    console.log(allWClock);
  }

  return (
    <>
      <div className='task1'>
        <h1 className='titleTask'>WorldClock</h1>
        <form id='formWC' name='formWC'>
          <div id='wcTitle'>
            <label>Название
              <input type='text' id='message' name='title' value={title} 
              onChange={(e) => setTitle(e.target.value)} placeholder='может г. Уфа' required />
            </label>
          </div>
          <div id='wcTimeZone'>
            <label>Временная зона
              <input type='number' min='-12' max="12" name='timeZone'  id='timeZone' 
              value={timeZone} onChange={(e) => setTimeZone(e.target.value)} 
              placeholder='от -12 до 12' style={{width: '100px'}} required />
            </label>
          </div>
          <button id="btn-add-WC" onClick={btnAddWc}>Добавить</button>
        </form>
        <div id='allWc'>
          <AllWc props={allWClock} />
        </div>
      </div>
    </>
  )
};

export default WorldClock;