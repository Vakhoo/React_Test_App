import React, { useEffect, useState } from 'react';
import API_TEST_SERVICE from '../services/api-test';

export const TestProvider = React.createContext(null);

function TestProviderComponent({ children }) {
  const [diffclty, setDiffclty] = useState('easy');
  const [testList, setTestList] = useState([]);

  const onSetDiffclty = (diff) => {
    setDiffclty(diff);
  };

  const onAnswer = (answer, correct_answer) => {
    const isCorrect = answer === correct_answer;

    console.log(
      'my answer: ',
      answer,
      'correct answer: ',
      correct_answer,
      'real: ',
      isCorrect,
    );
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
    <TestProvider.Provider
      value={{ diffclty, testList, onSetDiffclty, onAnswer }}>
      {children}
    </TestProvider.Provider>
  );
}

export default TestProviderComponent;
