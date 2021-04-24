import { useContext } from 'react';
import { TestProvider } from '../../../providers/testprovider';
import TestItem from './test-item';
function Testing(props) {
  const { testList } = useContext(TestProvider);
  return (
    <ul className="list-group">
      {testList.map((test, i) => {
        return <TestItem test={test} key={i}/>;
      })}
    </ul>
  );
}

export default Testing;
