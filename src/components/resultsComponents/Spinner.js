import React from 'react'
import styled, { keyframes } from 'styled-components'

const SpinningAnimation = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const SpinnerScreen = styled.div`
    height: 50vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SpinnerCircle = styled.span`
    height: 70px;
    width: 70px;
    border-radius: 50%;
    border: 5px solid white;
    border-top: 5px solid ${ (props) => props.theme.colors.violet };
    animation: 1s linear infinite ${ SpinningAnimation };
`;

const Spinner = () => {
    return ( 
        <SpinnerScreen>
            <SpinnerCircle></SpinnerCircle>
        </SpinnerScreen>
     );
}
 
export default Spinner;