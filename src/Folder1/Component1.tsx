import Delayed from '../utils/Delayed';
import { counterStore } from '../utils/Store';
import { observer } from 'mobx-react-lite';

function Component1() {
  return (
    <Delayed triggerRerender={counterStore.counter}>
      <div className="Component">
        <h3>Component1</h3>
        <p>{counterStore.counter}</p>
      </div>
    </Delayed>
  );
}

export default observer(Component1);
