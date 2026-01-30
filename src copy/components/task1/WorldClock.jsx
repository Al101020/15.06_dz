import './worldClock.css';
import { useEffect, useState } from 'react';

import { indexUU } from './indexUU';
import { time } from './time';

function WorldClock() {
  const [title, setTitle] = useState('');
  const [timeZone, setTimeZone] = useState('');
  const [allClockWc, setAllClockWc] = useState([]);

  const btnAddWc = (e) => {
    e.preventDefault();
    if (title && timeZone) {
      const addClock = {
        title: title,
        timeZone: timeZone,
        idUU: indexUU()
      };
      setAllClockWc(allClockWc => [...allClockWc, addClock]);
    } else {
      alert('Нужно заполнить Название и Временная зона(от -12 до +12)');
      return;
    }

    setTitle('');
    setTimeZone('');
  }

  function AllWc() {
    return (
      <>
        {allClockWc.map((obj, index) => (
          <Clock key={index} props={obj} setAllClockWc/>
        ))}
      </>
    );
  };

  // function AllWc() {
  //   const arrAllClockWc = [];
  //   allClockWc.forEach((obj) => {
      
  //   });
  //   return (
  //     <>
  //       {allClockWc.map((obj, index) => (
  //         <Clock key={index} props={obj} />
  //       ))}
  //     </>
  //   );
  // };

  const Clock = (props) => {
    console.log(props);
    const [propsClock, setPropsClock] = useState(props.props);
    const [timeWc, setTimeWc] = useState(0);
    
    useEffect(() => {
      setInterval(() => {
        setTimeWc(time( Number(propsClock.timeZone) ));
      }, 1000);
    }, [timeWc]); // console.log(timeWc);

    function delClock() {
      const newAllClockWc = allClockWc.filter(wc => wc.idUU !== propsClock.idUU);
      setAllClockWc(newAllClockWc);
    };
    
    return (
      <>
        <div className='divClock'>
          <div className='clockTitle'>{propsClock.title}</div>
          <div className='clock'>{timeWc}</div>
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
              <input type='number' min='-12' max='12' name='timeZone'  id='timeZone' 
              value={timeZone} onChange={(e) => setTimeZone(e.target.value)} 
              placeholder='от -12 до 12' style={{width: '100px'}} required />
            </label>
          </div>
          <button id='btn-add-WC' onClick={btnAddWc}>Добавить</button>
        </form>
        <div id='allWc'>
          <AllWc />
        </div>
      </div>
    </>
  )
};

export default WorldClock;