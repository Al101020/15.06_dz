import './worldClock.css';
import { useEffect, useState } from 'react';
import moment from 'moment'; // import moment_timezone from 'moment-timezone';

const clock0 = () => { //(title, timeZone)
  const clockMoment = moment().utcOffset(0).format("HH:mm:ss");
  return clockMoment;
}


function WorldClock() {
  const [title, setTitle] = useState('');
  const [timeZone, setTimeZone] = useState('');
  const [allWClock, setAllWClock] = useState([]);

  
  
  // function handleSubmit(e) {
  //   e.preventDefault();    // console.log('Клик кнопка Добавить Часы');

  //   console.log(title);
  //   const valueTitle = title;
  //   console.log(timeZone);

  //   setAllWClock({
  //     title: title,
  //     timeZone: timeZone
  //   });

  //   console.log(allWClock);

  //   setTitle('');
  //   setTimeZone('');
  // };

  return (
    <>
      <div className='task1'>
        <h1 className='titleTask'>WorldClock</h1>
        <form onSubmit={handleSubmit} id='formWC' name='formWC'>
          <div id='wcTitle'>
            <label>Название
              <input type='text' name='title' value={title} 
              onChange={(e) => setTitle(e.target.value)} placeholder='может г. Уфа' required />
            </label>
          </div>
          <div id='wcTimeZone'>
            <label>Временная зона
              <input type='number' min='-12' max="12" name='timeZone' 
              value={timeZone} onChange={(e) => setTimeZone(e.target.value)} 
              placeholder='от -12 до 12' style={{width: '100px'}} required />
            </label>
          </div>
          <input type='submit' name='formWC' value='Добавить'></input>
        </form>
        <div id='allWc'></div>
      </div>
    </>
  )
};

export default WorldClock;