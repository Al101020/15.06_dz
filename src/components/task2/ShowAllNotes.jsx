import Notes from './Notes'; // import { fetchPost } from './fetchPost';

const ShowAllNotes = (props) => {
  // console.log(props.funcDel);
  const funcDel = props.funcDel;
  const showAllNotes = props.props;
//   console.log(showAllNotes);
  return (
    <>
      {showAllNotes.map((obj, index) => (
      <Notes key={index} props={obj} funcDel={funcDel} />
      ))}
    </>
  );
};

export default ShowAllNotes;
