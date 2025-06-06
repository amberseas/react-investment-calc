import InvestmentParameters from "./components/InvestmentParameters";

function App () {
  return (
    <main>
      <div id="user-input">
        <div className="input-group">
          <InvestmentParameters name='Initial investment' type='number' parameters={{min: '0'}} />
          <InvestmentParameters name='Annual investment' type='number' parameters={{min: '0'}} />
        </div>
        <div className="input-group">
          <InvestmentParameters name='Expected return' type='number' parameters={{min: '0'}} />
          <InvestmentParameters name='Duration' type='number' parameters={{min: '0'}} />
        </div>
      </div>
    </main >
  );
}

export default App;
