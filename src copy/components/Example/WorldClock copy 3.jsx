import './worldClock.css';
import { useEffect, useState } from 'react';
import moment from 'moment'; // import moment_timezone from 'moment-timezone';

function WorldClock() {
  const [title, setTitle] = useState('');
  const [timeZone, setTimeZone] = useState('');

  const clock = (timeZone) => { //(title, timeZone)
    const clockMoment = moment().utcOffset(timeZone).format("HH:mm:ss");
    const clockMoment0 = moment().utcOffset(0).format("HH:mm:ss");
    
    return (
      console.log(clockMoment0),
      console.log(timeZone),
      clockMoment
    );
  }
  
  function handleSubmit(e) {
    e.preventDefault();    // console.log('Клик кнопка Добавить Часы');

    // const valueInputTitle = document.querySelector('#title');
    // console.log(title);
    const valueTitle = title;
    // console.log(timeZone);


    const timeWc = () => {
      console.log(timeZone);
      const clockWc = clock(timeZone);
      console.log(clockWc);
      return clockWc;
    };
    
    const allWc = document.querySelector('#allWc');
      const divClock = document.createElement('div');
      divClock.classList.add('divClock');
        const clockTitle = document.createElement('div');
        clockTitle.classList.add('clockTitle');
        clockTitle.textContent = valueTitle + ' - ';
        const clock = document.createElement('div');
        clock.classList.add('clock');
        clock.textContent = {timeWc};
      divClock.append(clockTitle);
      divClock.append(clock);
    allWc.append(divClock);
    
    setTitle('');
    setTimeZone('');
  };

  return (
    <>
      <div className='task1'>
        <h1 className='titleTask'>WorldClock</h1>
        <form onSubmit={handleSubmit} id='formWC' name='formWC'>
          <div id='wcTitle'>
            <label>Название<input type='text' name='title' value={title} 
            onChange={(e) => setTitle(e.target.value)} placeholder='может г. Уфа' /></label>
          </div>
          <div id='wcTimeZone'>
            <label>Временная зона
              <input type='number' min='-12' max="12" name='timeZone' 
              value={timeZone} onChange={(e) => setTimeZone(e.target.value)} 
              placeholder='от -12 до 12' style={{width: '100px'}} />
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