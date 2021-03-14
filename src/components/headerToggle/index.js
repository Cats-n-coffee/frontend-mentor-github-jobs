import styled from 'styled-components'

export const ToggleSwitchContainer = styled.fieldset`
    display: flex;
    width: auto;
    align-items: center;
`;

export const ToggleLabel = styled.label`
    position: relative;
    display: inline-block;
    width: 48px;
    height: 24px;
`;

export const SliderSpan = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${ (props) => props.theme.colors.violet };
    transition: 400ms;
    border-radius: 34px;

    &:before {
        content: '';
        position: absolute;
        height: 18px;
        width: 18px;
        left: 3px;
        bottom: 3px;
        background: white;
        transition: 400ms;
        border-radius: 50%;
    }  
`;

export const ToggleButton = styled.input.attrs({ type: 'checkbox' })`
    opacity: 0;
    width: 30px;
    height: 30px;

    &:checked + ${SliderSpan} {
        background: ${ (props) => props.theme.colors.violet };
    }

    &:focus + ${SliderSpan} {
        box-shadow: 0 0 1px red;
    }

    &:checked + ${ SliderSpan }:before {
        transform: translateX(26px);
    }
`;

