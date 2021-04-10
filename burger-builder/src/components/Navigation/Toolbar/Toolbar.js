import React from "react";
import { LogoContainer, NavigationItemsContainer, StyledHeader } from "./StyledToolbar";
import Logo from "../../Logo/Logo"
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = (props) => {
    return (
        <StyledHeader>
            <DrawerToggle clicked={props.drawerToggleClicked}/>
            <LogoContainer>
                <Logo />
            </LogoContainer>
            <NavigationItemsContainer>
                <NavigationItems />
            </NavigationItemsContainer>
        </StyledHeader>
    )
};

export default toolbar;