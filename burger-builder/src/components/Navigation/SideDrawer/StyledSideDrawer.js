import styled from "styled-components";

export const StyledSideDrawer = styled.div`
    position: fixed;
    width: 280px;
    max-width: 70%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 200;
    background-color: #FFFFFF;
    padding: 32px 16px;
    box-sizing: "border-box";
    transition: transform 0.3s ease-out;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(-100%)'};

    @media (min-width: 500px) {
        display: none;
    }
`;

export const LogoContainer = styled.div`
    height: 11%;
    margin-bottom: 32px;
`;