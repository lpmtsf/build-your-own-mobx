import Delayed from '../utils/Delayed';
import Component3 from './Component3';

function Component2({
  counter,
  setCounter,
}: {
  counter: any;
  setCounter: any;
}) {
  return (
    <Delayed triggerRerender={counter}>
      <div className="Component">
        <h3>Component2</h3>
        <p>{counter}</p>
        <Component3 counter={counter} setCounter={setCounter} />
      </div>
    </Delayed>
  );
}

export default Component2;
