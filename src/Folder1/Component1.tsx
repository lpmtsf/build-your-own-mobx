import Delayed from '../utils/Delayed';

function Component1({ counter }: { counter: any }) {
  return (
    <Delayed triggerRerender={counter}>
      <div className="Component">
        <h3>Component1</h3>
        <p>{counter}</p>
      </div>
    </Delayed>
  );
}

export default Component1;
