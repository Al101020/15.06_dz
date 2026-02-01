import Clock from './Clock';

const AllWc = (props) => {
  // console.log(props);
  // console.log(props.propsAllClockWc);
  if (props.propsAllClockWc === undefined) {
    return;
  }

  const allClockWc = props.propsAllClockWc;
  const setAllClockWc = props.propsSetAllClockWc;

  const delClock = (e) => {
    const divIdUU = e.target.previousElementSibling; // получил div с idUU
    const idUU = divIdUU.textContent;
    console.log(idUU);
    console.log(allClockWc);
            // Filter
    // const newAllClockWc = allClockWc.filter(objClock => objClock.idUU !== idUU);
    // console.log(newAllClockWc);
    // setAllClockWc(newAllClockWc);
            // Slice
    const indexObjDel = allClockWc.findIndex(objClock => objClock.idUU === idUU);
    console.log(indexObjDel);
    // const deleted = people.splice(3);
    const newAllClockWc = allClockWc.splice(indexObjDel, 1);
    console.log(newAllClockWc);
    
    setAllClockWc(newAllClockWc);
    console.log(allClockWc);
  };

  return (
    <>
      {props.propsAllClockWc.map((obj, index) => (
        <Clock key={index} objClock={obj} functionDelClock={delClock} />
      ))}
    </>
  );
};

export default AllWc;