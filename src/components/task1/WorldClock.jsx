import './worldClock.css';
import React, {useState } from 'react';
import moment from 'moment';

const clock = () => {
  // const clockWc = new Date;
  // console.log(clockWc);
  const clockMoment = moment();
  return {
    HH: clockMoment.format('HH'),
    min: clockMoment.format('mm'),
    sec: clockMoment.format('ss')
  }
  // return clockMoment.format('HH:mm:ss');
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
              <input type='number' min="1" max="24" name='timeZone' 
              value={timeZone} onChange={(e) => setTimeZone(e.target.value)} placeholder='0-24' 
              style={{width: '100px'}} />
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