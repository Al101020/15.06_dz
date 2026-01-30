// import { useEffect, useState } from 'react';

const Notes = (props) => {
  // console.log(props.funcDel);
  const delNote = props.funcDel;
//   const [propsNote, setPropsNote] = useState(props.props);
  const contentNote = props.props.content;
  const idNote = props.props.id;

  // const fetchDel = async (idNote) => {// app.delete("/notes/:id"
  //   fetch('http://localhost:7070/notes/' + idNote, { method: 'DELETE' });
  // };

  // const delNote = () => {
  //   console.log('delNote');
  //   const newAllNotes = allNotes.filter(objNote => objNote.id !== idNote);
  //   setAllNotes(newAllNotes);
  //   fetchDel(idNote);
  // };

  //<div className='delNote' onClick={delNote}></div> 
  return (
    <>
      <div className='note'>
        <div className='delNote' onClick={delNote}></div> 
        <div className='content'>{contentNote}</div>
      </div>
    </>
  );
}

export default Notes;