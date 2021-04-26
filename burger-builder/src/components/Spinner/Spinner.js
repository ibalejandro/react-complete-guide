import React from "react";
import MoonLoader from "react-spinners/MoonLoader";
import { StyledLoader } from "./StyledSpinner";

const spinner = (props) => {
    return (
        <MoonLoader color={"#521751"} loading={true} css={StyledLoader} size={75} />
    )
}

export default spinner;