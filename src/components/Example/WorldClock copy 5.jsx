import './worldClock.css';
import { useEffect, useState } from 'react';// import moment from 'moment'; 
  // import moment_timezone from 'moment-timezone';
  // useEffect(() => {}, []);
import AllWc from './AllWc/AllWc';

function WorldClock() {
  const [title, setTitle] = useState('');
  const [timeZone, setTimeZone] = useState('');
  const [allClockWc, setAllClockWc] = useState([]);

  const btnAddWc = (e) => {
    e.preventDefault();
    if (title && timeZone) {
      const addClock = {
        title: title,
        timeZone: timeZone
      };
      console.log(addClock);
      setAllClockWc(allClockWc => [...allClockWc, addClock]);
      console.log(allClockWc);
    } else {
      alert('Нужно заполнить Название и временная зона(от -12 до +12)');
      return;
    }

    setTitle('');
    setTimeZone('');
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
          <AllWc props={allClockWc}/>
        </div>
      </div>
    </>
  )
};

export default WorldClock;