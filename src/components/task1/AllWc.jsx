import Clock from './Clock';

const AllWc = (props) => {
  console.log(props);
  console.log(props.propsAllClockWc);
  if (props.propsAllClockWc === undefined) {
    return;
  }
  return (
    <>
      {props.propsAllClockWc.map((obj, index) => (
        <Clock key={index} objClock={obj} functionDelClock={props.funcDelClock} />
      ))}
    </>
  );
};

export default AllWc;