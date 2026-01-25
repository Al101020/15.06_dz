import { useEffect, useState } from 'react';
// import { useState } from 'react';
import './crud.css';
// import { v4 as uuidv4 } from 'uuid';

// const idUU = () => uuidv4();
// const indexUU = () => uuidv4();

const fetchGet = () => fetch('http://localhost:7070/notes')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP ошибка! Код: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // console.log('Клик кнопка Обновить');
    console.log(data);
    return data;
  })
  .catch(error => {
    console.error('Ошибка при выполнении запроса: ', error);
  });

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
  let result = await response;
  console.log(result);
  
};

function Crud() {
  const [NewNote, setNewNote] = useState('');
  const [allNotes, setAllNotes] = useState([]);

  const updateNotes = async() => {
    const resultFetchGet = await fetchGet();
    setAllNotes(resultFetchGet);
  };

  const addNewNote = (e) => {
    e.preventDefault();    // console.log('Клик кнопка Добавить New Note');
    if (NewNote === '') {
      return
    } else {
      fetchPost(NewNote);
    }
    setNewNote('');
  };

  // useEffect(() => {
  //   console.log(allNotes);
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
        <div id='allNotes'></div>
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