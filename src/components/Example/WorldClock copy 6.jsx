import './worldClock.css';
// import { useEffect, useState } from 'react';
import { useState } from 'react';
// import AllWc from './AllWc/AllWc';

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
      };      // console.log(addClock); // Проверка
      setAllClockWc(allClockWc => [...allClockWc, addClock]);// console.log(allClockWc);// Проверка
    } else {
      alert('Нужно заполнить Название и временная зона(от -12 до +12)');
      return;
    }

    setTitle('');
    setTimeZone('');
  }


  function AllWc() {  
    // console.log(props.props);  // console.log('функция: AllWc');
    const propsAllWc = props.props[0];
    const setAllClockWc = props.props[1];
    const indexUU = () => uuidv4();

    return (
      <>
        {propsAllWc.map((obj, index) => (
          <Clock key={index} props={[obj, index, propsAllWc, setAllClockWc]} />
        ))}
      </>
    );
  };


  const Clock = (props) => {  //   console.log('функция: Clock');
  //   console.log(props.props);
    const [propsClock, setPropsClock] = useState(props.props);   // console.log(propsClock);

    const delClock = () => {
      console.log('Кнопка Удалить Часы');
      console.log(propsClock);
      console.log(propsClock[2]);
      console.log(propsClock[3]);
      const setAllClockWc = propsClock[3];
      
    };

    return (
      <>
        <div className='divClock'>
          <div className='clockTitle'>{propsClock[0].title}</div>
          <div className='clock'>{propsClock[0].timeZone}</div>
          <button onClick={delClock}>Удалить</button>
        </div>
      </>
    )
  };




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
          <AllWc props={[allClockWc, setAllClockWc]} />
        </div>
      </div>
    </>
  )
};

export default WorldClock;