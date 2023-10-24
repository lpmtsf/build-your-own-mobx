import { observer } from 'mobx-react-lite';
import { counterStore } from './utils/Store';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>BUILD YOUR OWN MOBX</h1>
      </header>
      <button onClick={() => counterStore.increaseCounter()}>ADD</button>
      <button onClick={() => counterStore.decreaseCounter()}>SUBTRACT</button>
      <p>{counterStore.counter}</p>
    </div>
  );
};

export default observer(App);
