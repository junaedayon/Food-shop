import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../../store/cart-context'
import CartIcon from '../Card/CardIcon'
import './HeaderButton.css'

function HeaderButton(props) {
    const [btnIsHigh , setBtnIsHigh] = useState(false)

    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;


    const numberOfCartItems = items.reduce((curNumber , item) =>{
        return curNumber + item.amount
    }, 0)
    

    useEffect (()=> {

        if(items.length ===0) {
            return;
        }
        setBtnIsHigh(true);

        const timer = setTimeout(() => {
            setBtnIsHigh(false)
        }, 300)

        return () => {
            clearTimeout(timer)
        }

    },[items])


    return (
        <button className={`button ${btnIsHigh ? "bump" : " "}`} onClick={props.onClick}>
            <span className="icon">

                <CartIcon></CartIcon>

            </span>
            <span>
                Your Cart
            </span>
            <span className="badge">
                {numberOfCartItems}
            </span>

        </button>
            

    )
}

export default HeaderButton
