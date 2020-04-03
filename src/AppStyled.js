import styled from "styled-components";

export const StyledTogglePersonsButton = styled.button`
    background-color: ${props => !props.showStyle ? "#008000" : "#ff0000"};
    color: #eee;
    font: inherit;
    border: 1px solid #000fff;
    padding: 8px;
    cursor: pointer;
    &:hover {
        background-color: ${props => !props.showStyle ? "#90ee90" : "#ffcccb"};
        color: #000000;
    }
`;