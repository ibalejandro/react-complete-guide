import React from "react";
import {BackdropDiv} from "./StyledBackdrop";

const backdrop = (props) => {
    const content = props.show ? <BackdropDiv onClick={props.modalClosed}/> : null;

    return (
        <div>
            {content}
        </div>
    );
};

export default backdrop;