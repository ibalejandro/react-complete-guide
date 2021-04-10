import React from "react";
import burgerLogo from "../../assets/burger-logo.png"
import {StyledLogo} from "./StyledLogo";

const logo = (props) => {
    return (
        <StyledLogo>
            <img src={burgerLogo} alt="MyBurger"/>
        </StyledLogo>
    )
};

export default logo;