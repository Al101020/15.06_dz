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

function handleSubmit(e) {
  e.preventDefault();
  console.log('Клик кнопка Добавить');
};

function Crud() {
  // fetchGet();

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
            <form onSubmit={handleSubmit}>
              <textarea name="comment" rows="5" cols="45"></textarea><br></br>
              <input type="submit" name="submitInfo" value="Отправить"></input>
            </form>
          </div>
        </div>
      </div>
    </>
  )
};

export default Crud;