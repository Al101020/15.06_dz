import moment from 'moment';
import Clock from './Clock';

const СomponentAllWorldClock  = (props) => {
  // console.log(props);

  if (props.propsAllWorldClock === undefined) {
    return;
  }

  const allClock = props.propsAllWorldClock;
  const setAllClock = props.propsSetAllWorldClock;


  const delClock = (e) => {
    const divIdUU = e.target.previousElementSibling;
    const idUU = divIdUU.textContent;
            // Filter
    const newAllClock = allClock.filter(objClock => objClock.idUU !== idUU);
    console.log(newAllClock);
    
    setAllClock(newAllClock);
    console.log(allClock);
  };

  return (
    <>
      {allClock.map((obj, index) => (
        <Clock key={index} objClock={obj} functionDelClock={delClock} timeClock={props.propsFuncMomentState} />
      ))}
    </>
  );
};

export default СomponentAllWorldClock;