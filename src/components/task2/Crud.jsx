import { useState } from 'react';
import './crud.css';
import Notes from './Notes';
import { v4 as uuidv4 } from 'uuid';

function Crud() {
  const [NewNote, setNewNote] = useState('');
  const [notes, setNotes] = useState([]);

  const fetchDel = async (idNote) => {
    fetch('http://localhost:7070/notes/' + idNote, { method: 'DELETE' })
    .then(response => {
      if (response.ok) {
        updateNotes();
      }
    })
    .then(data => {
      if (data !== undefined) {
        console.log(data);
      }
    })
    .catch(error => console.error('Fetch error:', error));
  };

  const delNote = (e) => {
    const divIdUUNote = e.target.previousElementSibling;
    const idUUNote = divIdUUNote.textContent;
    const ObjNoteIdUU = notes.find(objNote => objNote.idUU === idUUNote);
    const idObjNote = ObjNoteIdUU.id;
    fetchDel(idObjNote);
    updateNotes();
  };

  const fetchPost = async (textNewNote) => {
    let bodyFetchPost = {
      id: 0,
      idUU: uuidv4(),
      content: textNewNote
    };
    const response = await fetch('http://localhost:7070/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bodyFetchPost)
    })
    .then(response => {
      if (response.ok) {
        updateNotes();
      }
    })
    .then(data => {
      if (data !== undefined) {
        console.log(data);
      }
    })
    .catch(error => console.error('Fetch error:', error));
  };
  

  const fetchGet = () => {
    fetch('http://localhost:7070/notes')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP ошибка! Код: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      setNotes(data);
    })
    .catch(error => {
      console.error('Ошибка при выполнении запроса: ', error);
    });
  };

  const updateNotes = async() => {
    fetchGet();
  };

  const addNewNote = (e) => {
    e.preventDefault();
    if (NewNote === '') {
      return
    } else {
      fetchPost(NewNote);
    }
    setNewNote('');
    updateNotes();
  };

  return (
    <>
      <div className='task2'>
        <div id='crudTitle'>
          <div className='notes'>
            <h1 className='titleTask'>Notes</h1>
          </div>
          <button id='updateBtn' onClick={updateNotes}>Обнавить</button>
        </div>
        <div id='divNotes'>
          <Notes props={notes} funcDel={delNote} />
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