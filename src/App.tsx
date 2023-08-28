import { createContext, useState } from 'react';
import Component1 from './Folder1/Component1';
import Component2 from './Folder1/Component2';
import Component3 from './Folder1/Component3';
import Component4 from './Folder1/Component4';
export const AppContext = createContext(null);

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <AppContext.Provider value={{ counter, setCounter }}>
      <div className="App">
        <header className="App-header">
          <h1>BUILD YOUR OWN MOBX</h1>
        </header>
        <h2>STATE: {counter}</h2>
        <button onClick={() => setCounter(counter + 1)}>ADD</button>
        <div className="componentsGrid">
          <Component1 />
          <Component2 />
          <Component3 />
          <Component4 />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
