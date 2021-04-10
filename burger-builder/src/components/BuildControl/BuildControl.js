import React from "react";
import {
    StyledBuildControlDiv,
    StyledBuildControlLabel,
    StyledBuildControlLessButton,
    StyledBuildControlMoreButton
} from "./StyledBuildControl";

const buildControl = (props) => {
    return (
        <StyledBuildControlDiv>
            <StyledBuildControlLabel>{props.label}</StyledBuildControlLabel>
            <StyledBuildControlLessButton
                onClick={props.ingredientRemoved}
                disabled={props.disabled}>Less
            </StyledBuildControlLessButton>
            <StyledBuildControlMoreButton
                onClick={props.ingredientAdded}>More
            </StyledBuildControlMoreButton>
        </StyledBuildControlDiv>
    );
};

export default buildControl;