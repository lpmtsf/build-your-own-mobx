import {useState} from 'react';
import Component1 from './Folder1/Component1';
import Component2 from './Folder1/Component2';
import Component3 from './Folder1/Component3';
import Component4 from './Folder1/Component4';

function App() {
  const [counter, setCounter] = useState(0)
  
  const increaseCounter = () => setCounter(counter + 1)
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          BUILD YOUR OWN MOBX
        </h1>
      </header>
      <h2>STATE: {counter}</h2>
      <button onClick={increaseCounter}>ADD</button>
      <div className="componentsGrid">
        <Component1 counter={counter} setCounter={setCounter} />
        <Component2 counter={counter} />
        <Component3 />
        <Component4 counter={counter} setCounter={setCounter} />
      </div>
    </div>
  );
}

export default App;
