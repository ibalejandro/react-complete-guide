import React from "react";
import {StyledDangerButton, StyledSuccessButton} from "./StyledButton";

const button = (props) => {

    let btn = <StyledSuccessButton onClick={props.clicked}>{props.children}</StyledSuccessButton>;
    if (props.btnType === "Danger") {
        btn = <StyledDangerButton onClick={props.clicked}>{props.children}</StyledDangerButton>;
    }

    return (
        btn
    ) ;
};

export default button;