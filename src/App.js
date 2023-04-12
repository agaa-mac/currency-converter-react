import "./App.css";

function App() {
  const currencies = [
    {
      name: "wybierz walutę",
    },
    {
      name: "Euro €",
      shortcut: "EUR",
      amount: 4.68,
    },
    {
      name: "US Dollar 🇺🇸",
      shortcut: "USD",
      amount: 4.4,
    },
    {
      name: "British pound 🇬🇧",
      shortcut: "GBP",
      amount: 5.29,
    },
  ];
  const exchangeCurrency = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="App">
      <h1>Przelicznik walut</h1>
      <form>
        <div>
          <label>Kwota w PLN</label>
          <input onChange={exchangeCurrency} type="number"></input>
        </div>
        <div>
          <label>Wybierz walutę</label>
          <select onChange={exchangeCurrency}>
            {currencies.map((currency, index) => {
              return (
                <option value={currency.shortcut} key={index}>
                  {currency.name}
                </option>
              );
            })}
          </select>
        </div>
      </form>
    </div>
  );
}

export default App;
