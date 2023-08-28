import Delayed from '../utils/Delayed';

function Component3({ counter }: { counter: any }) {
  return (
    <Delayed>
      <div className="Component">
        <h3>Component3</h3>
        <p>{counter}</p>
      </div>
    </Delayed>
  );
}

export default Component3;
