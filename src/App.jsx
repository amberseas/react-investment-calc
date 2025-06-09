import {useState} from "react";
import UserInput from "./components/UserInput";
import ResultsTable from "./components/ResultsTable";

function App () {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleUserInputChange = (name, value) => {
    setUserInput(prevParams => {
      return {...prevParams, [name]: +value};
    });
  };
  return (
    <main>
      <UserInput userInput={userInput} onChange={handleUserInputChange} />
      {userInput.duration !== null && userInput.duration <= 1 && <p>Duration must be greater than 1.</p>}
      <ResultsTable investParams={userInput} />
    </main >
  );
}

export default App;
