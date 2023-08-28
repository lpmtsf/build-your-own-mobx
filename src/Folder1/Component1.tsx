import Delayed from '../utils/Delayed';
import Component4 from './Component4';

function Component1() {
  return (
    <Delayed>
      <div className="Component">
        <h3>Component1</h3>
        <p>NO COUNTER HERE</p>
        <Component4/>
      </div>
    </Delayed>
  );
}

export default Component1;
