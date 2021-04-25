import { TestProvider } from '../../../providers/testprovider';
import { useContext } from 'react';

function Category(props) {
  const { onSetCategory } = useContext(TestProvider);
  const onSelect = (event) => {
    onSetCategory(event.target.value);
  };
  return (
    <div>
      <h4 className="text-muted">Select Category:</h4>
      <select
        className="form-select"
        aria-label="Default select example"
        onChange={onSelect}>
        <option value="15">Entertainment: Video Games</option>
        <option value="9">General Knowledge</option>
        <option value="11">Entertainment: Film</option>
        <option value="27">Animals</option>
        <option value="22">Geography</option>
      </select>
    </div>
  );
}

export default Category;
