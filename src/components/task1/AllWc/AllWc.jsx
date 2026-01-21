import './AllWc.css';
import { useEffect, useState } from 'react';

function AllWc(props) {
  // console.log(props.props);
  const title = props.props.title;
  const clockWc = props.props.timeZone;
  // const [allWClock, setAllWClock] = useState(ppp);
  // console.log(allWClock);

  // function addAllWc() {
    
    // const allWc = document.querySelector('#allWc');
    // console.log(allWc);
    const divClock = document.createElement('div');
    divClock.classList.add('divClock');

      const clockTitle = document.createElement('div');
      clockTitle.classList.add('clockTitle');
      clockTitle.textContent = {title} + ' - ' + 'время(ЧЧ:мм:сс):';

      const clock = document.createElement('div');
      clock.classList.add('clock');      
      clock.textContent = ' ' + {clockWc};

      divClock.append(clockTitle);
      divClock.append(clock);
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
  
}

export default AllWc;