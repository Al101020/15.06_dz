import './worldClock.css';
// import { useEffect, useState } from 'react';
import { useState } from 'react';
// import AllWc from './AllWc/AllWc';
import { v4 as uuidv4 } from "uuid";


function WorldClock() {
  const [title, setTitle] = useState('');
  const [timeZone, setTimeZone] = useState('');
  const [allClockWc, setAllClockWc] = useState([]);

  const indexUU = () => uuidv4();

  const btnAddWc = (e) => {
    e.preventDefault();
    if (title && timeZone) {
      const addClock = {
        title: title,
        timeZone: timeZone,
        idUU: indexUU()
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
    // const propsAllWc = props.props[0];
    // const setAllClockWc = props.props[1];
    // const indexUU = () => uuidv4();

    return (
      <>
        {allClockWc.map((obj, index) => (
          <Clock key={index} props={obj} />
        ))}
      </>
    );
  };


  const Clock = (props) => {  //   console.log('функция: Clock');
    // console.log(props.props);
    const [propsClock, setPropsClock] = useState(props.props);   
    // console.log(propsClock);
    // console.log(allClockWc);
    // const [idClock, setIdClock] = 

    function delClock(e) {
      // console.log('Кнопка Удалить Часы');
      // console.log(propsClock);
      // console.log(propsClock[2]);
      // console.log(propsClock[3]);
      // const setAllClockWc = propsClock[3];
      // console.log(e.target.parentElement.children[3].textContent);
      const newAllClockWc = allClockWc.filter(wc => wc.idUU !== propsClock.idUU);
      setAllClockWc(newAllClockWc);

    };

    return (
      <>
        <div className='divClock'>
          <div className='clockTitle'>{propsClock.title}</div>
          <div className='clock'>{propsClock.timeZone}</div>
          <button onClick={delClock}>Удалить</button>
          <div className='idUU'>{propsClock.idUU}</div>
        </div>
      </>
    )
  };

  // const delClock = () => {}




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
          <AllWc />
        </div>
      </div>
    </>
  )
};

export default WorldClock;