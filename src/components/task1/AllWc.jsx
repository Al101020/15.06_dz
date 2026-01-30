import Clock from './Clock';

const AllWc = (props) => {
    return (
      <>
        {props.propsAllClockWc.map((obj, index) => (
          <Clock key={index} objClock={obj} functionDelClock={props.funcDelClock} />
        ))}
      </>
    );
};

export default AllWc;