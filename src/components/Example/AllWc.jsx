import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import './AllWc.css';

const delClock = () => {
  console.log('Кнопка Удалить Часы');
};

const Clock = (props) => {  // console.log('функция: Clock');
  const [propsClock, setPropsClock] = useState(props.props);   // console.log(propsClock);
  return (
    <>
      <div className='divClock'>
        <div className='clockTitle'>{propsClock.title}</div>
        <div className='clock'>{propsClock.timeZone}</div>
        <button onClick={delClock}>Удалить</button>
      </div>
    </>
  )
};

function AllWc(props) {  // console.log(props.props);  // console.log('функция: AllWc');
  const propsAllWc = props.props;
  const index = uuidv4();

  return (
    <>
      {propsAllWc.map((obj, index) => (
        <Clock key={index} props={obj} />
      ))}
    </>
  );
};
export default AllWc;
