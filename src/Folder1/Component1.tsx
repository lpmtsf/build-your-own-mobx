import { counterStore } from '../utils/Store';
import { observer } from '../botx/botx.js';
import Component4 from './Component4';

function Component1() {
  return (
    <div className="Component">
      <h3>Component1</h3>
      <p>{counterStore.counter}</p>
      <Component4 />
    </div>
  );
}

export default observer(Component1);
