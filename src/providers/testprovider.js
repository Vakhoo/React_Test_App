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
    const isCorrect = answer === correct_answer.correct_answer;

    const index = testList.findIndex(
      (el) => el.question === correct_answer.question,
    );
    if(answer==="True"){
      if (isCorrect) {
        const newList = [
          ...testList.slice(0, index),
          {
            ...correct_answer,
            colorTrue: 'success',
            disabled: true,
          },
          ...testList.slice(index + 1),
        ];
        setTestList(newList);

        console.log(newList);
      } else {
        const newList = [
          ...testList.slice(0, index),
          {
            ...correct_answer,
            colorTrue: 'danger',
            disabled: true,
          },
          ...testList.slice(index + 1),
        ];
        setTestList(newList);

        console.log(newList);
      }
    }else{
      if (isCorrect) {
        const newList = [
          ...testList.slice(0, index),
          {
            ...correct_answer,
            colorFalse: 'success',
            disabled: true,
          },
          ...testList.slice(index + 1),
        ];
        setTestList(newList);

        console.log(newList);
      } else {
        const newList = [
          ...testList.slice(0, index),
          {
            ...correct_answer,
            colorFalse: 'danger',
            disabled: true,
          },
          ...testList.slice(index + 1),
        ];
        setTestList(newList);

        console.log(newList);
      }
    }
    

    // const index = todoList.findIndex((item) => item.id === todo.id);
  };

  //   console.log(
  //     'my answer: ',
  //     answer,
  //     'correct answer: ',
  //     correct_answer,
  //     'real: ',
  //     isCorrect,
  //   );
  // };

  useEffect(() => {
    (async () => {
      const data = await API_TEST_SERVICE.getUsersListAsync({
        difficulty: diffclty,
      });
      setTestList(data.results);
      // console.log(buttonCollor);
      // console.log(data);
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
