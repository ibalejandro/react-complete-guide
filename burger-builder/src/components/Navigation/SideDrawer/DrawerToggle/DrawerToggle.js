import React from "react";
import { DrawerToggle } from "./StyledDrawerToggle";

const drawerToggle = (props) => {
    return (
        <DrawerToggle onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </DrawerToggle>
    )
};

export default drawerToggle;