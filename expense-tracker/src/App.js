import "./App.css";

import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";

function App() {
  return (
    <div className="App">
      <Header />
      <Balance />
      <IncomeExpense />
      <AddTransaction />
      <TransactionList />
    </div>
  );
}

export default App;
