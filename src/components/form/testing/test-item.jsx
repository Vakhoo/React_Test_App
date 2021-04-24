function TestItem({ test }) {
  return (
    <li className="list-group-item">
      {test.question}
      <div className="mt-1">
        <button type="button" className="btn btn-secondary mx-3">
          True
        </button>
        <button type="button" className="btn btn-secondary mx-3">
          False
        </button>
      </div>
    </li>
  );
}

export default TestItem;
