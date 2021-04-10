import React from "react";
import {StyledBuildControlsDiv, StyledOrderButton, StyledTotalPriceP} from "./StyledBuildControls";
import BuildControl from "../BuildControl/BuildControl"

const CONTROLS = [
    {label: "Salad", type: "salad"},
    {label: "Bacon", type: "bacon"},
    {label: "Cheese", type: "cheese"},
    {label: "Meat", type: "meat"}
];

const buildControls = (props) => {
    return (
        <StyledBuildControlsDiv>
            <StyledTotalPriceP>Current Price: {props.totalPrice}</StyledTotalPriceP>
            {CONTROLS.map((ctrl) => {
                return (
                    <BuildControl
                        key={ctrl.label}
                        label={ctrl.label}
                        ingredientAdded={() => props.ingredientAdded(ctrl.type)}
                        ingredientRemoved={() => props.ingredientRemoved(ctrl.type)}
                        disabled={props.disabledInfo[ctrl.type]}/>
                );
            })}
            <StyledOrderButton
                disabled={!props.purchaseable}
                onClick={props.purchaseHandler}>ORDER NOW
            </StyledOrderButton>
        </StyledBuildControlsDiv>
    );
};

export default buildControls;