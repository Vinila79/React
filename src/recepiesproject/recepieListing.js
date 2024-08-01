
import React, { useEffect, useState } from "react";
import './RecipeList.css';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then(response => response.json())
      .then(data => setRecipes(data.recipes))
      .catch(error => console.error('Error fetching the recipes:', error));
  }, []);

  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleMouseEnter = (image) => {
    setBackgroundImage(image);
  };

  const handleMouseLeave = () => {
    setBackgroundImage("");
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <input 
        type="text" 
        placeholder="Search recipes..." 
        value={searchTerm} 
        onChange={e => setSearchTerm(e.target.value)} 
        className="search-bar"
      />
      <div className="card-container">
        {filteredRecipes.map(recipe => (
          <div 
            className="card" 
            key={recipe.id} 
            onMouseEnter={() => handleMouseEnter(recipe.image)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={recipe.image} alt={recipe.name} />
            <div className="card-content">
              <h2 className="card-title">{recipe.name}</h2>
              <ul className="card-ingredients">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeList;

