import { counterStore } from '../utils/Store';

function Component3() {
  return (
    <div className="Component">
      <h3>Component3</h3>
      <p>No observer</p>
      <p>{counterStore.counter}</p>
    </div>
  );
}

export default Component3
