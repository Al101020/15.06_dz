import { useEffect, useState } from 'react';
import './crud.css';
import ShowAllNotes from './ShowAllNotes'

function Crud() {
  const [NewNote, setNewNote] = useState('');
  const [allNotes, setAllNotes] = useState([]);

  const fetchDel = async (idNote) => {
    fetch('http://localhost:7070/notes/' + idNote, { method: 'DELETE' });
  };

  const delNote = (idNote) => {
    console.log('delNote');
    console.log(idNote);
    console.log(allNotes);
    const newAllNotes = allNotes.filter(objNote => objNote.id !== idNote);
    setAllNotes(newAllNotes);
    fetchDel(idNote);
  };

  const fetchPost = async (textNewNote) => {
    let bodyFetchPost = {
      id: 0,
      content: textNewNote
    };
    const response = await fetch('http://localhost:7070/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bodyFetchPost)
    });
  };

  const fetchGet = () => {
    fetch('http://localhost:7070/notes')
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
  };

  const updateNotes = async() => {    // console.log('стрелочная функция - updateNotes');
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
    updateNotes();
  };
  
  useEffect(() => {
    updateNotes();
  }, []);

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
          <ShowAllNotes props={allNotes} funcDel={delNote} />
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