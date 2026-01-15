// import { useState } from 'react';
import './App.css';

import WorldClock from './components/task1/WorldClock.jsx';
import Crud from './components/task2/Crud.jsx';

function App() {
  return (
    <>
      <h3>Задача №1 - Мировые часы</h3>
      <WorldClock />
      <h3>Задача №2 - CRUD</h3>
      <Crud />
    </>
  )
};

export default App;



// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'


// function App() {
//   const [count, setCount] = useState(0);
//   console.log(count);
//   console.log('--- App ---');

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
