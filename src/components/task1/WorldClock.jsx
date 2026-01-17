import './worldClock.css';

function handleSubmit(e) {
  e.preventDefault();
  console.log('Клик кнопка Добавить Часы');
};

function WorldClock() {
  return (
    <>
      <div className='task1'>
        <h1 className='titleTask'>WorldClock</h1>
        <form onSubmit={handleSubmit}>
          <div id='wcTitle'>
            <label>Название
            <input type="text" name="title" placeholder="может London" /></label>
          </div>
          <div id='wcTimeZone'>
            <label>Временная зона
            <input type="text" name="timeZone" placeholder="например 10" /></label>
          </div>
          
          <input type="submit" name="submitInfo" value="Добавить"></input>
        </form>
      </div>
    </>
  )
};

export default WorldClock;