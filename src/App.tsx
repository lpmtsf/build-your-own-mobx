import { observer } from 'mobx-react-lite';
import { counterStore } from './utils/Store';
import Component1 from './Folder1/Component1';
import Component2 from './Folder1/Component2';
import Component3 from './Folder1/Component3';
import Component4 from './Folder1/Component4';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>BUILD YOUR OWN MOBX</h1>
      </header>
      <button onClick={() => counterStore.increaseCounter()}>ADD</button>
      <button onClick={() => counterStore.decreaseCounter()}>SUBTRACT</button>
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
    </div>
  );
};

export default observer(App);
