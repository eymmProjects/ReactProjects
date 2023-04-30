import React from "react";

function recipetile({ recipe, index }) {
  return (
    recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
      <div className="recipeTile">
        <img
          className="recipeTile__image"
          src={recipe["recipe"]["image"]}
          onClick={() => window.open(recipe["recipe"]["url"])}
        />
        <p className="recipeTile__name">
          {index + 1}. {recipe["recipe"]["label"]}
        </p>
      </div>
    )
  );
}

export default recipetile;
