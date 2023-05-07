import React, { useState } from "react";
import "./App.css";
import Values from "values.js";
import SingleColor from "./SingleColor";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#F7f7f7").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <div className="App">
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="type color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            Get Colors
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return <SingleColor key={index} />;
        })}
      </section>
    </div>
  );
}

export default App;
