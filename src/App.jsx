import {useState} from "react";
import InvestmentParameters from "./components/InputField";
import InvestmentResultsTable from "./components/InvestmentResultsTable";
import UserInput from "./components/UserInput";

function App () {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleUserInputChange = (name, value) => {
    setUserInput(prevParams => {
      return {...prevParams, [name]: value};
    });
  };
  return (
    <main>
      <UserInput userInput={userInput} onChange={handleUserInputChange} />
      {userInput.duration !== null && userInput.duration <= 1 && <p>Duration must be greater than 1.</p>}
      <section id="result">
        <InvestmentResultsTable investParams={userInput} />
      </section>
    </main >
  );
}

export default App;
