import Component1 from './Folder1/Component1';
import Component2 from './Folder1/Component2';
import Component3 from './Folder1/Component3';
import Component4 from './Folder1/Component4';
import { counterStore } from './utils/Store';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>BUILD YOUR OWN <s>MOBX</s> BOTX</h1>
      </header>

      <button onClick={() => counterStore.counter++}>ADD</button>
      <button onClick={() => counterStore.counter--}>SUBTRACT</button>
      <p>{counterStore.counter}</p>
      <p>No observer here</p>
      <div className="componentsGrid">
        <Component1 />
        <Component2 />
        <Component3 />
        <Component4 />
      </div>
    </div>
  );
};

export default App;
