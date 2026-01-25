import { useEffect, useState } from 'react';
import './crud.css';

const fetchGet = () => fetch('http://localhost:7070/notes')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP ошибка! Код: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Клик кнопка Обновить');
    console.log(data);
  })
  .catch(error => {
    console.error('Ошибка при выполнении запроса:', error);
  });

function Crud() {
  const [NewNote, setNewNote] = useState([]);
  const [allNotes, setAllNotes] = useState([]);
  // fetchGet();

  const addNote = (e) => {
    e.preventDefault();
    console.log('Клик кнопка Добавить New Note');
    console.log(NewNote);

  setNewNote('');

  };

  return (
    <>
      <div className='task2'>
        <div id='crudTitle'>
          <div className='notes'>
            <h1 className='titleTask'>Notes</h1>
          </div>
          <button id='updateBtn' onClick={fetchGet}>Обнавить</button>
        </div>
        <div id='allNotes'></div>
        <div id='crudBottom'>
          <div>New Note</div>
          <div>
            <form>
              <textarea name='textareaNewNote' id='textareaNewNote' rows='5' cols='45'
              value={NewNote} onChange={(e) => setNewNote(e.target.value)} required></textarea>
              <br />
              <button name='addNote' id='addNote' onClick={addNote}>Добавить</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
};

export default Crud;