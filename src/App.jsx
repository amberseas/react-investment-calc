import {useState} from "react";
import InvestmentParameters from "./components/InvestmentParameters";
import InvestmentResultsTable from "./components/InvestmentResultsTable";

function App () {
  const [investmentParameters, setInvestmentParameters] = useState({
    initialInvestment: null,
    annualInvestment: null,
    expectedReturn: null,
    duration: null,
  });

  const handleInvestmentParametersChange = (name, value) => {
    setInvestmentParameters(prevParams => {
      const newParams = {...prevParams, [name]: value};
      return newParams;
    });
  };
  return (
    <main>
      <div id="user-input">
        <div className="input-group">
          <InvestmentParameters label='Initial investment' name='initialInvestment' type='number' parameters={{min: '0'}} onChange={handleInvestmentParametersChange} />
          <InvestmentParameters label='Annual investment' name='annualInvestment' type='number' parameters={{min: '0'}} onChange={handleInvestmentParametersChange} />
        </div>
        <div className="input-group">
          <InvestmentParameters label='Expected return' name='expectedReturn' type='number' parameters={{min: '0'}} onChange={handleInvestmentParametersChange} />
          <InvestmentParameters label='Duration' name='duration' type='number' parameters={{min: '0'}} onChange={handleInvestmentParametersChange} />
        </div>
      </div>
      {investmentParameters.duration !== null && investmentParameters.duration <= 1 && <p>Duration must be greater than 1.</p>}
      <div id="result">
        <InvestmentResultsTable investParams={investmentParameters} />
      </div>
    </main >
  );
}

export default App;
