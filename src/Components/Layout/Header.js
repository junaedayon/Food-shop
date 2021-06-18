import React, { Fragment } from 'react'
import HeaderButton from './HeaderButton'
import mealsImg from '../../assets/meals.jpg'
import './Header.css'

function Header(props) {
    return (
        <Fragment>
            <header className="header">

                <h1>ReactMeals</h1>
                <HeaderButton onClick={props.onShowPortal}></HeaderButton>


            </header>

            <div className="main-image">
                <img src={mealsImg} alt="A table of delicious food"/>
            </div>
        </Fragment>
    )
}

export default Header
