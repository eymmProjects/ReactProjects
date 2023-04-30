import React from "react";
import ".//Recipetile/style.css";

function recipetilev2({ recipe, index }) {
  // return (
  //   recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
  //     <div className="recipeTile">
  //       <img
  //         className="recipeTile__image"
  //         src={recipe["recipe"]["image"]}
  //         onClick={() => window.open(recipe["recipe"]["url"])}
  //       />
  //       <p className="recipeTile__name">
  //         {index + 1}. {recipe["recipe"]["label"]}
  //       </p>
  //     </div>
  //   )
  // );
  return (
    recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null || (
      <div className="recipeTile">
        <img
          className="recipeTile__image"
          src={recipe["recipe"]["image"]}
          alt=""
          onClick={() => window.open(recipe["recipe"]["url"])}
        />
        <p className="recipeTile__name">
          {index + 1}.{recipe["recipe"]["label"]}
        </p>
      </div>
    )
  );
}

export default recipetilev2;
