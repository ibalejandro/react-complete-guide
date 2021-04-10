import React from "react";
import Backdrop from "../../Backdrop/Backdrop";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import { LogoContainer, StyledSideDrawer } from "./StyledSideDrawer";

const sideDrawer = (props) => {
    return (
        <div>
            <Backdrop show={props.show} modalClosed={props.sideDrawerClosed} />
            <StyledSideDrawer show={props.show}>
                <LogoContainer>
                    <Logo />
                </LogoContainer>
                <nav>
                    <NavigationItems />
                </nav>
            </StyledSideDrawer>
        </div>
    )
};

export default sideDrawer;