import Component1 from './Folder1/Component1';
import Component2 from './Folder1/Component2';
import Component3 from './Folder1/Component3';
import Component4 from './Folder1/Component4';

function App() {
  const counter = 0;

  return (
    <div className="App">
      <header className="App-header">
        <h1>BUILD YOUR OWN MOBX</h1>
      </header>
      <h2>STATE: {counter} </h2>
      <button onClick={() => {}}>ADD</button>
      <div className='componentsGrid'>
        <Component1 counter={counter} />
        <Component2 counter={counter} />
        <Component3 counter={counter} />
        <Component4 counter={counter} />
      </div>
    </div>
  );
}

export default App;
