import { useContext } from 'react';
import { TestProvider } from '../../../providers/testprovider';

function Dificulity(props) {
  const { onSetDiffclty } = useContext(TestProvider);
  const onSelect = (event) => {
    // console.log(event.target.value);
    onSetDiffclty(event.target.value);
  };
  return (
    <div>
      <select
        className="form-select"
        aria-label="Default select example"
        onChange={onSelect}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>
  );
}

export default Dificulity;
