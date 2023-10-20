import Delayed from '../utils/Delayed';
import { counterStore } from '../utils/Store';

function Component4() {
  return (
    <Delayed triggerRerender={counterStore.counter}>
      <div className="Component">
        <h3>Component4</h3>
        <p>{counterStore.counter}</p>
      </div>
    </Delayed>
  );
}

export default Component4;
