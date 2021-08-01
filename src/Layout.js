import styled from "styled-components";
export const FlexContainer = styled.div`
    display:flex;
    flex-direction: ${props => props.direction ? props.direction : 'row'};
    padding:10px;

`;