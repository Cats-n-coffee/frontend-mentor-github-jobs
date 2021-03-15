import React from 'react'
import styled, { keyframes } from 'styled-components'

const SpinningAnimation = keyframes`
    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }
`;

const SpinnerScreen = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SpinnerElement = styled.div`
    height: 100px;
    width: 100px;
    border: 1px solid black;
    display: flex;
    border-radius: 50%;
    position: relative;
`;

const SpinnerCircle = styled.span`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border-top: 5px solid ${ (props) => props.theme.colors.violet };
    border: 5px solid white;
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