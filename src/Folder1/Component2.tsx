import Delayed from "../utils/Delayed";

function Component2({ counter }: { counter: any }) {
  return (
    <Delayed triggerRerender={counter}>
      <div className="Component">
        <h3>Component2</h3>
        <p>{counter}</p>
      </div>
    </Delayed>
  );
}

export default Component2;
