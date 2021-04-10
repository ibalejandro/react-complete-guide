import React from "react";
import {
    StyledBaconDiv,
    StyledBreadBottomDiv,
    StyledBreadTopDiv,
    StyledCheeseDiv,
    StyledMeatDiv,
    StyledSaladDiv,
    StyledSeeds1Div,
    StyledSeeds2Div
} from "./StyledBurgerIngredient";
import PropTypes from "prop-types";

const burgerIngredient = (props) => {
    let ingredient = null;
    switch (props.type) {
        case ("bread-bottom"):
            ingredient = <StyledBreadBottomDiv/>;
            break;
        case ("bread-top"):
            ingredient = (
                <StyledBreadTopDiv>
                    <StyledSeeds1Div/>
                    <StyledSeeds2Div/>
                </StyledBreadTopDiv>
            );
            break;
        case ("meat"):
            ingredient = <StyledMeatDiv/>;
            break;
        case ("cheese"):
            ingredient = <StyledCheeseDiv/>;
            break;
        case ("bacon"):
            ingredient = <StyledBaconDiv/>;
            break;
        case ("salad"):
            ingredient = <StyledSaladDiv/>;
            break;
        default:
            ingredient = null;
    }

    return ingredient;
};

burgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default burgerIngredient;