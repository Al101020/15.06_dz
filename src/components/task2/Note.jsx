const Note = (props) => {
  const delNote = props.funcDel;
  const contentNote = props.props.content;
  const idUUNote = props.props.idUU;

  return (
    <>
      <div className='note'>
        <div className='displayNone'>{idUUNote}</div>
        <div className='delNote' onClick={delNote}></div>
        <div className='content'>{contentNote}</div>
      </div>
    </>
  );
}

export default Note;