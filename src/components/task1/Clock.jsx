import { useEffect, useState } from 'react';

function Clock(props) {
  console.log(props);//console.log(props.objClock.idUU);
  // const [titleClock, setTitleClock] = useState(props.objClock.title);
  const titleClock = props.objClock.title;
  // const [timeZoneClock, setTimeZoneClock] = useState(props.objClock.timeZone);
  // const timeZoneClock = props.objClock.timeZone;
  const [time, setTime] = useState(props.time);
  const idUU = props.objClock.idUU;
  const funcDelClock = props.functionDelClock;  //  console.log(funcDelClock);

  return (
    <>
      <div className='divClock'>
        <div className='clockTitle'>{titleClock}</div>
        <div className='clock'>{time}</div>
        <div className='displayNone'>{idUU}</div>
        <button onClick={funcDelClock}>Удалить</button>
      </div>
    </>
  )
}

export default Clock;
