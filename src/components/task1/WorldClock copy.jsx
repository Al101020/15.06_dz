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
  //14
  const clockMoment4 = moment().utcOffset(4).format("HH:mm:ss");
  //13
  const clockMoment5 = moment().utcOffset(5).format("HH:mm:ss");
  //13
  const clockMoment6 = moment().utcOffset(6).format("HH:mm:ss");
  //13
  const clockMoment7 = moment().utcOffset(7).format("HH:mm:ss");
  //13
  const clockMoment8 = moment().utcOffset(8).format("HH:mm:ss");
  //13
  const clockMoment9 = moment().utcOffset(9).format("HH:mm:ss");
  //13
  const clockMoment10 = moment().utcOffset(10).format("HH:mm:ss");
  //13
  const clockMoment11 = moment().utcOffset(11).format("HH:mm:ss");
  //13
  const clockMoment12 = moment().utcOffset(12).format("HH:mm:ss");
  //13
  const clockMoment13 = moment().utcOffset(13).format("HH:mm:ss");
  //13
  const clockMoment14 = moment().utcOffset(14).format("HH:mm:ss");
  //13
  const clockMoment15 = moment().utcOffset(15).format("HH:mm:ss");
  //13
  const clockMoment16 = moment().utcOffset(-1).format("HH:mm:ss");
  //13
  const clockMoment17 = moment().utcOffset(-2).format("HH:mm:ss");
  //13
  const clockMoment18 = moment().utcOffset(-3).format("HH:mm:ss");
  //13
  const clockMoment19 = moment().utcOffset(-4).format("HH:mm:ss");
  //13
  const clockMoment20 = moment().utcOffset(-5).format("HH:mm:ss");
  //13
  const clockMoment21 = moment().utcOffset(-6).format("HH:mm:ss");
  //13
  const clockMoment22 = moment().utcOffset(-7).format("HH:mm:ss");
  //13
  const clockMoment23 = moment().utcOffset(-8).format("HH:mm:ss");
  //13
  const clockMoment24 = moment().utcOffset(-9).format("HH:mm:ss");

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
    2: clockMoment2,
    3: clockMoment3,
    4: clockMoment4,
    5: clockMoment5,
    6: clockMoment6,
    7: clockMoment7,
    8: clockMoment8,
    9: clockMoment9,
    10: clockMoment10,
    11: clockMoment11,
    12: clockMoment12,
    13: clockMoment13,
    14: clockMoment14,
    15: clockMoment15,
    16: clockMoment16,
    17: clockMoment17,
    18: clockMoment18,
    19: clockMoment19,
    20: clockMoment20,
    21: clockMoment21,
    22: clockMoment22,
    23: clockMoment23,
    24: clockMoment24
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
              <input type='number' min='-15' max="15" name='timeZone' 
              value={timeZone} onChange={(e) => setTimeZone(e.target.value)} 
              placeholder='от -15 до 15' style={{width: '100px'}} />
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