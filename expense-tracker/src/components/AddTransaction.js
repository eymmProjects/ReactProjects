import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() + 10000000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
  };
  return (
    <div>
      <h2>Add new transaction</h2>
      <form action="" onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="label">Label</label>
          <input
            type="text"
            placeholder="Enter label..."
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>

        <div className="form-control">
          <label htmlFor="amount">
            {" "}
            (<b>-</b> / <b>+</b>) Amount &nbsp; &nsp; [-expense, +income]
            <input
              type="number"
              placeholder="Enter amount..."
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
          </label>
        </div>
        <button className="btn ">Add transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;
