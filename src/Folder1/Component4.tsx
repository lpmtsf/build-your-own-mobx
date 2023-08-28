import Delayed from '../utils/Delayed';

function Component4({ counter }: { counter: any }) {
  return (
    <Delayed>
      <div className="Component">
        <h3>Component4</h3>
        <p>{counter}</p>
      </div>
    </Delayed>
  );
}

export default Component4;
