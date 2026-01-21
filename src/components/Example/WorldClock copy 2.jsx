import './worldClock.css';
import React, {useState } from 'react';
import moment from 'moment';
import moment_timezone from 'moment-timezone';

const clock = () => {
  const setOffset = 3;

  // const clockWc = new Date;
  // console.log(clockWc);
  //1
  const clockMoment = moment();
  // return {
  //   HH: clockMoment.format('HH'),
  //   mm: clockMoment.format('mm'),
  //   ss: clockMoment.format('ss')
  // }

  //10
  const clockMoment0 = moment().utcOffset(0).format("HH:mm:ss");
  //11
  const clockMoment1 = moment().utcOffset(1).format("HH:mm:ss");
  //12
  const clockMoment2 = moment().utcOffset(2).format("HH:mm:ss");
  //13
  const clockMoment3 = moment().utcOffset(3).format("HH:mm:ss");

  //2
  let d = new Date();
  //3
  
  // const now = new Date();  
  // const timezone = clock.dataset.timezone;
  // const time = now.toLocaleString('en-US', { timeZone: timezone, hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });  
  // const time3 = `${timezone.split('/')}: ${time}`;
  const date3 = new Date(new Date().getTime() + setOffset * 3600000);

  return {
    0: clockMoment0,
    1: clockMoment1,
    1: clockMoment2,
    1: clockMoment3,
  }
  // return {
  //   1:clockMoment.format('HH:mm:ss'),
  //   12: clockMoment2,
  //   2:d,
  //   // 3:time3
  //   3: date3
  // };
}

function WorldClock() {
  const [title, setTitle] = useState('');
  const [timeZone, setTimeZone] = useState('');
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log('Клик кнопка Добавить Часы');
    const formData = new FormData(e.target);
    const formValues = {
      titleWc: formData.get('title'),
      inputTimeZone: formData.get('timeZone'),
    }
    console.log(formValues);

    setTitle('');
    setTimeZone('');

    console.log(clock());
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