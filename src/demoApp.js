import './App.css';
import { useEffect, useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(100);
  }, []);

  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
}

export default App;









// Example 03 (using the useState hook)

// import { useState } from 'react';
// const App = () => {
//   const [counter, setCounter] = useState(0);

//   return (
//     <div className="App">
//       <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
//       <h1>{counter}</h1>
//       <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
//     </div>
//   );
// }

// export default App;
