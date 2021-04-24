import Difficulty from '../../components/form/dificulity';
import Testing from '../../components/form/testing/testing';
import TestProviderComponent from '../../providers/testprovider';
function TestHome(props) {
  return (
    <TestProviderComponent>
      <div className="row">
        <div className="col-md-6 mx-auto mt-5">
          <Difficulty />
        </div>
        <div className="col-md-7 mx-auto mt-5">
          <Testing/>
        </div>
      </div>
    </TestProviderComponent>
  );
}

export default TestHome;
