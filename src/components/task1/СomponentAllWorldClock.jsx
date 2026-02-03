import Clock from './Clock';

const СomponentAllWorldClock  = (props) => {  // console.log(props);

  if (props.propsAllWorldClock === undefined) {
    return;
  }

  const allClock = props.propsAllWorldClock;
  const setAllClock = props.propsSetAllWorldClock;

  const delClock = (e) => {
    const divIdUU = e.target.previousElementSibling;
    const idUU = divIdUU.textContent;
    const newAllClock = allClock.filter(objClock => objClock.idUU !== idUU);
    setAllClock(newAllClock);
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