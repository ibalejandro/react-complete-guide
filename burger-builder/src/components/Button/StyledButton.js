import styled from "styled-components";

export const StyledButton = styled.button`
    background-color: transparent;
    border: none;
    color: white;
    outline: none;
    cursor: pointer;
    font: inherit;
    padding: 10px;
    margin: 10px;
    font-weight: bold;
    
    &:first-of-type {
      margin-left: 0;
      padding-left: 0;
    }
`;

export const StyledSuccessButton = styled(StyledButton)`
    color: #5C9210;
`;

export const StyledDangerButton = styled(StyledButton)`
    color: #944317;
`;