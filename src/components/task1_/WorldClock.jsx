import './worldClock.css';
import { useEffect, useState } from 'react';

import { indexUU } from './indexUU';
import time0 from './time0';
import AllWc from './AllWc';

function WorldClock() {
  const [title, setTitle] = useState('');
  const [timeZone, setTimeZone] = useState('');
  const [allClockWc, setAllClockWc] = useState([]);

  const clockTZ0 = time0;
  // const clockTZ0 = time0(); 
  //  console.log(clockTZ0);
  // const [clockTimeZone0, setClockTimeZone0] = useState(clockTZ0);


  // setInterval(() => {setClockTimeZone0(clockTZ0)}, 1000);

  // useEffect(() => {
  //   interval = setInterval(() => {
  //     setClockTimeZone0(clockTZ0);
  //     console.log(clockTimeZone0)
  //   }, 1000);
  // } , [clockTimeZone0]);

  const btnAddWc = (e) => {
    e.preventDefault();
    if (title && timeZone) {
      const addClock = {
        title: title,
        timeZone: timeZone,
        // time0: clockTimeZone0, // ------------------------------
        idUU: indexUU(),        // delClock: {delClock}
      };
      setAllClockWc(allClockWc => [...allClockWc, addClock]);       // console.log(allClockWc); // []
    } else {
      alert('Нужно заполнить Название и Временная зона(от -12 до +12)');
      return;
    }

    setTitle('');
    setTimeZone('');
  }

  // useEffect(() => {
  //   setInterval(() => {
  //     setClockTimeZone0(time0());
  //   }, 1000);
  //   console.log(allClockWc)
  //   // setClockTimeZone0(time0());
  // }), [clockTimeZone0];


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
              <input type='number' min='-12' max='12' name='timeZone'  id='timeZone' 
              value={timeZone} onChange={(e) => setTimeZone(e.target.value)} 
              placeholder='от -12 до 12' style={{width: '100px'}} required />
            </label>
          </div>
          <button id='btn-add-WC' onClick={btnAddWc}>Добавить</button>
        </form>
        <div id='allWc'>
          {/* <AllWc propsAllClockWc={allClockWc} funcDelClock={delClock} /> */}
          <AllWc propsAllClockWc={allClockWc}
            propsSetAllClockWc={setAllClockWc}
            propsTime0={clockTZ0} />
        </div>
      </div>
    </>
  )
};

export default WorldClock;
