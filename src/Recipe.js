import React from 'react'
import Style from './Recipe.module.css'

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={Style.recipe}>      
      <h2>{title}</h2>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <h4>Calories: {calories}</h4>
      <img className={Style.image} src={image} alt="recipe" />
    </div>
  )
}

export default Recipe
