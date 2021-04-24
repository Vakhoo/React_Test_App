import React, { useEffect, useState } from 'react';
import API_TEST_SERVICE from '../services/api-test';

export const TestProvider = React.createContext(null);

function TestProviderComponent({ children }) {
  const [diffclty, setDiffclty] = useState('easy');
  const [testList, setTestList] = useState([]);

  const onSetDiffclty = (diff) => {
    setDiffclty(diff);
  };

  useEffect(() => {
    (async () => {
      const data = await API_TEST_SERVICE.getUsersListAsync({
        difficulty: diffclty,
      });
      setTestList(data.results);
      console.log(data);
    })();
  }, [diffclty]);
  return (
    <TestProvider.Provider value={{ diffclty, testList, onSetDiffclty }}>
      {children}
    </TestProvider.Provider>
  );
}

export default TestProviderComponent;
