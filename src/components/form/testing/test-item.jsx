import { useContext } from 'react';
import { TestProvider } from '../../../providers/testprovider';

function TestItem({ test }) {
  const { onAnswer } = useContext(TestProvider);
  const onClick = (e) => {
    onAnswer(e.target.value, test.correct_answer);
  };
  return (
    <li className="list-group-item">
      {test.question}
      <div className="mt-1">
        <button
          type="button"
          className="btn btn-secondary mx-3"
          value="True"
          onClick={onClick}>
          True
        </button>
        <button
          type="button"
          className="btn btn-secondary mx-3"
          value="False"
          onClick={onClick}>
          False
        </button>
      </div>
    </li>
  );
}

export default TestItem;
