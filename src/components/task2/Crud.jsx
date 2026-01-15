import './crud.css';

function Crud() {
  fetch('http://localhost:7070/notes')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP ошибка! Код: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Данные из API:', data);
    })
    .catch(error => {
      console.error('Ошибка при выполнении запроса:', error);
    });



  return (
    <>
      <div className='task2'>
        <div id='crudTitle'>
          <div className='notes'>
            <h1 className='notesH1'>Notes</h1>
          </div>
          <button className='update'>Обнавить</button>
        </div>
        <div id='allNotes'></div>
        <div id='crudBottom'></div>
        {/* <div className='crud'></div> */}
      </div>
    </>
  )
};

export default Crud;