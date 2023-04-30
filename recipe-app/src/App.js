import { useState } from "react";
import Axios from "axios";
import "./App.css";
// import Recipetile from "./Recipetile/Recipetile";
import Recipetile from "./recipetilev2";
function App() {
  const YOUR_APP_ID = `7184cf21`;
  const YOUR_APP_KEY = `a9337d6a73353c7c9921eb69850b411c`;
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [healthLabel, setHealthLabel] = useState("vegetarian");

  const onSubmit = (e) => {
    e.preventDefault(); //this will prevent page from reloading.
    getRecipeInfo();
  };

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;

  const getRecipeInfo = async () => {
    var result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data.hits);
  };
  return (
    <div className="app">
      <h1>
        <u>Food Recipe Hub</u>
      </h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Type the Ingredient"
          autoComplete="Off"
          className="app__input myInput"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />

        <select className="app__healthLabels">
          <option
            value="vegan"
            onClick={() => {
              setHealthLabel("vegan");
            }}
          >
            vegan
          </option>
          <option
            value="vegetarian"
            onClick={() => {
              setHealthLabel("vegetarian");
            }}
          >
            vegetarian
          </option>
          <option
            value="low-sugar"
            onClick={() => {
              setHealthLabel("low-sugar");
            }}
          >
            low-sugar
          </option>
          <option
            value="dairy-free"
            onClick={() => {
              setHealthLabel("dairy-free");
            }}
          >
            dairy-free
          </option>
          <option
            value=" immuno-supportive "
            onClick={() => {
              setHealthLabel(" immuno-supportive ");
            }}
          >
            immuno-supportive
          </option>
          <option
            value="wheat-free"
            onClick={() => {
              setHealthLabel("wheat-free");
            }}
          >
            wheat-free
          </option>
        </select>

        <input type="submit" value="Get Recipe" className="app__submit" />
      </form>

      <div className="app__recipes">
        {recipes.map((recipe, index) => {
          return (
            <Recipetile key={recipe.recipe.uri} recipe={recipe} index={index} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
