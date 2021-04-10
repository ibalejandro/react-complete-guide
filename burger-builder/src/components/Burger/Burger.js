import React from "react";
import {StyledBurgerDiv} from './StyledBurger';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    const totalIngredients = Object.values(props.ingredients).reduce((a, b) => a + b, 0);
    let transformedIngredients = <p>Please start adding ingredients!</p>
    if (totalIngredients !== 0) {
        transformedIngredients = Object.keys(props.ingredients)
            .map(ingredientKey => {
                return (
                    [...Array(props.ingredients[ingredientKey])].map((_, index) => {
                        return (
                            <BurgerIngredient key={ingredientKey + index} type={ingredientKey}/>
                        );
                    })
                );
            });
    }

    return (
        <StyledBurgerDiv>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </StyledBurgerDiv>
    );
};

export default burger;