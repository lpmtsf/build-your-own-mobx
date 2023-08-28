import Delayed from '../utils/Delayed';
import Component2 from './Component2';

function Component1({
  counter,
  setCounter,
}: {
  counter: any;
  setCounter: any;
}) {
  return (
    <Delayed triggerRerender={counter}>
      <div className="Component">
        <h3>Component1</h3>
        <p>{counter}</p>
        <Component2 counter={counter} setCounter={setCounter} />
      </div>
    </Delayed>
  );
}

export default Component1;
