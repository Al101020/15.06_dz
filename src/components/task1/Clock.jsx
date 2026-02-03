import { useEffect, useState } from 'react';

function Clock(props) {  // console.log(props);
  const titleClock = props.objClock.title;
  const time = props.timeClock.utcOffset(Number(props.objClock.timeZone)).format('HH:mm:ss');
  const idUU = props.objClock.idUU;
  const funcDelClock = props.functionDelClock;

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
