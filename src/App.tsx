import { observer } from 'mobx-react-lite';
import { counterStore } from './utils/Store';
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>BUILD YOUR OWN MOBX</h1>
      </header>
      <button onClick={() => counterStore.counter++}>ADD</button>
      <button onClick={() => counterStore.counter--}>SUBTRACT</button>
      <p>{counterStore.counter}</p>
    </div>
  );
};

export default observer(App);
