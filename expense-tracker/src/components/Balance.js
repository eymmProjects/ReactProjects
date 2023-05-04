import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

// Money Formatter function

function moneyFormatter(num) {
  let p = num.toFixed(2).split(".");
  return (
    " P " +
    p[0]
      .split("")
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
      }, "") +
    "." +
    p[1]
  );
}
function Balance() {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map((transaction) => transaction.amount);
  const total = amount.reduce((acc, item) => (acc += item), 0);
  return (
    <div>
      <h3>Balance</h3>
      <h5>{moneyFormatter(total)}</h5>
    </div>
  );
}

export default Balance;
