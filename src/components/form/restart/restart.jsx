import { useContext } from 'react';
import { TestProvider } from '../../../providers/testprovider';

function Restart(props) {
  const { onReset } = useContext(TestProvider);
  return (
    <div
      className="d-grid gap-2 my-5"
      onClick={() => {
        onReset();
      }}>
      <button className="btn btn-primary" type="button">
        Restart
      </button>
    </div>
  );
}

export default Restart;
