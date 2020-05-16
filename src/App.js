import React, { useEffect, useState } from 'react'
import './App.css'
import Recipe from './Recipe'

const App = () => {
  const APP_ID = '9871576'
  const APP_KEY = '8fed7ab71849a7446895b3a07785066c'

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('Chicken');

  useEffect(() => {
    getRecipes()
  }, [query]);

  const getRecipes = async () => {
    let response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    let data = await response.json();
    console.log(data)
    setRecipes(data.hits);
  }

  const handleSearch = (e) => {
    setSearch(e.target.value);
    
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" name="search-bar" type="text" value={search} onChange={handleSearch} />
        <button className="search-button" type="submit">
          Search
        </button>        
      </form>
      <div className='recipes'>
      {
          recipes.map(recipe => {
            return <Recipe 
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          })
        }
      </div>
    </div>
  )
}

export default App
