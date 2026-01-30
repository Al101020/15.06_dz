import { useEffect, useState } from 'react';

function Clock(props) {// console.log(props);//console.log(props.objClock.idUU);
  const [titleClock, setTitleClock] = useState(props.objClock.title);
  const [timeZoneClock, setTimeZoneClock] = useState(props.objClock.timeZone);
  const [time, setTime] = useState(props.objClock.time0.utcOffset(Number(timeZoneClock))
    .format('HH:mm:ss'));
  const [time0, setTime0] = useState(props.objClock.time0);
  // const idUU = props.objClock.idUU;
  // console.log(idUU);
  const funcDelClock = props.objClock.delClock.delClock;  
   console.log(funcDelClock);

  useEffect(() => {
    const time = time0.utcOffset(Number(timeZoneClock)).format('HH:mm:ss');
    const time3 = time0.utcOffset(3).format('HH:mm:ss');
  }, [titleClock, timeZoneClock, time0]);

  return (
    <>
      <div className='divClock'>
        <div className='clockTitle'>{titleClock}</div>
        <div className='clock'>{time}</div>
        {/* <button onClick={funcDelClock(idUU)}>Удалить</button> */}
        <button onClick={funcDelClock}>Удалить</button>
      </div>
    </>
  )
}

export default Clock;
