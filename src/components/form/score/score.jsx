import { useContext } from 'react';
import { TestProvider } from '../../../providers/testprovider';

function Score(props) {
  const { count, score } = useContext(TestProvider);
  return (
    <div className="mx-3 mt-1 mb-5">
      <h2 className="text-muted">
        Score: {score}/{count}
      </h2>
    </div>
  );
}

export default Score;
