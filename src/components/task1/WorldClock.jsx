import './worldClock.css';
import { useEffect, useState } from 'react';

import { funcUuidv4 } from './uuidv4';
import funcMoment from './funcMoment';
import СomponentAllWorldClock from './СomponentAllWorldClock';

function WorldClock() {
  const [title, setTitle] = useState('');
  const [timeZone, setTimeZone] = useState(0);

  const [allWorldClock, setAllWorldClock ] = useState([]);
  // const [timeOf0TimeZone, setTimeOf0TimeZone ] = useState(funcTimeZone0());
  const [funcMomentState, setFuncMomentState ] = useState(funcMoment());

  const btnAddClock = (e) => {
    e.preventDefault();
    if (title && timeZone) {
      const addClock = {
        title: title,
        timeZone: timeZone,
        idUU: funcUuidv4(),
        // time: timeOf0TimeZone.utcOffset(Number(timeZone)).format('HH:mm:ss')
      };
      console.log(addClock);
      setAllWorldClock(allWorldClock => [...allWorldClock, addClock]);
    } else {
      alert('Нужно заполнить Название и Временная зона(от -12 до +12)');
      return;
    }

    setTitle('');
    setTimeZone('');
  }



  useEffect(() => {
    const interval = setInterval(() => {
      setFuncMomentState(funcMoment());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // useEffect(
  //   setInterval(() => {
  //         // console.log(funcTimeZone0());
  //     const newallWorldClock = {...allWorldClock};
  //     setAllWorldClock(newallWorldClock);
  //     // setTimeOf0TimeZone(funcTimeZone0()); // allWorldClock, 
  //   }, 1000), [allWorldClock]
  // );

  // useEffect(
  //   setInterval(() => {
  //     // console.log(timeOf0TimeZone);
  //     setTimeOf0TimeZone(funcTimeZone0());
  //   }, 1000), [timeOf0TimeZone]
  // );
  
  // useEffect(() => {
  //   const tikTak = setInterval(() => {
  //     setTimeOf0TimeZone(funcTimeZone0());
  //   }, 1000);
  //   // очистка интервала
  //   return () => clearInterval(tikTak);
  // }, [allWorldClock]);
  
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
          <button id='btn-add-WC' onClick={btnAddClock}>Добавить</button>
        </form>
        <div id='allWc'>
          <СomponentAllWorldClock propsAllWorldClock={allWorldClock}
            propsSetAllWorldClock={setAllWorldClock}
            propsFuncMomentState={funcMomentState}
            propsSetFuncMomentState={setFuncMomentState} /> 
        </div>
      </div>
    </>
  )
};

export default WorldClock;
