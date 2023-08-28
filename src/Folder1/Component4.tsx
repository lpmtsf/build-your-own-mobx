import Delayed from '../utils/Delayed';

function Component4({
  counter,
  setCounter,
}: {
  counter: any;
  setCounter: any;
}) {
  const decreaseCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <Delayed>
      <div className="Component">
        <h3>Component4</h3>
        <p>{counter}</p>
        <button onClick={decreaseCounter}>SUBTRACT</button>
      </div>
    </Delayed>
  );
}

export default Component4;
