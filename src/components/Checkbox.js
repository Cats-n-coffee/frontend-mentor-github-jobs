import React from 'react'
import styled from 'styled-components'

import { CheckboxContainer, HiddenCheckbox, VisibleCheckbox } from './checkboxStyles'

const VisibleCheckboxIcon = styled(VisibleCheckbox)`
    background: ${ (props) => props.checked ? '#5964E0' : 'rgba(25,32,45, 0.1)' };
`;

const Icon = styled.svg`
    visibility: ${ (props) => props.checked ? 'visible' : 'hidden' };
`;

const Checkbox = ({ checked, setFullTime }) => {
    return (
        <CheckboxContainer>
        <HiddenCheckbox
            type="checkbox" 
            name="full-time" 
            id="search-full-time"
            checked={ checked }
            onChange={ () => setFullTime(!checked)}>
        </HiddenCheckbox>
        <VisibleCheckboxIcon checked={ checked }>
            <Icon checked={ checked } width="15" height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 12">
                <path d="M1 6.57l3.572 3.572L13.714 1" stroke="#FFF" strokeWidth="2" fill="none" fillRule="evenodd"/>
            </Icon>
        </VisibleCheckboxIcon>
    </CheckboxContainer>
    )   
}

export default Checkbox;