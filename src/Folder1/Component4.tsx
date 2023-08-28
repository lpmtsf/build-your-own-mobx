import { useContext } from 'react';
import Delayed from '../utils/Delayed';
import { AppContext } from '../App';

function Component4() {
  const { counter, setCounter } = useContext(AppContext);

  const decreaseCounter = () => {
    setCounter(counter - 1);
  };
  return (
    <Delayed triggerRerender={counter}>
      <div className="Component">
        <h3>Component4</h3>
        <p>{counter}</p>
        <button onClick={decreaseCounter}>SUBTRACT</button>
      </div>
    </Delayed>
  );
}

export default Component4;
