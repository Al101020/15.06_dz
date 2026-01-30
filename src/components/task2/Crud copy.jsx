import { useEffect, useState } from 'react';
import './crud.css';





function Crud() {
  const [NewNote, setNewNote] = useState('');
  const [allNotes, setAllNotes] = useState([]);

  const Notes = (props) => {
    const [propsNote, setPropsNote] = useState(props.props);
    const contentNote = propsNote.content;
    const idNote = propsNote.id;

    const delNote = () => {
      console.log('delNote');
      const newAllNotes = allNotes.filter(objNote => objNote.id !== propsNote.id);
      setAllNotes(newAllNotes);
      fetchDel(idNote);
    };
    return (
      <>
        <div className='note'>
          <div className='delNote' onClick={delNote}></div>
          <div className='content'>{contentNote}</div>
        </div>
      </>
    );
  }

  const ShowAllNotes = (props) => {// console.log(props);
    const showAllNotes = props.props;// console.log(showAllNotes);
    return (
      <>
        {showAllNotes.map((obj, index) => (
          <Notes key={index} props={obj} />
        ))}
      </>
    );
  }

  
  const fetchDel = async (idNote) => {// app.delete("/notes/:id"
    fetch('http://localhost:7070/notes/' + idNote, { method: 'DELETE' });
  };

  const fetchPost = async (textNewNote) => {
    let bodyFetchPost = {
      id: '',
      content: textNewNote
    };
    const response = await fetch('http://localhost:7070/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bodyFetchPost)
    });
  };

  const fetchGet = () => fetch('http://localhost:7070/notes')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP ошибка! Код: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {// console.log('Клик кнопка Обновить');// console.log(data);
      setAllNotes(data);    // return data;
    })
    .catch(error => {
      console.error('Ошибка при выполнении запроса: ', error);
    });

  const updateNotes = async() => {
    // console.log('стрелочная функция - updateNotes');
    fetchGet();    // const resultFetchGet = await fetchGet();
  };

  const addNewNote = (e) => {
    e.preventDefault();    // console.log('Клик кнопка Добавить New Note');
    if (NewNote === '') {
      return
    } else {
      fetchPost(NewNote);
    }
    setNewNote('');     // console.log(e.target);
  };
  

  useEffect(() => {
    updateNotes();
  }, []);

  // useEffect(() => {
  //   updateNotes();
  // }, [allNotes]);

  return (
    <>
      <div className='task2'>
        <div id='crudTitle'>
          <div className='notes'>
            <h1 className='titleTask'>Notes</h1>
          </div>
          <button id='updateBtn' onClick={updateNotes}>Обнавить</button>
        </div>
        <div id='divAllNotes'>
          <ShowAllNotes props={allNotes} />
        </div>
        <div id='crudBottom'>
          <div>New Note</div>
          <div>
            <form>
              <textarea name='textareaNewNote' id='textareaNewNote' rows='5' cols='45'
              value={NewNote} onChange={(e) => setNewNote(e.target.value)} required />
              <br />
              <button name='addNote' id='addNote' onClick={addNewNote}>Добавить</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
};

export default Crud;