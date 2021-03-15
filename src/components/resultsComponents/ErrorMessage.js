import React from 'react'
import styled from 'styled-components'

const ErrorContainer = styled.div`
    height: 50vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ErrorText = styled.p`
    color: ${ (props) => props.theme.fontColorTitles };
    font-size: ${ (props) => props.theme.fontSizes.sizeH3 };
`;

const ErrorMessage = ({ error }) => {
    return ( 
        <ErrorContainer>
            <ErrorText>{ error }</ErrorText>
        </ErrorContainer>
    );
}
 
export default ErrorMessage;