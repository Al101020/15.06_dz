import Note from './Note';

const Notes = (props) => {
  const funcDel = props.funcDel;
  const notes = props.props;
  return (
    <>
      {notes.map((obj, index) => (
      <Note key={index} props={obj} funcDel={funcDel} />
      ))}
    </>
  );
};

export default Notes;
