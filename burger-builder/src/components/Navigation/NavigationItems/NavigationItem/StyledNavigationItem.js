import styled from "styled-components";

export const StyledLItem = styled.li`
    margin: 10px 0;
    box-sizing: border-box;
    display: block;
    width: 100%;
    
    & > a {
      color: ${props => props.active ? "#40A4C8" : "#8F5C2C"};
      text-decoration: none;
      width: 100%;
      box-sizing: border-box;
      display: block;
      
      &:hover,active {
        color: #40A4C8;
      }
    }

    @media (min-width: 500px) {
      margin: 0;
      display: flex;
      width: auto;
      height: 100%;
      align-items: center;
      
      & > a {
        color: #FFFFFF;
        width: auto;
        height: 100%;
        padding: 16px 10px;
        border-bottom: 4px solid transparent;
        background-color: ${props => props.active ? "#8F5C2C" : null};
        border-bottom: ${props => props.active ? "4px solid #40A4C8" : null};
        
        &:hover,active {
          background-color: #8F5C2C;
          border-bottom: 4px solid #40A4C8;
          color: #FFFFFF;
        }
      }
    }
`;