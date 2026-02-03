import Note from './Note';

const AllNotes = (props) => {
  const funcDel = props.funcDel;
  const showAllNotes = props.props;
  return (
    <>
      {showAllNotes.map((obj, index) => (
      <Note key={index} props={obj} funcDel={funcDel} />
      ))}
    </>
  );
};

export default AllNotes;
