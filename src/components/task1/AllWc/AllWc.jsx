import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import './AllWc.css';


const Clock = (props) => {
  // console.log('функция: Clock');
  const [propsClock, setPropsClock] = useState(props.props);
  console.log(propsClock);
  return (
    <>
      <div className='divClock'>
        <div className='clockTitle'>{propsClock.title}</div>
        <div className='clock'>{propsClock.timeZone}</div>
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

  // // нужен цикл
  // for (let i = 0; i < propsAllWc.length; i++) { // console.log(propsAllWc[i]); // елемент массива
  //   // console.log(propsAllWc[i]);
  //   // // let title = propsAllWc[i].title;
  //   // // let clockWc = propsAllWc[i].timeZone; // нужно вставить часы, пока timeZone
  //   // // Clock(title, clockWc);
  //   // // console.log('Цикл for');
  //   // if (title && clockWc) {
  //   //   // console.log(title);
  //   //   // console.log(clockWc);
      
  //   //   return (
  //   //     <>{
  //   //       // <Clock  props={[title, clockWc]} />
  //   //     }</>
  //   //   )
  //   }


  // const title = props.props.title;
  // const clockWc = props.props.timeZone;
  // // const [allWClock, setAllWClock] = useState(ppp);
  // // console.log(allWClock);

  // // function addAllWc() {
    
  //   // const allWc = document.querySelector('#allWc');
  //   // console.log(allWc);
  //   const divClock = document.createElement('div');
  //   divClock.classList.add('divClock');

  //     const clockTitle = document.createElement('div');
  //     clockTitle.classList.add('clockTitle');
  //     clockTitle.textContent = {title} + ' - ' + 'время(ЧЧ:мм:сс):';

  //     const clock = document.createElement('div');
  //     clock.classList.add('clock');      
  //     clock.textContent = ' ' + {clockWc};

  //     divClock.append(clockTitle);
  //     divClock.append(clock);
      // allWc.append(divClock);


  // };

  // addAllWc();

  // if (title && clock) {
  //   return (
  //     <>
  //       {/* <h2>title: {ppp.title}</h2> */}
  //       <div className='divClock'>
  //         <div className='clockTitle'>{ppp.title}</div>
  //         <div className='clock'>{ppp.timeZone}</div>
  //       </div>
  //     </>
  //   )
  // }
  
// }
