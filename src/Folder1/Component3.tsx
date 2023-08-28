import Delayed from '../utils/Delayed';
import Component4 from './Component4';

function Component3({
  counter,
  setCounter,
}: {
  counter: any;
  setCounter: any;
}) {
  return (
    <Delayed>
      <div className="Component">
        <h3>Component3</h3>
        <p>{counter}</p>
        <Component4 counter={counter} setCounter={setCounter} />
      </div>
    </Delayed>
  );
}

export default Component3;
