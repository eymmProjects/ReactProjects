import React from "react";

function AddTransaction() {
  return (
    <div>
      <h2>Add new transaction</h2>
      <form action="">
        <div className="form-control">
          <label htmlFor="label">Label</label>
          <input type="text" placeholder="Enter label..." />
        </div>

        <div className="form-control">
          <label htmlFor="amount">
            {" "}
            (<b>-</b> / <b>+</b>) Amount &nbsp; &nsp; [-expense, +income]
            <input type="number" placeholder="Enter amount..." />
          </label>
        </div>
        <button className="btn ">Add transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;
