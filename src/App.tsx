import { useState } from 'react';
import Component1 from './Folder1/Component1';

function App() {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => setCounter(counter + 1);
  return (
    <div className="App">
      <header className="App-header">
        <h1>BUILD YOUR OWN MOBX</h1>
      </header>
      <h2>STATE: {counter}</h2>
      <button onClick={increaseCounter}>ADD</button>
      <Component1 counter={counter} setCounter={setCounter} />
    </div>
  );
}

export default App;
