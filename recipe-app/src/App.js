import { useState } from "react";
import Axios from "axios";
import "./App.css";

// Application ID
// aaccdc88

// Application Keys
// de203fc7e90572b513a3c2ae9ccabcae

function App() {
  const YOUR_APP_ID = `aaccdc88`;
  const YOUR_APP_KEY = `de203fc7e90572b513a3c2ae9ccabcae`;
  const [recipes, setRecipes] = useState([]);
  const url = `curl "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=alcohol-free"
  `;

  const getRecipeInfo = async (e) => {
    e.preventDefault();
    var result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data.hits);
  };
  return (
    <div className="app">
      <h1 onClick={getRecipeInfo}>result</h1>
      <h1>
        <u>Food Recipe Hub</u>
      </h1>

      <div className="app__searchForm">
        <input
          type="text"
          placeholder="Type the Ingredient"
          autoComplete="Off"
          className="app__input"
        />

        <select name="" id="" className="app__healthLabels">
          <option value="vegan">Vegan</option>
        </select>

        <input type="text" value="Get Recipe" className="app__submit" />
      </div>
    </div>
  );
}

export default App;
