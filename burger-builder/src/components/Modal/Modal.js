import React from "react";
import {Modal} from "./StyledModal";
import Backdrop from "../Backdrop/Backdrop";

const modal = (props) => {
    return (
        <div>
            <Backdrop show={props.show} modalClosed={props.modalClosed}/>
            <Modal
                show={props.show}>{props.children}
            </Modal>
        </div>
    );
};

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.show === nextProps.show;
};

export default React.memo(modal, comparisonFn);