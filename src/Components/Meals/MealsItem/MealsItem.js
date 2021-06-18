import React, { useContext } from 'react'
import CartContext from '../../../store/cart-context'
import MealForm from './MealForm'
import './MealItem.css'

function MealsItem(props) {
   const cartCtx = useContext(CartContext)
     const price = `$ ${props.price.toFixed(2)}`

     const addToChartHandler = (amount) => {

        cartCtx.addItem ({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })

     }

    return (
        <li className="meal">
            <div >
                <h3>{props.name}</h3>
                <div className="description">{props.description}</div>
                <div className="price">{price}</div>


            </div>

            <div>
                <MealForm onAddtoCart={addToChartHandler}></MealForm>
            </div>
        </li>
    )
}

export default MealsItem
