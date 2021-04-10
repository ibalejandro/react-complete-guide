import React, { useState } from "react";
import { StyledContentMain } from "./StyledLayout"
import Toolbar from "../../components/Navigation/Toolbar/Toolbar"
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

const Layout = (props) => {
    const [showSideDrawer, setShowSideDrawerState] = useState(false);

    const sideDrawerCloseHandler = () => {
        setShowSideDrawerState(false);
    };

    const drawerToggleHandler = () => {
        // Right way when new state depends on previous state.
        setShowSideDrawerState((prevState) => {
            return {showSideDrawer: !prevState}
        });
    };

    return (
        <div>
            <div>Toolbar, SideDrawer, Backdrop</div>
            <Toolbar drawerToggleClicked={drawerToggleHandler} />
            <SideDrawer show={showSideDrawer} sideDrawerClosed={sideDrawerCloseHandler} />
            <StyledContentMain>{props.children}</StyledContentMain>
        </div>
    );
};

export default Layout;