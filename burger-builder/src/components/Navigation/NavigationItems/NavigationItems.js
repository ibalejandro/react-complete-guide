import React from "react";
import {StyledUList} from "./StyledNavigationItems"
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => {
    return (
        <StyledUList>
            <NavigationItem link="/" active>Burger Builder</NavigationItem>
            <NavigationItem link="/">Checkout</NavigationItem>
        </StyledUList>
    )
};

export default navigationItems;