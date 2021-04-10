import React from "react";
import {StyledLItem} from "./StyledNavigationItem"

const navigationItem = (props) => {
    return (
        <StyledLItem active={props.active}><a href={props.link}>{props.children}</a></StyledLItem>
    )
};

export default navigationItem;