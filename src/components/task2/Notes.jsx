// import { useEffect, useState } from 'react';

const Notes = (props) => {   // console.log(props.funcDel);
  const delNote = props.funcDel; //   const [propsNote, setPropsNote] = useState(props.props);
  const contentNote = props.props.content;
  const idNote = props.props.id;

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