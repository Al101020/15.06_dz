import { useState } from 'react';



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

export default Clock;