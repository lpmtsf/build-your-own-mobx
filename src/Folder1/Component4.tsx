import { observer } from '../botx/botx';
import { counterStore } from '../utils/Store';

function Component4() {
  return (
    <div className="Component">
      <h3>Component4</h3>
      <p>{counterStore.counter}</p>
    </div>
  );
}

export default observer(Component4);
