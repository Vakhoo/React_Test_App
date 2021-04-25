import { useContext } from 'react';
import { TestProvider } from '../../../providers/testprovider';

function Restart(props) {
  const { onReset } = useContext(TestProvider);
  return (
    <div
      class="d-grid gap-2 my-5"
      onClick={() => {
        onReset();
      }}>
      <button class="btn btn-primary" type="button">
        Restart
      </button>
    </div>
  );
}

export default Restart;
