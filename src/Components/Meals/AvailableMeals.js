import React from 'react'
import Carde from '../UI/Carde'
import MealsItem from './MealsItem/MealsItem';
import './AvailableMeals.css'

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

function AvailableMeals() {

    const availableMeals = DUMMY_MEALS.map((meal) => (
      <MealsItem
          key={meal.id}

          id={meal.id}

          name={meal.name}

          description={meal.description}

          price={meal.price}
      >

      </MealsItem>
    ))


    return (
       <section className="meals">
         <Carde>
         <ul>{availableMeals}</ul>
          
         </Carde>
       </section>
    )
}

export default AvailableMeals
